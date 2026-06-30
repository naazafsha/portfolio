export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Afsha Naaz Ansari',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Logicbeam Softwares',
    },
    url: 'https://naazafsha.github.io/portfolio/',
    sameAs: [
      'https://github.com/naazafsha',
      'https://www.linkedin.com/in/afsha-naaz-ansari-a099b6158/',
    ],
    knowsAbout: [
      'Generative AI',
      'LLM Integration',
      'OpenAI API',
      'SaaS Architecture',
      'Multi-tenant Systems',
      'RESTful API Design',
      'Async Job Queues',
      'RBAC',
      'AWS S3',
      'Prompt Engineering',
      'PHP',
      'Laravel',
      'CodeIgniter',
      'JavaScript',
      'React',
      'Node.js',
      'MERN Stack',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kota',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
