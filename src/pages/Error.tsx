import { useRouteError } from "react-router-dom";

const App: React.FC = () => {
  const error = useRouteError();
  console.error(error);
  
  return (
    <>
      <p>Error</p>
    </>
  );
};

export default App;
