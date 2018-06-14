/* External */
import React, { Component } from 'react';

/* Internal */
import PostMenu from './postmenu'
import './post.scss';

class Post extends Component {

    componentDidMount() {
        Prism.highlightAll()
    }

    render() {
        return (
            <article>
                <h3 dangerouslySetInnerHTML={{ __html: this.props.post.title }}></h3>
                <PostMenu postId={ this.props.post.id } />
                <section 
                    className="content"
                    dangerouslySetInnerHTML={{ __html: this.props.post.content }}>
                </section>
            </article>
        );
    }
};

export default Post;
