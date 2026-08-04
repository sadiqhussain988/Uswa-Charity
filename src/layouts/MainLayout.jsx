import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AosInit from "../components/common/AosInit";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <AosInit />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
