import CategoryCard from "./CategoryCard"

const Categories = ({ categories }) => {
  return (
    <section id="Categories" className="mt-12 mb-20 w-full flex justify-center flex-wrap gap-3">
        {categories.map((category) => {
          return (
            <CategoryCard 
              key={category.title} 
              image={import.meta.env.VITE_DEV_URL + category.img.url}
              title={category.title}
            />)
        })}
    </section>
  )
}

export default Categories