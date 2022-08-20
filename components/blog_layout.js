import Link from "next/link";

export default function BlogLayout({
  slug,
  title,
  description,
  date,
  thumbnail,
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>{thumbnail}</figure>
      <div className="card-body">
        <Link href={"/[slug]"} as={`${slug}`}>
          <a className="card-title mx-auto">{title}</a>
        </Link>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
