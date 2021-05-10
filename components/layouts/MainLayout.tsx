import Sidebar from "../Elements/Home/Sidebar";

const MainLayout = ({ username, children }) => (
  <main>
    <Sidebar username={username} />
    {children}
  </main>
);

export default MainLayout;
