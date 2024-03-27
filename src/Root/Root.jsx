import { Outlet } from "react-router-dom";
import { Header } from "../Pages/Header/Header";

export const Root = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-5">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};
