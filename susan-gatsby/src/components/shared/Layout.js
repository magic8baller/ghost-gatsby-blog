import React from "react";
import config from "utils/siteConfig";
import GlobalStyle from "styles/global";
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const { siteTitleMeta: site } = config;
    console.log({site});
    return (
        <>
            <GlobalStyle />
            
            <Navbar/>
            {children}
        </>
    );
};

export default Layout;
