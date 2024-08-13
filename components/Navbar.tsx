import Link from "next/link";

const Navbar = () => {
  return (
    <div className={"flex justify-center flex-nowrap"}>
      <ul className={"flex gap-4"}>
        <li>
          <Link href={"/"} className={"text-white"}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/product"} className={"text-white"}>
            Product
          </Link>
        </li>
        <li>
          <Link href={"/product/items"} className={"text-white"}>
            Product Items
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
