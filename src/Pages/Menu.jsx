import {useState} from 'react';
import HeadingHome from '../components/Fragments/Heading-Home';
import BioUser from '../components/Fragments/Bio-User';
import Menu from '../components/Fragments/Menu';
export default function App() {
    return (
        <>
            <HeadingHome />
            <BioUser />
            <Menu />
        </>
    )
}