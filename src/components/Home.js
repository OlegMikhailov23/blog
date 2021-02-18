import React, {Component} from 'react';
import BlogList from "./BlogList";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: null,
            isPending: true,
            error: null,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data')
                }
                return res.json()
            })
            .then(data => {
                this.setState({
                    blogs: data,
                    isPending: false,
                    error: null,
                })
            })
            .catch((err) => {
                this.setState(({
                    isPending: false,
                    error: err.message,
                }))
            })
    }

    // componentDidUpdate(prevProps, prevState) {
    //
    // }

    render() {
        return (
            <div className="home">
                {this.state.error && <div>{this.state.error}</div>}
                {this.state.isPending && <div>Loading...</div>}
                {this.state.blogs && <BlogList blogs={this.state.blogs} title={"All Blogs"}/>}
            </div>
        );
    }
}

export default Home;
