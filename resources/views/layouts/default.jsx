import React from 'react';
import Footer from '../components/footer'

const DefaultLayout = (props) => {
    return (
        <html>
        <head>
            <title>{props.title}</title>
            <meta name="keywords" content="samgan is awesome."/>
            <link rel="stylesheet" href="/public/css/style.css" />
        </head>
        <body>
        {props.children}
        <Footer/>
        </body>
        </html>
    );
}

module.exports = DefaultLayout;