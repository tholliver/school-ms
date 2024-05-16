import { TeacherDashboard } from '@/components/Dashboards/teacher-dashboard'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return <TeacherDashboard id={Number(router.query.id)} />
}
