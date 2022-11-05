import { motion } from "framer-motion";
import { api } from "../../../services/api";
import { FormEvent, useState } from "react";
import QrCode from 'react-qr-code';

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
            className="w-fit flex flex-row  m-3 hover:bg-dark-800 p-3 rounded-lg hover:cursor-pointer items-start justify-start"
        >

            <div className="w-full  ml-4">
                <h2 className="font-bold text-md text-white text-left">{product.name}</h2>
                <h3 className="text-gray-400 text-sm text-left">{product.description}</h3>
            </div>

            <div className="w-full">
                <div className="w-[100px] h-[100px] opacity-6 flex justify-center items-center rounded hover:opacity-100 text-right float-right  border-white border-5">
                    <QrCode
                        value={product._id.toString()}
                        size={90}
                        style={{ height: "95px", maxWidth: "95px", width: "95px" }}
                    />
                </div>
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
                        className='bg-black p-3 rounded-xl flex flex-col mt-5 h-150 overflow-scroll'
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
