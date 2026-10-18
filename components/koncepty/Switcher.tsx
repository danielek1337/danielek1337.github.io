import './switcher.css';

/* Small floating switcher between the live page and the layout concepts. */
export default function Switcher({ current }: { current: 'a' | 'b' }) {
  const items = [
    { href: '/', label: 'Obecna' },
    { href: '/koncepty/a/', label: 'A', key: 'a' },
    { href: '/koncepty/b/', label: 'B', key: 'b' },
  ];
  return (
    <nav className="k-switch" aria-label="Koncepty">
      <span>Koncept</span>
      {items.map((i) => (
        <a key={i.href} href={i.href} aria-current={i.key === current ? 'page' : undefined}>
          {i.label}
        </a>
      ))}
    </nav>
  );
}
