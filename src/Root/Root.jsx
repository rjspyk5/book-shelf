import { Outlet } from "react-router-dom";
import { Header } from "../Pages/Header/Header";
import { Footer } from "../Pages/Footer/Footer";
export const Root = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-5">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
