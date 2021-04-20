import React from 'react';

export default function Login(){
    return(
        <form>
            <label>
                <p>Username</p>
                <input type="text"/>
            </label>        
            <label>
                <p>Password</p>
                <input type="Password"></input>
            </label>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    )
}