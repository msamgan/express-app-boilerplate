import React from 'react';
import DefaultLayout from './layouts/default'

const Home = () => {
    return (
        <DefaultLayout title="home">
            <h1 className="center">Express Application Boilerplate with React Templating</h1>
        </DefaultLayout>
    )
}

module.exports = Home;