import { ProductI } from "../../Search"
import QrCode from 'react-qr-code';

interface IProps {
    products: [{
        product: {
            _id: String,
            name: String,
            description: String,

        },
        quantity: Number,
        _id: String
    }]
}

const Product = ({ products }: IProps) => {
    return (
        <div className="block">
            {products.map((product, index) => (
                <div className="w-full p-5 inline-flex">
                    <div>
                        <img src="https://via.placeholder.com/150" className="h-20 w-24 rounded-lg" />
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