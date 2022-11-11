//http://localhost:3000/
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
function homePage() {
  return (
    <>
      <Head>
        <title>NewsNP | Home</title>
        <meta name="keywords" content="news" />
      </Head>
      <div>
        <h1 className={styles.title}>The Home Page</h1>
        <p className={styles.text}>This is very good HomePage.</p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          aperiam facilis quasi quod maiores temporibus consectetur nam debitis
          itaque corporis, ab, ducimus molestiae accusamus enim et, cupiditate
          sed iusto eaque! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi modi a quaerat fugiat iste, labore ipsam? Mollitia et
          esse unde sint doloribus. Tempore perferendis aliquam fuga odit. Quis,
          maxime dolorum! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Modi quaerat facere porro praesentium dicta voluptatibus optio
          qui, consectetur molestiae maiores magni fuga nesciunt sed reiciendis
          pariatur doloremque cum quos repellat.
        </p>
        <Link href="/news" className={styles.btn}>
          View News
        </Link>
      </div>
    </>
  );
}

export default homePage;
