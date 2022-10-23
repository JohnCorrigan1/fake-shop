import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector } from "react-redux"



const initialState = [{
       title: "test title",
       link: "/shoe1.png",
       quantity: 2,
       price: 10,
       id: 1
}]



const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        removeItem(state, id) {
            console.log(id)
            return state.filter(element => element.id !== id.payload)
           
        },
        addItem(state, item){
            state.push(item.payload)
        },
        updateQuantity(state, params){
            state.forEach(item => {
                if(item.id === params.payload.id){
                    item.quantity = params.payload.quantity
                }
            })   
        }
    }
})

const store = configureStore({
    reducer: cartSlice.reducer 
})

export const cartActions = cartSlice.actions
export default store