import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

const Context = createContext();

function AppContext({ children }){
    const [categories , setCategories] = useState([]);
    const [products , setProducts] = useState([]);

    const [cartItems , setCartItems] = useState(() => {
        //Also, Loading The Stored Cart Items If It Exist The In LocalStorage :
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        return cartItems ? cartItems : [];
    });
    const [cartCount , setCartCount] = useState(() => {
        //Also, Loading The Stored Cart Count If It Exist The In LocalStorage :
        const cartCount = JSON.parse(localStorage.getItem('cartCount'))
        return cartCount ? cartCount : 0;
    });
    const [cartSubTotal , setCartSubTotal] = useState(() => {
        //Also, Loading The Stored Cart Subtotal If It Exist The In LocalStorage :
        const cartSubtotal = JSON.parse(localStorage.getItem('cartSubtotal'))
        return cartSubtotal ? cartSubtotal : 0;
    });

    function handleAddToCart(product , qty){
        const index = cartItems.findIndex((cartItem) => cartItem.id === product.id)
        //Means Product Is Not Found In The Cart : 
        if(index === -1){ 
            const newProduct = {...product , quantity : qty}
            const updatedCart = [...cartItems, newProduct]
            setCartItems([...cartItems, newProduct])
        }
        //Means Product Is Found In The Cart : 
        else{
            const updatedProduct = {...cartItems[index] , quantity : cartItems[index].quantity + qty};
            const updatedCart = cartItems.map((cartItem, i) => {
                if(index === i ){
                    return updatedProduct;
                }
                else{
                    return cartItem;
                }
            });
            setCartItems(updatedCart)
        }

        toast.success('Product Added To Cart', {
            position: 'top-center',
            icon: '🛒', // Custom icon
        });
    }


    function handleRemoveFromCart(product){
        setCartItems((cartItems) => {
            return cartItems.filter((cartItem) => {
                return cartItem.id !== product.id;
            })
        })

        toast.error('Product Removed From The Cart', {
            position: 'top-center'
        });
    }

    function handleCartProductQty(product , quantity){
        setCartItems((prevCartItems) => {
            return prevCartItems.map((cartItem) => {
                if(cartItem.id === product.id){
                    return {...cartItem , quantity : cartItem.quantity + quantity}
                }
                else{
                    return cartItem;
                }
            })
        })
    }

    useEffect(() => {
        setCartSubTotal(() => {
            let sum = 0;
            cartItems.forEach((cartItem) => {
                sum += cartItem.quantity * cartItem.price;
            })
            return sum;
        })

        setCartCount(() => {
            let count = 0;
            cartItems.forEach((cartItem) => {
                count += cartItem.quantity
            })
            return count;
        })

        //Storing The Cart Data In LocalStorage In Case User Refreshes :
        localStorage.setItem('cartItems' , JSON.stringify(cartItems))
        localStorage.setItem('cartCount' , JSON.stringify(cartCount))
        localStorage.setItem('cartSubtotal' , JSON.stringify(cartSubTotal))
    }, [cartItems])

    //Loading The Stored Cart Data If Stored In LocalStorage :
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        const cartCount = JSON.parse(localStorage.getItem('cartCount'))
        const cartSubTotal = JSON.parse(localStorage.getItem('cartSubTotal'))
    } , [])

    return (
        <Context.Provider 
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                cartItems,
                cartCount,
                cartSubTotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQty
            }}
        >
            {children}
        </Context.Provider>   
    )
}

export { Context }
export default AppContext;