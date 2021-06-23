import react from 'react'
import { robots } from './robots';
import Scroll from './Scroll';
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

    componetDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({ robot: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        //console.log(filteredRobots);
    }
    
    render() {
        const filteredRobots = this.state.robot.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robot.length === 0) {
            return <h1 className="tc f1">Loading</h1>
        } else {
            return (
                <div className='tc pa2'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;