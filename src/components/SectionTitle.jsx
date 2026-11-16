import SectionEyebrow from './SectionEyebrow'

export default function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
}) {
  return (
    <div className={`section-title section-title-${align} reveal`}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}

      <h2>
        {title} <em>{accent}</em>
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  )
}