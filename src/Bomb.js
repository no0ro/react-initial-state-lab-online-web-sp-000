import React from 'react';

// Let's create a component that represents a bomb timer that counts down until it reaches 0
// Since bomb timers can differ, we'll pass in a prop to our Bomb component to determine what the starting count should be.
class Bomb extends React.Component {
    //set an intial state based off that component's props SO pass props to constructor
    constructor(props) {
        super(props)
        // 1. Set Initial State
        this.state = {
            // set state via the passed in prop from index. 
            secondsLeft: props.initialCount
        }
    }

    render() {
        const bombMessage = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;

        return(
            <div>
                {bombMessage} 
            </div>
        )
    }
}

export default Bomb