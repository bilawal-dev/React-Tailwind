import { useParams } from 'react-router-dom'
import { fetchDataFromAPI } from '../../utilities/api'
import { useEffect, useState, useContext } from 'react'
import { Context } from "../../utilities/context"
import Products from "../Home/Products"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa"

const SingleProduct = () => {

  const { handleAddToCart } = useContext(Context);

  const [singleProduct , setSingleProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity , setQuantity] = useState(1);

  const {id} = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    fetchSingleProduct();
  }, [id])
  
  useEffect(() => {
    fetchRelatedProducts();
  }, [singleProduct])

  async function fetchSingleProduct(){
    const {data} = await fetchDataFromAPI(`/api/products?populate=*&filters[id]=${id}`)
    setSingleProduct(data); //It Is An Array Of Length 1 (Having Single Product)
  }

  async function fetchRelatedProducts(){
    const productCategory = singleProduct[0]?.categories[0].title;

    //First Filters Make Sure That The Current Product Is Not Display While Second Filter Displays All Product Of Similar Category While Pagination Make Sures That Only 4 Products Are Shown:
    const {data} = await fetchDataFromAPI(`/api/products?populate=*&filters[id][$ne]=${id}&filters[categories][title]=${productCategory}&pagination[start]=0&pagination[limit]=4`)
    setRelatedProducts(data)
  }

  function handleQtyChange(qty){
    const newQty = quantity + qty;
    if(newQty < 1){
      return
    } 
    setQuantity((prevQty) => prevQty + qty);
  }

  return (
    <section className="max-w-[80vw] my-16 mx-auto font-cabin">

      {singleProduct?.map((item) => {
        return (
          <div key={item.id} className="mb-20 flex justify-center max-900:flex-col max-900:items-center gap-10">

          <div className="w-1/2 max-900:w-full">
            <div className="py-5 w-full flex justify-center items-center bg-gray-100">
              <img src={import.meta.env.VITE_DEV_URL + item.img[0].url} 
                className="scale-[1.1] sm:scale-[1.2] w-[350px] 2xl:w-[480px]"
              />
            </div>
         </div>
  
          <div className="w-1/2 max-900:w-full font-cabin">
            <h1 className="line=clamp-2 max-w-[90%] text-2xl 2xl:text-4xl font-semibold">{item.title}</h1>
            <h2 className="my-3 2xl:my-8 font-bold text-xl 2xl:text-3xl">{'PKR ' + item.price}</h2>
            <p className="line-clamp-5 text-slate-gray text-md 2xl:text-xl leading-relaxed 2xl:leading-[1.7]">{item.desc}</p>
            
            <div className="mt-5 2xl:mt-10 flex gap-2">
              <span className="border-2">
                <button onClick={() => {handleQtyChange(-1)}} className="h-full text-xl text-slate-gray outline-none border-r-2 px-3">-</button>
                <span className="px-5">{quantity}</span>
                <button onClick={() => {handleQtyChange(+1)}} className="h-full text-xl text-slate-gray outline-none border-l-2 px-3">+</button>
              </span>
  
              <button onClick={() => {handleAddToCart(item , quantity) ; setQuantity(1) ; window.scrollTo(0 , 0)}} type="button" className="text-white bg-purple-700 font-montserrat tracking-wider px-3 py-2 2xl:py-3 text-center inline-flex items-center gap-2 text-xs uppercase">
                  <FaCartPlus className="text-lg"/>
                  Add To Cart
              </button>
            </div>
  
            <hr className="mt-5 mb-3"/>
  
            <div className="flex gap-3 2xl:text-lg">
              <h3 className="font-bold">Category: </h3>
              <span className="text-slate-gray">{item.categories[0].title}</span>
            </div>
  
            <div className="mt-1 flex items-center gap-3 2xl:text-lg">
              <h3 className="font-bold">Share:</h3> 
              <span className="flex gap-2 text-sm">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaPinterest />
              </span>
            </div>
          </div>
  
        </div>
        )
      })}

      <Products products={relatedProducts} headingText={'Related Products'}/>
    </section>
  )
}

export default SingleProduct