export default function PageHero({ tag, titlePrefix, titleHighlight, description }) {
  return (
    <div className="page-hero">
      {tag && (
        <div className="page-hero-tag">
          <span className="dot"></span>{tag}
        </div>
      )}
      <h1>
        {titlePrefix} {titleHighlight && <span className="hl">{titleHighlight}</span>}
      </h1>
      {description && <p>{description}</p>}
    </div>
  );
}
