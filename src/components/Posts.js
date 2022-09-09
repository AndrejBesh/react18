export const Posts = ({ posts }) => {
    return (
        <ul>
            {posts && posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    )
}