import { motion } from "framer-motion";
import { api } from "../services/api";
import { FormEvent, useState } from "react";

export interface ProductI {
    _id: String,
    name: String,
    description: String,
}

interface IProps {
    product: ProductI
}

const SearchResult = ({ product }: IProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-fit inline-flex m-3 hover:bg-gray-800 p-3 rounded-lg hover:cursor-pointer"
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
        <div>
            <div className='fixed top-0 bg-black opacity-90 w-full z-15 h-[100vh]'/>
                <form 
                    onSubmit={handleForm}
                    style={{ transform: 'translate(-50%, -50%)' }} 
                    className='inline-flex bg-slate-900 p-3 fixed top-[50%] left-[50%] z-20 mt-[-350px] mb-[-250px] rounded-lg'
                >
    
                    <input 
                        type="text" 
                        name="query"
                        placeholder="Search for something"
                        minLength={2}
                        maxLength={50}
                        className="w-full h-10 rounded-lg bg-slate-800 text-white pt-8 pb-8 text-lg3 w-[400px] border-none"
                    />
                    <button 
                        className="ml-4 bg-indigo-600 text-white rounded-lg text-lg pt-4 pb-4 pl-8 pr-8"
                    >
                        Search
                    </button>
                </form>

                {
                    products.length > 0 ?
                    <motion.div
                        style={{ transform: 'translate(-50%, -50%)' }}
                        className='bg-slate-900 p-3 w-[500px] fixed top-[50%] left-[50%] z-20 mt-[-100px] mb-[-250px] rounded-lg'
                    >
                        {
                            products.map((product, index) => {
                                return (
                                    <SearchResult 
                                        product={product} 
                                        key={index}
                                    />
                                )
                            })
                        }
                    </motion.div>
                    : null
                }
        </div>
      )
}
