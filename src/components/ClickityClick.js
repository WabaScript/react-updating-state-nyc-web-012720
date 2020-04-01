import React from 'react';

export default class ClickityClick extends React.Component {
    constructor() {
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        // this.setState({
        //     hasBeenClicked: true
        // }, () => console.log(this.state.hasBeenClicked)) // cb to fire only after state has been updated , prints true
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    
    }

    render() {
        return(
            <div >
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Something crazy is about to happen here!</button>
            </div>
        )
    }
}