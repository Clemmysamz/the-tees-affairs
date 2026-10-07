type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      {eyebrow ? (
        <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.75rem' }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, lineHeight: 1.05, margin: 0 }}>{title}</h2>
      {description ? (
        <p style={{ marginTop: '0.9rem', maxWidth: '42rem', color: '#4b5563', fontSize: '1.05rem' }}>{description}</p>
      ) : null}
    </div>
  );
}
