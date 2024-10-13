import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'
import FooterBG from './pagesComponents/FooterBG';
import LoginLogin from './pagesComponents/LoginLogin';
import LoginEm from './pagesComponents/LoginEm';

const Login = () => {
    return (
        <div>
            <Discount />
            <Header />
            <LoginLogin />
            <LoginEm />
            <FooterBG />
        </div>
    )
};

export default Login;