import React from 'react'
import Info from './Info'
import UserPage from './UserPage';

import "@react-firebase/auth"
import {
    IfFirebaseAuthed,
    IfFirebaseUnAuthed,
} from "@react-firebase/auth";


import "firebase/auth";
export default function Home(){
    return(
        <>
            <IfFirebaseAuthed>
                <UserPage></UserPage>
            </IfFirebaseAuthed>
            <IfFirebaseUnAuthed>
                <Info></Info>
            </IfFirebaseUnAuthed>
        </>
    )
}
