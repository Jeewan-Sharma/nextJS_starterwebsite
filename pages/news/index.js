//http://localhost:3000/news/

import styles from "../../styles/News.module.css";

//returns value
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { news: data },
  };
};

// for linking pages
import Link from "next/link";

const news = ({ news }) => {
  return (
    <div>
      <h1>All NEWS</h1>
      {news.map((inews) => (
        <Link
          className={styles.title_list}
          href={"/news/" + inews.id}
          key={inews.id}
        >
          <h4>{inews.title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default news;
