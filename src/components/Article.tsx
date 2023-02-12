import { Link } from "react-router-dom";

const Article: React.FC<Post> = ({ id, slug, title, contents }: Post) => {

  return (
    <Link to={id}>
      <p>id: {id}</p>
      <p>slug: {slug}</p>
      <p>title: {title}</p>
      <p>contents: {contents}</p>
    </Link>
  );
};

export default Article;
