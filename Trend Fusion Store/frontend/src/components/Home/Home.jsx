import Categories from "./Categories"
import Hero from "./Hero"
import Products from "./Products"
import { useEffect, useContext } from "react"
import { fetchDataFromAPI } from "../../utilities/api"
import { Context }from "../../utilities/context"

const Home = () => {
  const {categories, setCategories, products, setProducts} = useContext(Context);

  useEffect(() => {
    fetchCategories()
    fetchProducts()
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  } , [])

  async function fetchCategories(){
    const {data} = await fetchDataFromAPI("/api/categories?populate=*")
    setCategories(data);
  }

  async function fetchProducts(){
    const {data} = await fetchDataFromAPI("/api/products?populate=*")
    setProducts(data)
  }

  return (
      <main className="w-screen">
        <Hero />
        <Categories categories={categories}/>
        <Products 
          products={products} 
          headingText={'Popular Products'}
        />
      </main>
  )
}

export default Home