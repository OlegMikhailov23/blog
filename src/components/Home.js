import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Oleg',
            age: '33',
        }
    }

    handleClick(i) {
        this.setState({
            name: 'Igor',
            age: '32'
        })
    }

    render() {
        return (
            <div className="home">
                <h2>Home page</h2>
                <p>{ this.state.name } is { this.state.age }</p>
                <button onClick={(e) => {
                    this.handleClick(e);
                }}>Click Me</button>
            </div>
        );
    }
}

export default Home;
