import Image from "next/image";

export default function Company_Intro() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-7xl font-bold">MetaTensor</h1>
          <h2 className="mb-5 text-l font-bold">
            Building Technologies to Inspire Others
          </h2>
          {/* <p className="mb-5">Engineering AI, MetaVerse, Web3 Solutions</p> */}
        </div>
      </div>
    </div>
  );
}
