"use client"

export default function DynamicDocsPage({ params }: { params: { slug: string[] } }) {
  const title = params.slug[params.slug.length - 1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-black mb-8">{title}</h1>
      <div className="prose prose-lg max-w-none text-gray-600">
        <p>Content for this section is coming soon.</p>
        <p>
          Check out the{" "}
          <a
            href="https://github.com/402-labs/x402"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            GitBook repository
          </a>{" "}
          for more details or to contribute.
        </p>
      </div>
    </div>
  )
}

