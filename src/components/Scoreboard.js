import React from 'react'

export default function Scoreboard(props){
    const isLoggedIn = props.signedIn
    console.log(isLoggedIn)
    if (isLoggedIn){
        return(
            <div>
                <ScoreBoardTop></ScoreBoardTop>
                bla. 
                bla.
                bla.
            </div>
        )
    }
    else{
        return(
            <div>
                <ScoreBoardTop></ScoreBoardTop>
                Du skal være logget in for at se scoreboarded
            </div>
        )
    }
    
}

function ScoreBoardTop(){
    return(
        <div>
            <h1>Scoreboard</h1>
            Her kan du se placeringen af hhv. bedste problem, og hvem der har klatret flest ruter.
        </div>
    )
}


// class Scoreboard extends React.Component{
//     render(){
//         return(
            
//         )
//     }
// }

// export default Scoreboard;
