import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/counterProvider';
export const App = () => {
  return (
    <div>
      <CounterProvider>
        <PostsProvider>
          <div>
            <Posts />
          </div>
        </PostsProvider>
      </CounterProvider>
    </div>
  );
}

