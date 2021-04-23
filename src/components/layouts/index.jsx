import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Footer from './Footer';

function Layout({children}) {
    return (
        <body classNameNameName="sb-nav-fixed">
        
        <Nav />

        <div id="layoutSidenav">
            
            <SideNav />

            <div id="layoutSidenav_content">
                <main>
                    {children}
                </main>

                <Footer />

            </div>
        </div>
    </body>
    )
}

export default Layout
