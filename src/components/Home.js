import React, {Component} from 'react';
import BlogList from "./BlogList";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
                {title: 'Welcome party!', body: 'lorem ipsum...', author: 'oleg', id: 2},
                {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'oleg', id: 3}
            ]
        }
    }

    render() {
        return (
            <div className="home">
                <BlogList blogs={this.state.blogs} title={"All Blogs"}/>
                <BlogList blogs={this.state.blogs.filter(blog =>
                    blog.author === 'oleg'
                )} title={"Oleg's blog's"}/>
            </div>
        );
    }
}

export default Home;
