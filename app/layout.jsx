import { Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Afsha Naaz Ansari | Software Engineer & AI Developer',
  description:
    'Afsha Naaz Ansari - Software Engineer specializing in AI-powered SaaS platforms, LLM integration, OpenAI API, and full-stack development with 3+ years of experience in multi-tenant SaaS architecture, RESTful API design, and prompt engineering.',
  keywords: [
    'Software Engineer',
    'AI Developer',
    'Generative AI',
    'LLM Integration',
    'OpenAI API',
    'SaaS Architecture',
    'Multi-tenant',
    'RESTful API Design',
    'Async Job Queues',
    'RBAC',
    'AWS S3',
    'Prompt Engineering',
    'Full Stack Developer',
    'MERN Stack',
    'PHP',
    'CodeIgniter',
  ],
  authors: [{ name: 'Afsha Naaz Ansari' }],
  creator: 'Afsha Naaz Ansari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naazafsha.github.io/portfolio/',
    title: 'Afsha Naaz Ansari | Software Engineer & AI Developer',
    description:
      'Software Engineer specializing in AI-powered SaaS platforms, LLM integration, and full-stack development. 3+ years of experience building scalable applications.',
    siteName: 'Afsha Naaz Ansari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afsha Naaz Ansari | Software Engineer & AI Developer',
    description:
      'Software Engineer specializing in AI-powered SaaS platforms, LLM integration, and full-stack development.',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
