// Auto redirect
import { useEffect } from "react";
import { useRouter } from "next/router";

// 404 error page
import Link from "next/link";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
