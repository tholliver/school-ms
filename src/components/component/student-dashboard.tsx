import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from '@/components/ui/collapsible'
export function StudentDashboard() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            alt="Student Avatar"
            className="rounded-full"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: '48/48',
              objectFit: 'cover',
            }}
            width={48}
          />
          <div>
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              John Doe
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Grade 10 | Student ID: 12345
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-6">
        <Collapsible className="space-y-4">
          <div className="border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between px-6 py-4 cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Classes
              </h2>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    English
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Grade: A
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Math
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Grade: B+
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Science
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Grade: A-
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    History
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Grade: B
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </div>
          <div className="border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between px-6 py-4 cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Grades
              </h2>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Semester 1
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    GPA: 3.8
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Semester 2
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    GPA: 3.6
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </div>
          <div className="border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between px-6 py-4 cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Attendance
              </h2>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Days Attended
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    145 days
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Days Absent
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    10 days
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </div>
          <div className="border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between px-6 py-4 cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Extracurricular Activities
              </h2>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Student Council
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Member
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Drama Club
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lead Actor
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Chess Club
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Captain
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Robotics Club
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Member
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </main>
    </div>
  )
}
