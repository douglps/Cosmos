interface SectionProps {
  title?: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title && id ? `${id}-heading` : undefined}
      className=""
    >
      {title && (
        <h2 id={id ? `${id}-heading` : undefined}>
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
}
