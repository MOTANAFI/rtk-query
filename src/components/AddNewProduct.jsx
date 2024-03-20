import React from "react";
import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) {
    return <h1>OOOhNoooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing Iphone",
        description: "this is the best tech device",
      };

      await addNewProduct(newProductData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add new Product
      </button>
    </div>
  );
};

export default AddNewProduct;
