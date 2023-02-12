import { useState, useEffect } from 'react';
import getPosts from '@/features/getPosts';

import Article from '@/components/Article';

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
            <Article
              id={post.id}
              slug={post.slug}
              title={post.title}
              contents={post.contents}
              key={post.id}
            />
          ))
        }
    </>
  );
};

export default Works;
