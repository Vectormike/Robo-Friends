import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots'


class App extends Component {
    constructor() {
        super()

        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value}) 
    }
 
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.username.toLowerCase().includes(this.state.searchField) 
        })
        
        return (
            
            <div className="tc">
                <h1 className="f1 pa">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {console.log(filteredRobots)}
                <CardList robots ={filteredRobots}/>
            </div>
        );
    }
    
}

export default App;