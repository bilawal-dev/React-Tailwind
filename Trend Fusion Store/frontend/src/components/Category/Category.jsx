import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react'
import { fetchDataFromAPI } from "../../utilities/api"
import Products from "../Home/Products";

const Category = () => {
  const {title} = useParams();

  const [categoryProducts , setCategoryProducts] = useState([]);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    fetchCategoryProducts();
  } , [])

  async function fetchCategoryProducts(){
    const {data} = await fetchDataFromAPI(`/api/products?populate=*&filters[categories][title]=${title}`)
    setCategoryProducts(data);
  }

  return (
    <section className="max-w-[88vw] my-20 mx-auto font-cabin">
      <Products products={categoryProducts} headingText={title}/>
    </section>
  )
}

export default Category