import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: props,
            title: props,
        }
    }

    render() {
        return (
            <div className="blog-list">
                <h2>{this.props.title}</h2>
                {this.props.blogs.map(blog => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Write by {blog.author}</p>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default BlogList;
