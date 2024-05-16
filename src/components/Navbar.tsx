import Link from 'next/link'
import React from 'react'
import { MountainIcon } from './icons'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = () => {
  const currentUser = { name: 'Aber', lastname: 'Suarez' }
  return (
    <>
      <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme School</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8  dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <Avatar>
                  <AvatarImage
                    alt="Teacher Avatar"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>{`${currentUser.name[0]} ${currentUser.lastname[0]}`}</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  )
}

export default Navbar
