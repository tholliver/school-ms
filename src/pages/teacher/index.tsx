import { TeacherDashboard } from '@/components/Dashboards/teacher-dashboard'
// { params }: { params: { teacherId: number } }
import { useQuery } from '@tanstack/react-query'
import { fetchTeachers } from '@/services/teacher'

import {
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  Table,
} from '@/components/ui/table'

export default function Home() {
  const pagination = 10
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['all', pagination],
    queryFn: () => fetchTeachers(pagination),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Teachers</h2>
        <p className="text-md text-gray-300">All techers registered</p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subjects</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell> {`${teacher.name} ${teacher.lastname}`}</TableCell>
                <TableCell>{teacher.mail}</TableCell>
                <TableCell>
                  {teacher.subjects.map((sub) => sub.name).join(', ')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}
