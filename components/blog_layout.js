import Image from "next/image";
import Link from "next/link";

export default function BlogLayout({ title, description, date, thumbnail }) {
  return (
    <div className="grid flex-gorw card mb-auto w-96 bg-base-100 shadow-xl">
      <figure>{thumbnail}</figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
