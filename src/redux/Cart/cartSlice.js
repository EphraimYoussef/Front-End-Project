import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notifySuccess(quantity) {
	toast.success(`Added ${quantity} items to cart.`, {
	position: "bottom-right",
	autoClose: 1500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
	transition: Bounce,
	});
}

const notifyRemove = (quantity) => {
	toast.error(`Removed ${quantity} items from cart.`, {
		position: "bottom-right",
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce,
		});
}

const initialState = {
    cartItems:[],
    amount : 0,
    total : 0,
    isLoading : true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.amount = 0;
        },
        addItem: (state, action) => {
            const { product, quantity } = action.payload;
            const existItem = state.cartItems.find((item) => item.id === product.id);
            if (existItem) {
                existItem.quantity += parseInt(quantity);
                state.amount += parseInt(quantity);
                state.total += product.price * quantity;
            } 
            else {
                state.cartItems.push({ ...product, quantity });
                state.amount += parseInt(quantity);
                state.total += product.price * quantity;
            }
            notifySuccess(quantity);
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existItem = state.cartItems.find((item) => item.id === id);
            if (existItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.amount -= existItem.quantity;
                state.total -= existItem.price * existItem.quantity;
            notifyRemove(existItem.quantity);
            }
        },
    },
});

export const { clearCart , addItem  , removeItem} = cartSlice.actions

export default cartSlice.reducer