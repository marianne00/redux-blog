import './App.css';
import PostLists from './features/posts/PostLists';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostLists />
    </div>
  );
}

export default App;
