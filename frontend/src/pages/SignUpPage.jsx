import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <SignUp routing="path" path="/sign-up" />
        </div>
      </div>
    </section>
  )
}

export default SignUpPage