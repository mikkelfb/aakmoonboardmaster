import React, { useState } from 'react'
import { useDatabase, useDatabaseListData, useDatabaseObjectData, useUser } from 'reactfire'
import EnterClimb from './EnterClimb'
import { Loading } from './Loading'


class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Velkommen {this.props.user.displayName}</p>
                <MoonBoardName></MoonBoardName>
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

const MoonBoardName = () => {
    const database = useDatabase();
    const user = useUser();
    const path = 'User/' + user.data.uid + '/Profile'
    const refDatabase = database.ref(path)
    const [toggleEdit, setToggleEdit] = useState(false)
    const { status, data: Profile } = useDatabaseObjectData(refDatabase)

    if (status === 'loading') {
        return <Loading></Loading>
    }

    console.log(Profile.MoonboardUsername)

    if (typeof Profile.MoonboardUsername === 'undefined') {
        return (
            <div>
                Please enter moonbard username
                <EditMoonboardUsername moonboard_username={''}></EditMoonboardUsername>
            </div>
        )
    }

    return (
        <div>Moonbard username: {Profile.MoonboardUsername}</div>
    )
}

class EditMoonboardUsername extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Moonboard_username: props.moonboard_username
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChangeName = (event) => {
        this.setState({ Moonboard_username: event.target.value });
        event.preventDefault(event);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.Moonboard_username} onChange={this.handleChangeName}></input>
                    </label>
                    <UpdateMoonBoardName moonboard_username={this.state.Moonboard_username}></UpdateMoonBoardName>
                </form>
            </div>
        )
    }

}



const UpdateMoonBoardName = (props) => {
    const Moonboard_username = props.moonboard_username
    const user = useUser()
    const database = useDatabase();
    const pathUser = 'User/' + user.data.uid
    const ref = database.ref(pathUser)

    const UpdateData = () => {
        ref.set({
            MoonboardUsername: Moonboard_username
        })
    }

    return (
        <button label='update' onClick={() => { UpdateData(); }}>Update</button>
    )

}


const UserProblem = () => {
    const database = useDatabase();
    const user = useUser();
    const path = 'User/' + user.data.uid + '/Problem'
    const refDatabase = database.ref(path)
    const [toggleEdit, setToggleEdit] = useState(false)
    const { status, data: userProblem } = useDatabaseObjectData(refDatabase)


    if (status === 'loading') {
        return (
            <div>Loading</div>
        )
    }
    console.log(userProblem)
    console.log(userProblem.NO_ID_FIELD)
    console.log(userProblem.Name)
    console.log(userProblem.Grade)
    console.log(userProblem.ProblemID)
    if (typeof userProblem.Name === 'undefined' && typeof userProblem.Grade === 'undefined') {
        return (
            <div>
                Du har ikke registreret en rute!
                <EnterClimb routeName={userProblem.Name} routeGrade={userProblem.Grade} setToggleEdit={setToggleEdit}></EnterClimb>
            </div >
        )
    }

    if (toggleEdit === false) {
        return (
            <div>
                Du har sat ruten: {userProblem.Name} - {userProblem.Grade}
                <button onClick={() => { setToggleEdit(true) }}>Ændre</button>
            </div>
        )
    }

    return (
        <div>
            <EnterClimb routeName={userProblem.Name} routeGrade={userProblem.Grade} setToggleEdit={setToggleEdit} problemID={userProblem.ProblemID}></EnterClimb>
        </div>
    )
}