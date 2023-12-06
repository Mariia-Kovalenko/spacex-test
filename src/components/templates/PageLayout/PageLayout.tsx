import { Outlet } from "react-router-dom";
import Header from "../../organisms/Header/Header";

const PageLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };
  
  export default PageLayout;