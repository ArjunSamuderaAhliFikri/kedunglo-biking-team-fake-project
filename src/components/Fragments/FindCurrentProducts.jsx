import {useState} from 'react';
import CardProduct from "./CardProduct";
import { handleSearchProducts } from "../../js/cartProducts";
const FindCurrentProducts = ({query, cartProducts, handleAddCurrentProduct}) => {
    const [status, setStatus] = useState('');
    const searchProducts = handleSearchProducts(cartProducts, query);
    // const handleAddCurrentProduct = () =>
    return (
        <div className='flex flex-col justify-center items-start w-[90%] mx-auto'>
            {query && (<h1 className='font-inter text-slate-800 font-semibold text-2xl capitalize p-2'>
                mungkin yang anda cari :
                </h1>)}
            <div className="grid grid-flow-col auto-cols-[270px] gap-3 overflow-x-auto w-full p-2 scale-95 place-items-start">
                {query === '' ? (<div></div>)
                : searchProducts.map((product) => (
                   <CardProduct handleAddCurrentProduct={handleAddCurrentProduct} product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}
export default FindCurrentProducts