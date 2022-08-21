import Aboutus_Image from "/Users/main/Documents/GitHub/Metatensor-App/public/images/aboutus.jpg";
import Image from "next/image";

export default function Aboutus() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={Aboutus_Image} width={1080} height={1080} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-5xl">ABOUT METATENSOR</h2>
        <p className="text-2xl tracking-wide leading-loose">
          MetaTensor is a consumer-focused online solution. Building and
          Researching the latest technologies such as (Artificial Intelligence,
          Blockchain, and AR/VR). Our goal is to create applications that are
          enjoyed by everyone and improve the lives of people.
        </p>
        <div>
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
