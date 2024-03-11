import React from 'react'
import Form from '../../components/shared/Form/Form';

const Register = () => {
  return (
    <>
      <main>
        <Form  formType={'register'} fromTitle={'Create an Account '} formSubHeading={'Enter your Personal Detail to Create Account'} submitBtn={'Signup'}></Form>
      </main>
    </>
  );
}

export default Register