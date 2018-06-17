/* global wp */

/* External */
import React, { Component } from 'react';
import { format, parse } from 'date-fns';

class CommentList extends Component {

    constructor( props ) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    componentDidMount() {
        // TODO cache result, so doesnt refetch on open/close
        wp.apiRequest( {
            path: '/wp/v2/comments',
            method: 'GET',
            data: { post: this.props.post.id, order: 'asc' },
        } ).then( ( payload ) => {
            this.setState( { comments: payload } );
        } );
    }

    render() {
        const comments = this.state.comments.map( comment => {
            const dt = format( parse( comment.date_gmt ), 'MMM D, YYYY @ h:MMa' );
            return (
                <section
                    className="comment"
                    key={ comment.id }>
                    <div className="comment-meta">
                        Posted on: <time>{ dt }</time>
                    </div>
                    <div className="content"
                        dangerouslySetInnerHTML={{ __html: comment.content.rendered }}>
                    </div>
                </section>
            );
        } );

        if ( this.state.comments === undefined || this.state.comments.length === 0) {
            return ( <div></div> );
        }

        return (
            <section className="comment-list">
                <h3> Comments </h3>
                { this.state.comments && comments }
            </section>
        );
    }
}

export default CommentList;

