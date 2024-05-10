import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { ResponsiveBar } from '@nivo/bar'
import { SchoolIcon, BookIcon } from '../icons'

export function AdminDashboard2() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme School</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: '32/32',
                objectFit: 'cover',
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="hidden w-60 flex-col border-r bg-white p-6 dark:border-gray-800 dark:bg-gray-950 md:flex">
          <div className="space-y-1">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-4 w-4" />
              Students
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <SchoolIcon className="h-4 w-4" />
              Teachers
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <BookIcon className="h-4 w-4" />
              Classes
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <FileTextIcon className="h-4 w-4" />
              Reports
            </Link>
          </div>
        </nav>
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
                <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +5.2% from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Teachers
                </CardTitle>
                <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +3.1% from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Classes
                </CardTitle>
                <BookOpenIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +2.4% from last year
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <div className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800">
                      May 15
                    </div>
                    <div>
                      <div className="font-medium">Parent-Teacher Meeting</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        9:00 AM - 11:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <div className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800">
                      May 20
                    </div>
                    <div>
                      <div className="font-medium">Science Fair</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        1:00 PM - 5:00 PM
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <div className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800">
                      May 25
                    </div>
                    <div>
                      <div className="font-medium">End of Year Ceremony</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        7:00 PM - 9:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <BarChart className="aspect-[4/3]" /> */}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

// function BarChart(props: any) {
//   return (
//     <div {...props}>
//       <ResponsiveBar
//         data={[
//           { name: 'Jan', count: 111 },
//           { name: 'Feb', count: 157 },
//           { name: 'Mar', count: 129 },
//           { name: 'Apr', count: 150 },
//           { name: 'May', count: 119 },
//           { name: 'Jun', count: 72 },
//         ]}
//         keys={['count']}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={['#2563eb']}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: '9999px',
//             },
//             container: {
//               fontSize: '12px',
//               textTransform: 'capitalize',
//               borderRadius: '6px',
//             },
//           },
//           grid: {
//             line: {
//               stroke: '#f3f4f6',
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   )
// }

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function FileTextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
