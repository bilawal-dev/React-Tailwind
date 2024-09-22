import ProductCard from "./ProductCard"

const Products = ({ products, headingText }) => {
  return (
    <section className="max-w-[95vw] mx-auto mb-20">
      <h1 className="text-2xl font-cabin font-semibold uppercase">{headingText}</h1>
      <hr className="w-14 border-t-[3px] border-purple-700"/>
      <div className="w-full mt-9 flex flex-wrap gap-3">
        {products?.map((product) => {
          return (
            <ProductCard 
              key={product.title} 
              image={import.meta.env.VITE_DEV_URL + product.img[0].url}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Products

/*? Is Called Optional Chaining, For Example The Component Gets Rendered
& Still The Data Is Not Fetched From The Server So, The Value Will Be Undefined
& Looping Over It Will Give Us Error So We Can Use Optional Chaining(?) & Then If 
It Founds Any Value As Undefined The Further Code Will Not Be Executed & Then No Errors*/