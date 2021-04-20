import React from 'react'


class UserPage extends React.Component{
    render(){
        return(
            <div>
                <p>Velkommen #USER!#</p>
                <p>Du har sat problemet: </p>
                <button>Ændre problem</button>
                <p>Du har klatret x problemer</p>
                <button>Registrer ny klatret rute</button>
                <p>Du har stemt på problemet: </p>
                <button>Ændre din stemme</button>
            </div>
        )
    }
}

export default UserPage;