import React from 'react'


import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = ({productId}) => {
    const [updateProduct, {data, isError, isLoading}] = useUpdateProductMutation()

    
    if (isError) {
        return <h1>OOOhNoooo we got an error</h1>;
      }
    
      if (isLoading) {
        return <h1>Loading...</h1>;
      }

      const handleUpdateProduct = async () => {
        try{
            const updatedProductData = {
                title: "Something epic"
            }
            await updateProduct({
                id: productId,
                updatedProduct: updatedProductData
            })

        }catch(error) {
            console.log(error)
        }
      }
    
  return (
    <div>
        <h1>{data?.title}</h1>
        <button onClick={handleUpdateProduct}>Update product</button>
    </div>
  )
}

export default UpdateProduct