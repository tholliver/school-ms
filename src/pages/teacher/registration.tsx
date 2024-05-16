import ReusableForm from '@/components/ReusableForm'

const TeacherRegistration = () => {
  return (
    <div>
      <p className="max-w-lg text-3xl pb-4 font-semibold leading-normal text-gray-900 dark:text-white">
        Teacher registration
      </p>

      <ReusableForm
        uriToPost="/api/teachers/register"
        inputProps={{
          name: { type: 'text', placeholder: 'Enter name' },
          lastname: { type: 'text', placeholder: 'Enter Lastname' },
          dob: { type: 'text', placeholder: 'Enter date of Birtday' },
          mail: { type: 'text', placeholder: 'Enter mail' },
          password: { type: 'password', placeholder: 'Enter password' },
          // role: { type: 'text', placeholder: 'Role' },
          address: { type: 'text', placeholder: 'Enter address' },
          phone: { type: 'text', placeholder: 'Enter phone' },
        }}
      />
    </div>
  )
}

export default TeacherRegistration
