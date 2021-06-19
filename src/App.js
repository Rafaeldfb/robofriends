import react from 'react'
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import './App.css'


class App extends react.Component {
    constructor() {
        super()
        this.state = {
        robot: robots,
        searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        //console.log(filteredRobots);
    }
    
    render() {
        const filteredRobots = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc pa2'>
                <h1 className='f1 --measure-wide'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;