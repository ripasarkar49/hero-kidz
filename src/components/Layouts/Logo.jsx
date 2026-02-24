import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
     
      <Image 
        src="/assets/logo.png" 
        alt="hero kidz logo" 
        width={40} 
        height={40} 
        className="object-contain"
      />
      <h2 className="text-xl font-bold">Hero <span className="text-primary"> Kidz</span></h2>
    </Link>
  );
}