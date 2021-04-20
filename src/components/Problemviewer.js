import React from 'react';
import "@react-firebase/database"
import {
    FirebaseDatabaseProvider,
    FirebaseDatabaseNode,
    FirebaseDatabaseTransaction
} from "@react-firebase/database"
import "firebase/database"


export default function Problemviewer(){
    return(
        <div>
            <h1>Entered problems</h1>
            <FirebaseDatabaseNode path="Problems/">
                {({value, isLoading}) =>{
                    if(isLoading){
                        return(
                            <div>
                                Loading
                            </div>
                        )
                    }
                    else{
                        if (value === null || value === undefined){
                            return null
                        }
                        const user_created = Object.keys(value)
                        const problem_name = Object.values(value)
                        return(
                            <div>
                                <table>
                                    <tr>
                                        <td>User</td>
                                        <td>Problem name</td>
                                    </tr>
                                    {problem_name.map((val,i) =>{
                                        return <ProblemLine user={val} problem={user_created[i]}></ProblemLine>
                                    })}
                                </table>
                            </div>
                        )
                    }
                }}
            </FirebaseDatabaseNode>
            
        </div>
    )
}


function ProblemLine(props){
    return(
            <tr>
                <td>{props.user}</td>
                <td>{props.problem}</td>
            </tr>
    )
}