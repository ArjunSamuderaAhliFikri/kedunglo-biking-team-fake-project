import { useEffect, useRef, useState } from "react";
import NavbarKedungloBikingShop from "../components/Fragments/NavbarKedungloBikingShop";
import CarousellContainer from "../components/Fragments/CarousellContainer";
import SearchSection from "../components/Layouts/SearchSection";
import ProductsBikeCard from "../components/Elements/ProductsBikeCard";
import AllProducts from "../components/Layouts/AllProducts";
import { cartProducts, handleSearchProducts } from "../js/cartProducts";
const KedungloBikingShop = () => {
    const [addProductUser, setAddProductUser] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [query, setQuery] = useState('');
    const searchProducts = handleSearchProducts(cartProducts, query);
    const manyProduct = useRef(null);
    const keranjang = useRef(null);

    const handleChangeSearchInput = (e) => {
        setQuery(e);
        console.log(searchProducts);
    }

    const handleCloseKeranjang = () => {
        keranjang.current.classList.add('hidden');
    }

    const handleOpenShopping = () => {
        keranjang.current.classList.replace('hidden', 'block');
    }

    const handleAddProduct = (item, id) => {
        if(addProductUser.length >= 0) {
            if(addProductUser.find((product) => product.id === id)) {
               const nextAddProductUser = addProductUser.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item);
               setAddProductUser(nextAddProductUser);
            } else {
                setAddProductUser([...addProductUser, item]);
            }
        }
        
    }

    const handleDeleteClick = (id) => {
        if(addProductUser.find((product) => product.id === id)) {
            const findItem = addProductUser.find(product => product.id === id);
            setTotalPrice(totalPrice - findItem.price);
            setAddProductUser(addProductUser.filter(product => product.id != id));
            setCurrentProduct(addProductUser[1]);
        } else {
            setAddProductUser([...addProductUser.slice(1, addProductUser.length)]);
            setCurrentProduct(addProductUser[0]);
            const findFirstItem = addProductUser[0].price;
            setTotalPrice(totalPrice - findFirstItem);
        }
        if(addProductUser.length == 1) {
            setCurrentProduct(null);
        }
    }

    useEffect(() => {
        if(addProductUser.length > 0) {
            const sum = addProductUser.reduce((acc, items) => {
                const findCurrentItem = cartProducts.find((product) => product.id === items.id);
                return acc + (items.price * findCurrentItem.quantity);
            }, 0);
            setTotalPrice(sum);
        }
    }, [addProductUser]);

    useEffect(() => {
        if(addProductUser.length == 0) {
            manyProduct.current.classList.add('hidden');
        } else {
            manyProduct.current.classList.replace('hidden', 'block');
        }
    }, [addProductUser]);
    return (
        <main className="relative overflow-x-hidden">
        <NavbarKedungloBikingShop />
        <CarousellContainer />
            <section className="flex flex-col gap-5 w-full px-5 bg-slate-300 justify-center items-center">
                <SearchSection handleChangeSearchInput={handleChangeSearchInput} isPlaceholder="apa yang anda cari?">
                    <div className="flex justify-center items-center relative">
                        <div ref={manyProduct} className="absolute -top-2 -right-3 w-5 h-5 scale-105 text-center rounded-full font-inter font-semibold bg-white z-8">{addProductUser.length}</div>
                        <i onClick={() => handleOpenShopping()} className="fa-solid fa-cart-shopping text-xl text-slate-700 hover:text-slate-900 cursor-pointer"></i>
                    </div>
                </SearchSection>
                <AllProducts>
                    <h1 className="font-inter p-2 ml-3 font-bold text-slate-900 capitalize text-2xl">sepeda balap shop</h1>
                    <ProductsBikeCard handleAddProduct={handleAddProduct} cartProducts={cartProducts}/>
                </AllProducts>
            </section>

            <div ref={keranjang} className="transition-all duration-500 w-full h-full bg-slate-900/60 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden hidden">
                <div className="w-[75%] max-w-[900px] bg-white border-2 border-slate-500/25 rounded-md shadow p-1 mx-auto my-10 scale-95 z-50">
                    <div className="w-full h-[5px] relative">
                        <div onClick={handleCloseKeranjang} className="grid place-items-center w-[30px] h-[30px] bg-red-500 text-white font-semibold font-inter cursor-pointer absolute -top-4 -right-3 hover:bg-red-700 rounded-full">X</div>
                    </div>
                    <h3 className="font-inter font-bold capitalize text-slate-900 text-2xl p-5">keranjang anda</h3>
                    <div className="flex flex-col">
                       {currentProduct != null ? (
                         <div className="flex justify-center items-center">
                         {/* image some product */}
                         <div className="w-[350px] h-[250px] ml-8 rounded-md overflow-hidden">
                             <img className="w-full h-full object-cover" src={currentProduct.source} alt="product user" />
                         </div>

                         {/* detail some product */}
                         <div className="flex flex-col justify-center items-start gap-1 ml-5">
                             {/* price product */}
                             <h1 className="text-slate-800 font-bold text-2xl font-inter my-1 ml-2">Rp {(currentProduct.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</h1>

                             {/* description product */}
                             <div className="w-[70%] flex flex-col justify-center items-start ml-7">
                                 <h4 className="text-slate-800 font-semibold text-xl font-inter">{currentProduct.title}</h4>
                                 <p className="font-normal text-slate-700">{currentProduct.description}</p>
                             </div>

                             {/* color palette product */}

                             <div className="w-[90%] flex flex-col justify-between items-start gap-5 mt-2 ml-7">

                                 <div className="w-fit flex justify-center items-center gap-4 bg-slate-300 px-4 py-1 rounded-full">
                                     <div className="w-[20px] h-[20px] bg-red-500 rounded-full border transition-all duration-300 cursor-pointer hover:bg-red-700"></div>
                                     <div className="w-[20px] h-[20px] bg-green-500 rounded-full border transition-all duration-300 cursor-pointer hover:bg-green-700"></div>
                                     <div className="w-[20px] h-[20px] bg-blue-500 rounded-full border transition-all duration-300 cursor-pointer hover:bg-blue-700"></div>
                                     <div className="w-[20px] h-[20px] bg-emerald-500 rounded-full border transition-all duration-300 cursor-pointer hover:bg-emerald-700"></div>
                                 </div>

                                 <div className="flex w-full">
                                     {/* count wrapper */}
                                     <div className="flex justify-center items-center">
                                         {/* increment product */}
                                         <button onClick={() => setCurrentProduct({...currentProduct, quantity: currentProduct.quantity + 1})} className="bg-slate-300 w-[32px] h-[32px] border-2 border-slate-400 text-center font-inter font-semibold text-slate-700 hover:bg-slate-400 hover:text-slate-100" type="button">+</button>

                                         <div className="w-[32px] h-[32px] flex justify-center items-center font-semibold font-inter">{currentProduct.quantity}</div>

                                         {/* decrement product */}
                                         <button onClick={() => currentProduct.quantity > 1 ? setCurrentProduct({...currentProduct, quantity: currentProduct.quantity - 1}) : currentProduct.quantity} className="bg-slate-300 w-[32px] h-[32px] border-2 border-slate-400 text-center font-inter font-semibold text-slate-700 hover:bg-slate-400 hover:text-slate-100" type="button">-</button>
                                     </div>

                                     {/* button buy and delete product wrapper */}
                                     <div className="w-full flex justify-between items-center gap-3 ml-2">
                                         <button className="w-1/2 bg-sky-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-sky-700" type="button">buy</button>
                                         <button onClick={() => handleDeleteClick(currentProduct.id)} className="w-1/2 bg-red-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-red-700" type="button">delete product</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                       ) : <h1 className="font-inter font-semibold text-slate-700 capitalize text-xl text-center my-7">tidak ada produk!</h1>}

                        <div className="mt-5">
                            <div className="flex justify-between items-center">
                                <h3 className="font-inter font-semibold text-2xl capitalize text-slate-800 ml-4">your products :</h3>
                                <h4 className="font-inter font-normal text-lg capitalize text-slate-800 mr-4">total price : <strong className="font-inter">Rp. {(totalPrice).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</strong></h4>
                            </div>

                            {/* card product user */}
                            <div className="grid grid-flow-col auto-cols-max gap-3 px-4 py-2 mt-1 overflow-y-hidden overflow-x-auto">
                                {addProductUser.length > 0 ? addProductUser.map(productUser => (
                                    <div key={productUser.id} onClick={() => setCurrentProduct(productUser)} className="w-[120px] h-[180px] bg-red-500 rounded-md overflow-hidden transition-all duration-300 cursor-pointer hover:opacity-75 hover:scale-95">
                                        <img className="w-full h-full object-cover" src={productUser.source} alt="product user" />
                                    </div>
                                )) : <h3 className="translate-x-[85%] text-center capitalize font-inter text-slate-700 my-5">anda belum menambahkan produk apapun!</h3>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default KedungloBikingShop;