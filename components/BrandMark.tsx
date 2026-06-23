/** Brand glyph - a shopping cart on a pinned bar, in the violet brand gradient. */
export default function BrandMark({ size = 34, radius = 10 }: { size?: number; radius?: number }) {
  return (
    <span className="mark" style={{ width: size, height: size, borderRadius: radius }}>
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h2l2.2 9.5a1.3 1.3 0 0 0 1.3 1h7.5a1.3 1.3 0 0 0 1.3-1L20 7H6" />
        <circle cx="9" cy="18.5" r="1.3" />
        <circle cx="16" cy="18.5" r="1.3" />
        <path d="M4 21.5h16" />
      </svg>
    </span>
  );
}
