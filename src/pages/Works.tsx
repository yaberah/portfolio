import { useState, useEffect } from 'react';
import getPosts from '@/features/getPosts';

const { getCollection } = getPosts();
 
const Works: React.FC = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getCollection().then(posts => setPosts(posts))
  },[])
  
  return (
    <>
      <p>Works</p>
        {
          posts.map(post => (
            <div key={post.id}>{post.title}</div>
          ))
        }
    </>
  );
};

export default Works;
