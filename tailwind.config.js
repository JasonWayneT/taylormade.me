/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant": "#743500",
        "tertiary-container": "#bb5800",
        "on-primary-container": "#fffbff",
        "surface-dim": "#dad9e4",
        "on-primary-fixed-variant": "#0034c0",
        "error-container": "#ffdad6",
        "outline": "#747686",
        "border-subtle": "#E5E7EB",
        "surface-container-high": "#e8e7f3",
        "text-primary": "#111827",
        "surface": "#FFFFFF",
        "on-surface-variant": "#444654",
        "tertiary-fixed": "#ffdbc8",
        "text-secondary": "#667085",
        "on-error": "#ffffff",
        "inverse-on-surface": "#f1effb",
        "primary-fixed": "#dde1ff",
        "on-tertiary": "#ffffff",
        "secondary": "#5b5f62",
        "primary": "#2a4dd7",
        "secondary-fixed": "#e0e3e7",
        "tertiary": "#954500",
        "surface-variant": "#e2e1ed",
        "accent-hover": "#3E59D9",
        "primary-fixed-dim": "#b9c3ff",
        "outline-variant": "#c4c5d7",
        "on-primary-fixed": "#001257",
        "on-background": "#1a1b23",
        "tertiary-fixed-dim": "#ffb68a",
        "secondary-fixed-dim": "#c3c7cb",
        "inverse-primary": "#b9c3ff",
        "primary-container": "#4868f1",
        "surface-tint": "#2d50d9",
        "on-primary": "#ffffff",
        "on-tertiary-fixed": "#321300",
        "surface-container-low": "#f4f2fe",
        "secondary-container": "#dde0e4",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#5f6367",
        "error": "#ba1a1a",
        "surface-bright": "#fbf8ff",
        "on-error-container": "#93000a",
        "surface-container": "#eeedf8",
        "on-secondary-fixed": "#181c1f",
        "on-surface": "#1a1b23",
        "on-secondary-fixed-variant": "#43474b",
        "background": "#F7F8FA",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#2f3039",
        "on-tertiary-container": "#fffbff",
        "surface-container-highest": "#e2e1ed"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "stack-sm": "8px",
        "gutter": "24px",
        "container-max": "1200px",
        "stack-md": "16px",
        "stack-lg": "32px",
        "section-padding": "80px"
      },
      fontFamily: {
        "h3": ["Manrope", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "h2": ["Manrope", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "h1": ["Manrope", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      },
      fontSize: {
        "h3": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "label-sm": ["14px", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "500" }],
        "h2": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "h1": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
