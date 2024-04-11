import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
