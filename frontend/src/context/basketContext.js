import React, { useReducer } from 'react'

export const BasketContext = React.createContext()

const initialState = {
  basket: [],
  total: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const newBasketItems = []
      for (let i = 0; i < action.quantity; i++) {
        newBasketItems.push(action.item)
      }
      const newBasket = state.basket.concat(newBasketItems)
      const newTotal = newBasket.reduce((a, b) => a + b.price, 0)
      return { basket: newBasket, total: newTotal }

    case 'delete':
      const basket = [...state.basket]
      const spliceArray = basket.splice(
        basket.findIndex((value) => value._id === action.breadID),
        1
      )
      const removeItem = spliceArray[0]

      return {
        basket,
        total: state.total - removeItem.price,
      }
    default:
      throw new Error()
  }
}

export const BasketProvider = (props) => {
  const [basketState, basketDispatch] = useReducer(reducer, initialState)

  return (
    <BasketContext.Provider value={[basketState, basketDispatch]}>
      {props.children}
    </BasketContext.Provider>
  )
}
