import Image from "next/image";
import logo from "../public/nike.svg";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex z-50">
      <Image src={logo} alt="" width={83} height={29} />
      <ul className="flex gap-10 w-screen justify-center text-white/40 ">
        <Link href="/">
          <li className="hover:text-white transition-colors cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="hover:text-white transition-colors cursor-pointer">
            About
          </li>
        </Link>
        <Link href="/shop">
          <li className="hover:text-white transition-colors cursor-pointer">
            Shop
          </li>
        </Link>
      </ul>
    </div>
  );
}
