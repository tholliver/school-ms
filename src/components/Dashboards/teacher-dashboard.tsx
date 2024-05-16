import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import Link from 'next/link'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { fetchTeacherDash } from '@/services/teacher'

import { useQuery } from '@tanstack/react-query'

export function TeacherDashboard({ id }: { id: number }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['info', id],
    queryFn: () => fetchTeacherDash(id),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* <header className="bg-gray-900 text-white py-6 px-8">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage alt="Teacher Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>{`${data.name[0]} ${data.lastname[0]}`}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">
              {`${data.name} ${data.lastname} `}
            </h1>
            <p className="text-gray-300">{data.role}</p>
          </div>
        </div>
      </header> */}
      <main className="container ">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subjects.map((subject) => (
              <Card key={subject.id}>
                <CardHeader>
                  <CardTitle>{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {` ${subject.classroom.grade} - ${subject.classroom.section} `}

                  {/* Here redirect to the list of the group */}
                  <Link href={'/'}></Link>
                </CardContent>
                {/* <CardContent>
                <h3 className="text-lg font-medium mb-2">Students</h3>
                <ul className="space-y-2">
                  {data.map((student) => (
                    <li
                      key={student.id}
                      className="flex items-center space-x-4 rtl:space-x-reverse"
                    >
                      <Avatar>
                        <AvatarImage
                          alt={`${student.name} ${student.lastname}`}
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>
                          {student.name[0]}
                          {student.lastname[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="ml-2">
                        {`${student.name} ${student.lastname}`}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">John Bauer</span>
                  </li>
                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Emily Martinez</span>
                  </li>
                </ul>
              </CardContent> */}
              </Card>
            ))}
            {/* <Card>
              <CardHeader>
                <CardTitle>Geometry</CardTitle>
                <CardDescription>
                  A study of the properties and relationships of points, lines,
                  angles, and shapes in two and three dimensions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-medium mb-2">Students</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Jacob Davis</span>
                  </li>
                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>LW</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Lily Wang</span>
                  </li>
                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>RG</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Ryan Garcia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pre-Calculus</CardTitle>
                <CardDescription>
                  A preparatory course for calculus, covering topics such as
                  functions, trigonometry, and analytic geometry.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-medium mb-2">Students</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Ava Sanchez</span>
                  </li>

                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Michael Kim</span>
                  </li>
                  <li className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        alt="Student Avatar"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Jessica Lee</span>
                  </li>
                </ul>
              </CardContent>
            </Card> */}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Schedule</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Monday</TableHead>
                <TableHead>Tuesday</TableHead>
                <TableHead>Wednesday</TableHead>
                <TableHead>Thursday</TableHead>
                <TableHead>Friday</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>8:00 AM - 9:00 AM</TableCell>
                <TableCell>Algebra I</TableCell>
                <TableCell>Geometry</TableCell>
                <TableCell>Algebra I</TableCell>
                <TableCell>Geometry</TableCell>
                <TableCell>Pre-Calculus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>9:15 AM - 10:15 AM</TableCell>
                <TableCell>Pre-Calculus</TableCell>
                <TableCell>Algebra I</TableCell>
                <TableCell>Geometry</TableCell>
                <TableCell>Algebra I</TableCell>
                <TableCell>Geometry</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10:30 AM - 11:30 AM</TableCell>
                <TableCell>Geometry</TableCell>
                <TableCell>Pre-Calculus</TableCell>
                <TableCell>Algebra I</TableCell>
                <TableCell>Pre-Calculus</TableCell>
                <TableCell>Algebra I</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12:30 PM - 1:30 PM</TableCell>
                <TableCell>Algebra I</TableCell>
                <TableCell>Geometry</TableCell>
                <TableCell>Pre-Calculus</TableCell>
                <TableCell>Algebra I</TableCell>
                <TableCell>Geometry</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.mail}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.phone}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday, 8:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
