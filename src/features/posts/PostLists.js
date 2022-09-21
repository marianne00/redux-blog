import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);

  // Show posts with date ASC
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  )))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
 
export default PostLists