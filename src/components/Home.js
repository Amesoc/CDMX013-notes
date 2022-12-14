import React from 'react';
import {signOutUser} from '../config/AuthGoogle';
import ViewforPost from './ViewforPost';
import Header from './Header';
import ViewNavigation from './ViewNavigation';
import CreateNote from './CreateNote';


function Home() {
    return (
        <div>
            <Header />
            <ViewNavigation/>
            <ViewforPost/>
            <CreateNote/>
        </div>
    )
}
export default Home;