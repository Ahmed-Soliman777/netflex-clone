import Image from "next/image";
import React, { ReactNode } from "react";
import BackgroundImage from "@/public/images/hero.jpg";
import Logo from "@/public/images/logo.png";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background-img"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="logo"
        height={120}
        width={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        priority
      />
      {children}
    </div>
  );
};

export default AuthLayout;
