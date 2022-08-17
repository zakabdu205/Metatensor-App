import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogLayout({ title, description, date, thumbnail }) {
  return (
    <div>
      <div className={styles.container}>
        <div className="navbar bg-base-100 font-bold">
          <h1 className="mb-5 text-2xl">MetaTensor Blog</h1>
        </div>
      </div>

      <div className="container ml-auto p-10 space-y-10">
        <h1 className="font-bold mb-5 text-2xl">News and Articles</h1>

        <div className="card mb-auto w-96 bg-base-100 shadow-xl">
          <figure>{thumbnail}</figure>
          <div className="card-body">
            <h2 className="card-title mx-auto">{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
