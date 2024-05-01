import SideBar from './SideBar';

import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  );
};
export default Admin;
