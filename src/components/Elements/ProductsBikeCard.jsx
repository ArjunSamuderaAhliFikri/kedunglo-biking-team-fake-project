import CardProduct from "../Fragments/CardProduct"
const ProductsBikeCard = ({cartProducts, handleAddProduct}) => {
    return (
        <div className="grid grid-flow-col auto-cols-[20%] gap-3 overflow-x-auto w-full p-2 scale-95">
            {cartProducts.map(product => (
                <CardProduct onHandleClickProduct={handleAddProduct} key={product.id} source={product.source} title={(product.title).substring(0, 20)} description={(product.description).substring(0, 95)} price={(product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}/>
             ))}
        </div>
    )
}
export default ProductsBikeCard