import Image from "next/image";
import MetatensorLogo from "/Users/main/Documents/GitHub/Metatensor-App/public/images/MetaTensorlogo.svg";

export default function Company_Intro() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          {/* <h1 className="mb-5 text-7xl font-bold font-serif">MetaTensor</h1> */}
          <Image src={MetatensorLogo} width={720} height={720} />
          {/* <p className="mb-5">Engineering AI, MetaVerse, Web3 Solutions</p> */}
        </div>
      </div>
    </div>
  );
}
