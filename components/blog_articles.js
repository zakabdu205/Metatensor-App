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
      <div className="grid flex-grow h-auto card bg-base-300 rounded-box place-items-center">
        <figure>{thumbnail}</figure>
        <div className="card-body">
          <Link href={"/[slug]"} as={`${slug}`}>
            <a className="card-title mx-auto">{title}</a>
          </Link>
          <p>{description}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="divider sm:divider-vertical lg:divider-horizontal"></div>
    </div>
  );
}
