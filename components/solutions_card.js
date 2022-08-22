import Image from "next/image";
import SpaceTycoonPoster from "/Users/main/Documents/GitHub/Metatensor-App/public/images/SpaceTycoon_Posterblur.png";

export default function Solutions() {
  return (
    <div className="card m-5 w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <Image src={SpaceTycoonPoster} alt="Game_Poster" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl">SpaceTycoons</h2>
        <p className="m-5 text-4xl text-center">Coming Soon</p>
      </div>
    </div>
  );
}
