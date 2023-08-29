import Image from "next/image";
import logo from "../public/nike.svg";
export default function Navbar() {
  return (
    <div className="flex z-50">
      <Image src={logo} alt="" width={83} height={29} />
      <ul className="flex gap-10 w-screen justify-center text-white/40 ">
        <li className="hover:text-white transition-colors cursor-pointer">
          Home
        </li>
        <li className="hover:text-white transition-colors cursor-pointer">
          About
        </li>
        <li className="hover:text-white transition-colors cursor-pointer">
          Shop
        </li>
      </ul>
    </div>
  );
}
