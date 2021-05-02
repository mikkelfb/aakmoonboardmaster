import React from 'react'
import { useDatabase, useDatabaseListData, useDatabaseObjectData, useUser } from 'reactfire'
import { useDatabaseList } from 'reactfire'

export default function Problemviewer() {
    return (
        <div>
            <h1>Entered problems</h1>
            <Problems></Problems>
        </div>
    )
}


const Problems = () => {
    const database = useDatabase();
    const path = 'Problems';
    const refDatabase = database.ref(path)
    const { status, data: problems } = useDatabaseListData(refDatabase)

    if (status === 'loading') {
        return (
            <div>Loading</div>
        )
    }
    console.log(problems)
    return (
        <div>
            {problems.map((problem, index) => (
                <ProblemRow nr={index} navn={problem.Name} grade={problem.Grade}></ProblemRow>
            ))}
        </div>
    )
}

const ProblemRow = (props) => {
    return (
        <div>nr: {props.nr} navn: {props.navn} grade: {props.grade}</div>
    )
}