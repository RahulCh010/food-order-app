import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

		const existingItem = state.items[existingItemIndex];

		let updatedItems;

		if (existingItem) {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === "REMOVE_ITEM") {
		const existingItemIndex = state.items.findIndex((item) => item.id === action.id);

		const existingItem = state.items[existingItemIndex];

		let updatedItems;

		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		}

		const updatedTotalAmount = state.totalAmount - existingItem.price;

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount > 0 ? updatedTotalAmount : 0,
		};
	}
	return defaultState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item: item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
