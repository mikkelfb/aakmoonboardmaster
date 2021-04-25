import React from 'react'
import { useState } from 'react'
import {useDatabase, useDatabaseListData, useDatabaseObjectData, useUser} from 'reactfire'

class EnterClimb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            routeName: props.routeName, 
            routeGrade: props.routeGrade
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeGrade = this.handleChangeGrade.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
        alert("Du har ændret problemet!")
        this.props.setToggleEdit(false)
    }

    handleChangeName = (event) =>{
        this.setState({routeName: event.target.value})
        console.log(event.target.value)
        event.preventDefault(event);
    }

    handleChangeGrade = (event) =>{
        this.setState({grade: event.target.value})
        console.log(event.target.value)
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Name of route</p>
                        <input type="text" value={this.state.routeName} onChange={this.handleChangeName}></input>
                    </label>
                    <label>
                        <p>Grade</p>
                        <select value={this.state.routeGrade} onChange={this.handleChangeGrade}>
                            <option value={"5+"}>5+</option>
                            <option value={"6A"}>6A</option>
                            <option value={"6A+"}>6A+</option>
                            <option value={"6B"}>6B</option>
                            <option value={"6B+"}>6B+</option>
                            <option value={"6C"}>6C+</option>
                            <option value={"7A"}>7A</option>
                            <option value={"7A+"}>7A+</option>
                            <option value={"7B"}>7B</option>
                            <option value={"7B+"}>7B+</option>
                            <option value={"7C"}>7C</option>
                            <option value={"7C+"}>7C+</option>
                            <option value={"8A"}>8A</option>
                            <option value={"8A+"}>8A+</option>
                            <option value={"8B"}>8B</option>
                            <option value={"8B+"}>8B+</option>
                        </select>
                    </label>
                    <SubmitData routeName={this.state.routeName} grade={this.state.routeGrade}></SubmitData>
                </form>
            </div>
        )
    }
}

export default EnterClimb


const SubmitData = (props) => {
    const routeName = props.routeName;
    const user = useUser();
    const grade = props.grade;
    const database = useDatabase();
    const path = 'User/' + user.data.uid + '/Problem'
    console.log(path)
    const ref = database.ref(path)

    const addData = () => {
        ref.set({Name: routeName,
                    Grade: grade})
    }

    return(
        <button label="Gem" onClick={() => {addData();}}>Gem</button>
    )

}