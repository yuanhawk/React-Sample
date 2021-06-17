import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions/postActions";
import PropTypes from "prop-types";

const Posts = (props) => {
    const { fetchPosts } = props;

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const postItems = props.posts.map((post) => (
        <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ));

    return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
    );
};

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
