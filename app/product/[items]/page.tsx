const ProductItem = ({ params }: string) => {
  return (
    <div>
      <h1>Product Item {params.items}</h1>
    </div>
  );
};

export default ProductItem;
