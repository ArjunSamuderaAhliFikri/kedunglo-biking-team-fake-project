const CardProduct = ({product, handleAddCurrentProduct}) => {
    return (
        <div className="group w-fit h-fit overflow-hidden">
            <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
                    <img className="w-full h-full object-cover" src={product.source} alt="bike" />
                    <div className="w-full my-3 px-5 mx-auto"> 
                        <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">{(product.title).substring(0, 20)}...</h3>
                        <p className="text-left font-inter text-md text-slate-700">{product.description}...</p>
                    </div>
                    <div className="flex justify-between items-center w-[100%]">
                        <h3 className="font-inter text-slate-900 capitalize text-md ml-1 font-semibold">rp {(product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</h3>
                        <button onClick={() => handleAddCurrentProduct(product)} className="w-[50%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700" type="button">add to cart</button>
                    </div>
            </div>
        </div>
    )
}
export default CardProduct;