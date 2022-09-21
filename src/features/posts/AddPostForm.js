import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { postAdded } from './postSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);
  
  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(e.target.value);

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)  
      )

      setTitle('')
      setContent('')  
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map(user => {
    return (
      <option 
        key={user.id}
        value={user.id}>
          {user.name}
      </option>
    )
  });

  return (
    <section>
      <p>Add a New Post</p>
      <form>
        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          value={userId}
          onChange={onAuthorChanged}>
            <option value=""></option>
            {userOptions}
        </select>

        <label htmlFor='postTitle'>Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        /> <br />

        <label htmlFor='postContent'>Content</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        /> <br />

        <button 
          type='button'
          onClick={onSavePost}
          disabled={!canSave}>
            Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm