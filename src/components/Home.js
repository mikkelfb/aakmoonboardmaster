import React from 'react'
import Info from './Info'
import UserPage from './UserPage';

export default function Home(props){
    const signedIn = props.signedIn;

    if(signedIn){
        return(
            <UserPage></UserPage>
        )
    }
    else{
        return(
            <Info></Info>
        )
    }
    
}
