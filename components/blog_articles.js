import Link from "next/link";

export default function Blog_Articles({
  slug,
  title,
  description,
  date,
  thumbnail,
}) {
  return (
    <div>
      <div className="card w-96 rounded-box mx-5 ">
        <figure>{thumbnail}</figure>
        <div className="card-body">
          <Link href={"/[slug]"} as={`${slug}`}>
            <a className="card-title mx-auto">{title}</a>
          </Link>
          <p>{description}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
