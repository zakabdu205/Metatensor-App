import styles from "../styles/Home.module.css";
import Image from "next/image";

const card_layout = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">Text-test</h2>
        <p>description of the post should be here</p>
      </div>
    </div>
  );
};

export default function BlogLayout() {
  return (
    <div>
      <div className={styles.container}>
        <div className="navbar bg-base-100 font-bold">
          <h1 className="mb-5 text-xl">MetaTensor Blog</h1>
        </div>
      </div>
      <div className="container ml-auto px-10">
        <h1 className="font-bold mb-5 text-xl">News and Articles</h1>
      </div>
    </div>
  );
}
