"use client";
import useNavigationBar from "@/hooks/useNavigationBar";
import Link from "next/link";
import AuthNavigationLinksBox from "./AuthNavigationLinksBox";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { moveHomepage } = useNavigationBar();

  return (
    <>
      <div className="flex justify-between items-center fixed w-full h-[52px] shadow-sm bg-white z-50">
        <div className="text-2xl lg:text-3xl cursor-pointer py-0 px-5 font-medium">
          <button onClick={moveHomepage}>iFOOD</button>
        </div>
        <div className="hidden items-center px-5 py-0 gap-3 md:flex ">
          <Link className="navigation__btn" href="/stores">
            맛집 목록
          </Link>
          <Link className="navigation__btn" href="/stores/new">
            맛집 등록
          </Link>
          <Link className="navigation__btn" href="/user/likes">
            찜한 가게
          </Link>
          <AuthNavigationLinksBox linkStyle="navigation__btn" />
        </div>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
