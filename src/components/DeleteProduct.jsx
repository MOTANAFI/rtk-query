import React from "react";
import { useDeleteProductMutation } from "../app/service/dummyData";

function DeleteProduct({ productId }) {
  const [deleteProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();

  if (isError) {
    return <h1>OOOhNoooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
        await deleteProduct(productId)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete product
      </button>
    </div>
  );
}

export default DeleteProduct;
