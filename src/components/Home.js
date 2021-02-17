import React, {Component} from 'react';
import BlogList from "./BlogList";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: null,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                this.setState({
                    blogs: data
                })
            })
    }
    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        return (
            <div className="home">
                {this.state.blogs && <BlogList blogs={this.state.blogs} title={"All Blogs"} />}
            </div>
        );
    }
}

export default Home;
