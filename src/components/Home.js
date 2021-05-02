import React from 'react'
import Info from './Info'
import { Loading } from './Loading'
import UserPage from './UserPage';
import { auth, useAuth, useUser } from 'reactfire'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { reduceEachTrailingCommentRange } from 'typescript';

const signOut = auth => auth.signOut().then(() => console.log('signed out'))

const GoogleLogin = () => {
    const auth = useAuth;

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
        callback: {
            signInSuccessWithAuthResult: () => false
        }
    }

    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    )
}

function DeafaultHome() {
    return (
        <div>
            <Info></Info>
            <h1>Hvad venter du på?</h1>
            <p>Login her:</p>
            <GoogleLogin></GoogleLogin>
        </div>
    )
}

const LoggedInHome = ({ user }) => {
    const auth = useAuth();
    return (
        <div>
            <UserPage user={user}></UserPage>
            <button onClick={() => signOut(auth)}>Log ud</button>
        </div>
    )
}



export const Home = () => {
    const { status, data: user, hasEmitted } = useUser();

    /*if (status === 'loading' || hasEmitted === false) {
        return <Loading></Loading>
    }*/

    return user ? <LoggedInHome user={user}></LoggedInHome> : <DeafaultHome></DeafaultHome>
}




