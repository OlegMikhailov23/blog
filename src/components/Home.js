import React, {Component, useEffect} from 'react';
import BlogList from "./BlogList";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
                {title: 'Welcome party!', body: 'lorem ipsum...', author: 'oleg', id: 2},
                {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'oleg', id: 3}
            ],
            name: 'Oleg'
        }
    }


    handleDelete(id) {
        const newBlogs = this.state.blogs.filter(blog => blog.id !== id);
        this.setState(currentState => {
            return { blogs: newBlogs };
        });
    }

    componentDidMount() {
        console.log('ПРивет', this.state.blogs)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) console.log('ПРивет', this.state.blogs)
    }

    render() {
        return (
            <div className="home">
                <p>{this.state.name}</p>
                <BlogList blogs={this.state.blogs} title={"All Blogs"} handleDelete={this.handleDelete.bind(this)}/>
                <button onClick={() => this.setState({
                    name: 'Luigi',
                })}>Change Name</button>
            </div>
        );
    }
}

export default Home;
