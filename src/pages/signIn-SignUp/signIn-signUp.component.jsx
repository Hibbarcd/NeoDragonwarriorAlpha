import React from 'react'
import SignIn from '../../features/signIn/signIn.component'
import SignUp from '../../features/signUp/signUp.component'

import './signIn-Signup.style.scss'


const SignUpSignInPage = () => (
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
    </div>
)
export default SignUpSignInPage