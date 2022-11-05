import { useEffect, useState } from "react";
import { ProductI } from "../../Search";

interface IProps {
    products: [{
        product: ProductI,
        warehouse: any[],
        shop: any[]
    }]
}

const Product = ({ products }: IProps) => {
    return (
        <div className="block">
            {products.map((product, index) => (
                <div className="w-full p-5 inline-flex">
                                    {JSON.stringify(product)}
                    <div>
                        <img src="https://via.placeholder.com/150" className="h-[70px] w-[100px] rounded-lg"/>
                    </div>

                    <div className="ml-5">
                        <h1>{product.product.name}</h1>
                        <p className="text-gray-400">{product.product.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product