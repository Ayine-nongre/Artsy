import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(persist((set) => ({
    cartItems: [],

    addToCart: (product) => set((state) => {
        const existingProduct = state.cartItems.find(item => product.name === item.name)

        if (existingProduct) {
            return {
                cartItems: state.cartItems.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item)
            }
        } else {
            return {
                cartItems: [ ...state.cartItems, { ...product , quantity: 1}]
            }
        }
    }),

    removeFromCart: (productName) => set((state) => ({
        cartItems: state.cartItems.filter((item) => item.name !== productName)
    })),

    updateCart: (product, quantity) => set((state) => ({
        cartItems: state.cartItems.map((item) => item.name === product.name ? { ...item, quantity } : item)
    })),

    totalPrice: () => get().cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
})),
    {
    name: 'cart-storage' 
    })

export default useCartStore