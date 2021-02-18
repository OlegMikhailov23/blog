import React, {Component} from 'react';
import BlogList from "./BlogList";
import getData from "../helper/getData";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost:8000/blogs',
            data: null,
            isPending: true,
            error: null,
        }
    }

    componentDidMount() {
       getData(this, this.state.url);
    }

    render() {
        return (
            <div className="home">
                {this.state.error && <div>{this.state.error}</div>}
                {this.state.isPending && <div>Loading...</div>}
                {this.state.data && <BlogList blogs={this.state.data} title={"All Blogs"}/>}
            </div>
        );
    }
}

export default Home;
