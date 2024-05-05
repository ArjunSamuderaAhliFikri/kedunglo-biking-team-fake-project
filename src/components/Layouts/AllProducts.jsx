import FindCurrentProducts from "../Fragments/FindCurrentProducts"

const AllProducts = ({children, query, cartProducts, setAddProductUser}) => {
    const handleAddCurrentProduct = ((product) => setAddProductUser(products => [...products, product]));
    return (
        <div className="flex flex-col justify-between items-start p-2 rounded-md">
            <FindCurrentProducts query={query} cartProducts={cartProducts} handleAddCurrentProduct={handleAddCurrentProduct}/>
            {children}
        </div>
    )
}
export default AllProducts