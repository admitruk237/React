import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

function MayLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default MayLayout;
