import React from 'react'
import Form from '../../components/shared/Form/Form'

const Login = () => {
  return (
    <>
       <main>
       {/* <h1>Login page</h1> */}
       <Form  formType={'login'} fromTitle={'Login Your Account '} formSubHeading={'Enter your Detail to Login'} submitBtn={'Login'}></Form>
      </main>

    </>
  )
}

export default Login