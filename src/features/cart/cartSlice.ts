import { createSlice } from "@reduxjs/toolkit"
import type { CartItemType } from "../../types/cart"

interface InitialStateType {
  cart: CartItemType[]; 
}
const initialState: InitialStateType = {
  cart: [],
  
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32
  //   },
  // ],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action){
      // payLoad = newItem
      state.cart.push(action.payload)
    },
    deleteItem(state, action){
      // payload = pizzaId
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action){
      const item = state.cart.find(item => item.pizzaId === action.payload)
      if (item){
        item.quantity++; 
        item.totalPrice = item?.quantity * item?.unitPrice
      }
    },
    decreaseItemQuantity(state, action){
      const item = state.cart.find(item => item.pizzaId === action.payload)
      if (item){
        item.quantity--; 
        item.totalPrice = item?.quantity * item?.unitPrice
      }
    },
    clearCart(state){
      state.cart = []
    },
  }
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer

export const getCart = ((state: { cart: { cart: CartItemType[] } }) => state.cart.cart);

export const getUserName = (state: { user: {username:string}}) => state.user.username;

export const getTotalCartQuantity =  (state: { cart: { cart: CartItemType[] } }) => state.cart.cart.reduce((sum:number,item:CartItemType)=> sum + item.quantity, 0)

export const getTotalCartPrice =  (state: { cart: { cart: CartItemType[] } }) => state.cart.cart.reduce((sum:number,item:CartItemType)=> sum + item.totalPrice, 0)
