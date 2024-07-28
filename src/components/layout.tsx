import React from "react";
import Profile from "./profile";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto bg-white h-dvh">
      <div className="fixed left-0 right-0 top-0 w-full h-14 p-4 flex justify-center items-center border-b bg-white">
        <h1 className="text-lg font-bold">다용도실</h1>
      </div>
      <div className="p-6 mt-14">
        <Profile name="홍길동" introduction="안녕하세요 반갑습니다" />
        <div className="border-t border-gray-200 my-8" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
