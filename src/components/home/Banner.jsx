import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-4">
        <h1 className={`${fontBangla.className} text-6xl font-bold leading-16`}>
          আপনার শিশুকে দিন একটি <span className="text-primary">সুন্দর ভবিষ্যৎ</span>
        </h1>
        <p>Buy Every toy with with up to 50% discount</p>
        <button className="btn btn-primary btn-outline">Expore products</button>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/hero.png"}
          alt="Buy Every toy with with up to 50% discount"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
