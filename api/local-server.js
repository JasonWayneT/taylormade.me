import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupApi() {
  // We'll scan the api directory for subfolders (like job-agent)
  const apiRoot = path.join(__dirname);
  const folders = fs.readdirSync(apiRoot).filter(f => fs.statSync(path.join(apiRoot, f)).isDirectory());

  for (const folder of folders) {
    const folderPath = path.join(apiRoot, folder);
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.js') && f !== 'prompts.js');

    for (const file of files) {
      const route = `/api/${folder}/${file.replace('.js', '')}`;
      const handlerModule = await import(`./${folder}/${file}`);
      const handler = handlerModule.default;

      app.post(route, async (req, res) => {
        console.log(`[API] POST ${route}`);
        try {
          await handler(req, res);
        } catch (error) {
          console.error(`[API ERROR] ${route}:`, error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });

      console.log(`[API] Registered route: ${route}`);
    }
  }

  app.listen(port, () => {
    console.log(`[LOCAL API] Bridge running at http://localhost:${port}`);
  });
}

setupApi().catch(err => {
  console.error('[LOCAL API] Setup failed:', err);
});
