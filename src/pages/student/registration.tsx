import ReusableForm from '@/components/ReusableForm'

const StudentRegistration = () => {
  return (
    <div>
      <ReusableForm
        uriToPost="/api/students/register"
        inputProps={{
          name: { type: 'text', placeholder: 'Enter name' },
          lastname: { type: 'text', placeholder: 'Enter Lastname' },
          dob: { type: 'text', placeholder: 'Enter date of Birtday' },
          mail: { type: 'text', placeholder: 'Enter mail' },
          password: { type: 'password', placeholder: 'Enter password' },
          role: { type: 'text', placeholder: 'Role' },
          address: { type: 'text', placeholder: 'Enter address' },
          phone: { type: 'text', placeholder: 'Enter phone' },
        }}
      />
    </div>
  )
}

export default StudentRegistration
