import Link from 'next/link'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
// import { ResponsiveBar } from '@nivo/bar'
import { UsersIcon, FileTextIcon, BookOpenIcon, PlusIcon } from '../icons'

export function AdminDashboard2() {
  return (
    <>
      <main className="">
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
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/student/registration"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Student
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/teacher/registration"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Teacher
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Class
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            Generate Report
          </Link>
        </div>
      </main>
    </>
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
