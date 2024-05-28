import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../core/user';

import NoAuthenticatedHeader from '../components/header/NoAuthenticatedHeader';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    const { userState } = useContext(UserContext);

    if (!userState || userState.isLoading) {
        return (
            <div className="flex flex-col relative">
                <NoAuthenticatedHeader />
                <div className="flex w-full h-full min-h-screen p-2">
                    <Outlet />
                </div>
                <Footer />
            </div>
        );
    } else {
        return <Outlet />;
    }
};

export default MainLayout;