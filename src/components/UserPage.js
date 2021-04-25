import { FirebaseDatabaseMutation } from '@react-firebase/database';
import React from 'react'

import EnterClimb from './EnterClimb'

class UserPage extends React.Component{
    render(){
        return(
            <div>
                <p>Velkommen #USER!#</p>
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
                    <p>Du har sat problemet: </p>
                    <button onClick={this.handleClick}>        
                        Ændre problemet
                    </button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <EnterClimb></EnterClimb>>
                    <button onClick={this.handleClick}>        
                        Gem problemet
                    </button>
                    
                    <FirebaseDatabaseMutation type="push" path = {"/Problems"}>
                        {({runMutation}) => {
                            return(
                                <div>
                                    <button
                                        data-testid = "test-push"
                                        onClick={async () =>{
                                            const { key } = await runMutation({ TEST: "DATA"});
                                            this.setState({pushedKey: key})
                                        }}>
                                            BIGGER button
                                    </button>
                                </div>
                            )
                        }}

                    </FirebaseDatabaseMutation>
                </div>
            )
        }
    }
}