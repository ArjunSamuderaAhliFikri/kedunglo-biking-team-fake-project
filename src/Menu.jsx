import {useState} from 'react';
import HeadingHome from './components/Heading-Home';
import BioUser from './components/Bio-User';
import Menu from './components/Menu';
export default function App() {
    return (
        <>
            <HeadingHome />
            <BioUser />
            <Menu />
        </>
    )
}