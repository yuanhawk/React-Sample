import {useState} from "react";
import {connect} from "react-redux";
import {createPost} from "../actions/postActions";
import PropTypes from 'prop-types';

const PostForm = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: title,
            body: body
        };

        props.createPost(post);
    };

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Body: </label>
                    <br />
                    <textarea
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
        </div>
    );
};

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null,{createPost})(PostForm)
