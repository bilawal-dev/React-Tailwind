const Review = ({ checkoutToken }) => {
  return (
    <>
        <h1 className="font-medium text-xl font-montserrat mb-4">Order summary</h1>
        {checkoutToken.line_items.map((item) => {
            return (
                <div className="font-montserrat mb-3.5" key={item.id}>
                    <div className="flex justify-between ">
                        <h1 className="font-semibold text-md max-[450px]:text-sm">{item.product_name}</h1>
                        <h2 className="font-semibold text-md max-[450px]:text-sm">{item.price.formatted_with_symbol}</h2>
                    </div>
                    <p className="flex justify-start text-gray-600 text-sm">Quantity: {item.quantity}</p>
                </div>
            )
        })}
        <div className="flex flex-col items-start font-montserrat">
            <h1 className="font-medium text-xl max-[450px]:text-lg">Total</h1>
            <h2 className="text-2xl font-bold font-palanquin max-[450px]:text-xl">{checkoutToken.total.formatted_with_symbol}</h2>
        </div>
    </>
  )
}

export default Review