import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmojis = {
  thumbsUp: '👍🏻',
  wow: '😲',
  heart: '💖',
  rocket: '🚀',
  fuck: '🖕🏻'
};

const ReactionButtons = ({ post }) => {

  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmojis).map(([emojiName, emoji]) => {
    return (
      <button
        key={emojiName}
        type="button"
        className="reactionButton"
        onClick={() => {
          dispatch(reactionAdded({
            postId: post.id,
            reaction: emojiName
          }))
      }}>
        {emoji} {post.reactions[emojiName]} 
      </button>
    )
  })

  return (
    <div>
      {reactionButtons}
    </div>
  )
}

export default ReactionButtons