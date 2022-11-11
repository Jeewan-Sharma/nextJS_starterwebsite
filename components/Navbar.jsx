import Link from "next/link";

// importing image
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/images/logo.png" width={128} height={77} />
      </div>
      <div className="links">
        <Link className="link" href="/">
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/news">news</Link>
      </div>
    </nav>
  );
};

export default Navbar;
