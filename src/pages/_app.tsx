import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {
  BookIcon,
  FileTextIcon,
  SchoolIcon,
  UsersIcon,
} from '@/components/icons'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const allmenu = [
    {
      name: 'Students',
      route: 'student',
      icon: <UsersIcon className="h-4 w-4" />,
    },
    {
      name: 'Teachers',
      route: 'teacher',
      icon: <SchoolIcon className="h-4 w-4" />,
    },
  ]
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page" key="title" />
      </Head>
      <Navbar />
      <section className="flex min-h-screen">
        <Sidebar menulist={allmenu} />
        <section className="flex-1 p-6">
          <Component {...pageProps} />
        </section>
      </section>
    </QueryClientProvider>
  )
}
