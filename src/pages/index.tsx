// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AdminDashboard2 } from '@/components/component/admin-dashboard2'
import { AdminDashboard } from '@/components/component/admin-dashboard'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <AdminDashboard2 />
    </main>
  )
}
