import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { AdminDashboard } from '@/components/component/admin-dashboard'
import { AdminDashboard2 } from '@/components/component/admin-dashboard2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <div>
        {/* <AdminDashboard /> */}
        <AdminDashboard2 />
      </div>
    </main>
  )
}
