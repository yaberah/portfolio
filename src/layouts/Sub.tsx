import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Menu from '@/components/Menu';

const App: React.FC = () => {

  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
};

export default App;
