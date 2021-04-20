import React from 'react'


class EnterClimb extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label>
                        <p>Name of route</p>
                        <input type="text"></input>
                    </label>
                    <label>
                        <p>Grade</p>
                        <select>
                            <option value="5+">5+</option>
                            <option value="6A">6A</option>
                            <option value="6A+">6A+</option>
                            <option value="6B">6B</option>
                            <option value="6B+">6B+</option>
                            <option value="6C">6C+</option>
                            <option value="7A">7A</option>
                            <option value="7A+">7A+</option>
                            <option value="7B">7B</option>
                            <option value="7B+">7B+</option>
                            <option value="7C">7C</option>
                            <option value="7C+">7C+</option>
                            <option value="8A">8A</option>
                            <option value="8A+">8A+</option>
                            <option value="8B">8B</option>
                            <option value="8B+">8B+</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}

export default EnterClimb