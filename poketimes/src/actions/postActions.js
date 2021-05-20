export let deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}