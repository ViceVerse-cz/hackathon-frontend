import { motion } from "framer-motion";
import { api } from "../../../services/api";
import { FormEvent, useState } from "react";

export interface ProductI {
    product: {
        _id: String,
        name: String,
        description: String,
    }
}


const SearchResult = ({ product }: ProductI) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-fit inline-flex m-3 hover:bg-dark-800 p-3 rounded-lg hover:cursor-pointer items-start justify-start"
        >
            <div>
                <img
                    src="https://via.placeholder.com/150"
                    className="h-25 w-25 rounded-lg"
                />
            </div>

            <div className="ml-4">
                <p className="text-white">{product.name}</p>
                <p className="text-gray-400">{product.description}</p>
            </div>
        </motion.div>
    )
}

export const Search = () => {
    const [products, setProducts] = useState<ProductI[]>([]);

    async function handleForm(e: FormEvent) {
        e.preventDefault();

        const res = await api.get(
            `/api/product/search/${(e.target as any)[0].value}`
        );

        setProducts(res.data.data.products);
    }

    return (
        <motion.div className="z-999 absolute flex flex-col justify-center top-0 left-0 w-[100vw] h-[100vh] lg:px-[30%] sm:px-[20%]">
            <form
                onSubmit={handleForm}
                className='inline-flex justify-center items-center  bg-black p-3 rounded-xl  h-1/8'
            >

                <input
                    type="text"
                    name="query"
                    placeholder="Název"
                    minLength={2}
                    maxLength={50}
                    className="w-full h-10 rounded-md bg-dark-600 text-white px-4 py-2 text-md w-80 border-none"
                />
                <button
                    className=" ml-4 bg-indigo-600 text-white rounded-md text-md px-4 py-2 h-10"
                >
                    Vyhledat
                </button>
            </form>

            {
                products.length > 0 ?
                    <motion.div
                        className='bg-black p-3 rounded-xl flex flex-col mt-5'
                    >
                        {
                            products.map((product, index) => {
                                return (
                                    <SearchResult
                                        product={product.product}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </motion.div>
                    : null
            }
        </motion.div>
    )
}
