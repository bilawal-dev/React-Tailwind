import { ProductCard } from "./ProductCard"

const Products = ({products , addToCart}) => {
    return (
        <div className="px-8 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center gap-5">
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} addToCart={addToCart} />})}
        </div>
    )
}

export default Products