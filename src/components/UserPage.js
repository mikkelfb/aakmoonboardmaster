import React, {useState} from 'react'
import {useDatabase, useDatabaseListData, useDatabaseObjectData, useUser} from 'reactfire'
import EnterClimb from './EnterClimb'

class UserPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>Velkommen {this.props.user.displayName}</p>
                <UserProblem></UserProblem>
                <p>Du har klatret x problemer</p>
                <button>Registrer ny klatret rute</button>
                <p>Du har stemt på problemet: </p>
                <button>Ændre din stemme</button>
            </div>
        )
    }
}

export default UserPage;

/*
class UserProblem extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        if (this.state.isToggleOn === false){
            return(
                <div>
                    <UProblem></UProblem>
                </div>
            );
        }
        else{
            return(
                <div>
                    <UProblem></UProblem>
                </div>
            )
        }
    }
}
*/

const UserProblem = () =>{
    const database = useDatabase();
    const user = useUser();
    const path = 'User/' + user.data.uid + '/Problem'
    const refDatabase = database.ref(path)
    const [toggleEdit, setToggleEdit] = useState(false)
    const {status, data: userProblem} = useDatabaseObjectData(refDatabase)


    
    console.log(userProblem)

    if (status === 'loading'){
        return(
            <div>Loading</div>
        )
    }

    if(toggleEdit === false){
        return(
            <div>
                Du har sat ruten: {userProblem.Name} - {userProblem.Grade}
                <button onClick={()=> {setToggleEdit(true)}}>Ændre</button>
            </div>
        )
    }

    return(
        <div>
            <EnterClimb routeName={userProblem.Name} routeGrade={userProblem.Grade} setToggleEdit={setToggleEdit}></EnterClimb>
        </div>
    )
}