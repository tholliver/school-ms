import ReusableForm from '@/components/ReusableForm'
import { useMutation } from '@tanstack/react-query'
import Head from 'next/head'

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="Login" key="title" />
      </Head>
      <ReusableForm
        uriToPost="/api/login"
        inputProps={{
          mail: { type: 'text', placeholder: 'Enter mail' },
          password: { type: 'password', placeholder: 'Enter password' },
        }}
      />

      {/* <form className="max-w-sm mx-auto">
        <label
          htmlFor="website-admin"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bonnie Green"
          />
        </div>
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form> */}
    </div>
  )
}

export default Login
