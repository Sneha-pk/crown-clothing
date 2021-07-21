import React from 'react';
import './signin-and-signup.style.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';
const SignInAndSignUp = () => {
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUp;
