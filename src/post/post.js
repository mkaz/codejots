/* global Prism */

/* External */
import React, { Component } from 'react';
import { format, parse } from 'date-fns';

/* Internal */
import PostMenu from './postmenu';
import './post.scss';

class Post extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <article>
                <h3 dangerouslySetInnerHTML={{ __html: this.props.post.title }}></h3>
                <PostMenu postId={ this.props.post.id } />
                <div className="meta">
                    Posted on: <time> { format( parse( this.props.post.date ), 'MMM D, YYYY' ) } </time>
                </div>
                <section
                    className="content"
                    dangerouslySetInnerHTML={{ __html: this.props.post.content }}>
                </section>
            </article>
        );
    }
};

export default Post;
