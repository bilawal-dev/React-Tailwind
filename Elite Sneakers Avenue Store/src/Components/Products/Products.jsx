import { ProductCard } from "./ProductCard"

const Products = ({products , addToCart}) => {
    return (
        <div className="flex flex-wrap justify-center gap-5 max-lg:gap-20 2xl:gap-40">
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} addToCart={addToCart} />})}
        </div>
    )
}

export default Products