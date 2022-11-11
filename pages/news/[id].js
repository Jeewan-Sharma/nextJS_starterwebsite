// # Dynamic Page
// # http://localhost:3000/news/<pk>

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datas = await res.json();

  const paths = datas.map((news) => {
    return {
      params: { id: news.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// context has the id value from above function

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return {
    props: { news: data },
  };
};

// hooking the path from url
import { useRouter } from "next/router";

const details = ({ news }) => {
  // too see id from path
  const router = useRouter();
  const newsID = router.query.id;
  //
  return (
    <div>
      <h1>
        {news.id}. {news.title}
      </h1>
      <p>{news.body}</p>
      <p>Reported By: {news.userId}</p>

      <p>
        <b>This is the post id from hooking url(useRouter): {newsID}</b>
      </p>
    </div>
  );
};

export default details;
