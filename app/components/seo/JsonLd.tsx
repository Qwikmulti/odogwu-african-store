interface JsonLdProps {
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ jsonLd }: JsonLdProps) {
  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}
