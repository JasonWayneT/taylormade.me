const colorMap = {
  neutral: 'bg-surface-container text-text-secondary border-outline-variant',
  emphasis: 'bg-surface-container-high text-text-primary border-outline-variant',
  brand:    'bg-primary/10 text-primary border-primary/20',
};

export default function CategoryBadge({ color, label }) {
  return (
    <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xl border ${colorMap[color] ?? colorMap.neutral}`}>
      {label}
    </span>
  );
}
