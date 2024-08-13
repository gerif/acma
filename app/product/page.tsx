import clsx from "clsx";
import { greyQo } from "@/ui/fonts";

const Product = () => {
  const isTrue = true;
  return (
    <div>
      <h1 className={clsx({ foo: isTrue, bar: "coin", out: null })}>
        Product page
      </h1>
      <p className={clsx(greyQo.className, "text-3xl")}>Lorem ipsum</p>
    </div>
  );
};

export default Product;
