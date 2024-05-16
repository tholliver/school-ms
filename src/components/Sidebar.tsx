import Link from 'next/link'
import React from 'react'
import { BookIcon, FileTextIcon, SchoolIcon, UsersIcon } from './icons'
import { useRouter } from 'next/router'

interface SidebarProps {
  menulist: { name: string; route: string; icon: JSX.Element }[]
}

const Sidebar = (props: SidebarProps) => {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <nav className="hidden w-60 flex-col border-r bg-white p-6 dark:border-gray-800 dark:bg-gray-950 md:flex">
        <div className="space-y-1">
          {props.menulist.map((ml) => (
            <Link
              key={ml.route}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-50
              ${
                router.pathname === `/${ml.route}`
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
                  : 'hover:text-gray-900'
              }
              
              `}
              href={`/${ml.route}`}
            >
              {ml.icon}
              {ml.name}
            </Link>
          ))}
          {/* <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/teacher"
          >
            <SchoolIcon className="h-4 w-4" />
            Teachers
          </Link>
          <Link
            className={`flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50`}
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
          </Link> */}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
