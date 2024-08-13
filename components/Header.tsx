import { BadgeAlert } from "lucide-react";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52 justify-between">
      <h3
        className={
          "flex text-white w-[120px] justify-between text-3xl items-center"
        }
      >
        <BadgeAlert />
        Acme
      </h3>
      <Navbar />
    </div>
  );
};

export default Header;
