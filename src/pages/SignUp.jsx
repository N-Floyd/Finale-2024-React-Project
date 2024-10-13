import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import SignupSignup from './pagesComponents/SignupSignup';
import FooterBG from './pagesComponents/FooterBG';
import SignupEm from './pagesComponents/SignupEm';

const SignUp = () => {
    return (
        <div>
            <Discount />
            <Header />
            <SignupSignup />
            <SignupEm />
            <FooterBG />
        </div>


    )
};

export default SignUp;