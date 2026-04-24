import Navbar from '@/components/shared/Navbar';
import React, { Children } from 'react';
import { monserrat } from '../layout';

const AuthLayout = ({ children }) => {
    return (
        <div className={`${monserrat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;