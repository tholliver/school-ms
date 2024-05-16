import {
  TableHead,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { fetchStudents } from '@/services/student'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Home = () => {
  const pagination = 10
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['all', pagination],
    queryFn: () => fetchStudents(pagination),
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
        <h2 className="text-2xl font-bold mb-2">Students</h2>
        <p className="text-md text-gray-300">All students registered</p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((student) => (
              <TableRow key={student.id}>
                <TableCell> {`${student.name} ${student.lastname}`}</TableCell>
                <TableCell>{student.mail}</TableCell>
                <TableCell>{student.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

export default Home
