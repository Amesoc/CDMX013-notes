import React from 'react';
import {signOutUser} from '../config/AuthGoogle';
import SearchNote from './SearchNote';
import Header from './Header';
import CreateNote from './CreateNote';

function Home() {
    return (
        <div>
            <Header />
            <SearchNote/>
            <CreateNote/>
        </div>
    )
}
export default Home;