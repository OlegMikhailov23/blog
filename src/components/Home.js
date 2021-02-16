import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
                {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
                {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
            ]
        }
    }

    handleClick(i) {
        this.setState({})
    }

    render() {
        return (
            <div className="home">
                {this.state.blogs.map(blog => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Write by {blog.author}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Home;
