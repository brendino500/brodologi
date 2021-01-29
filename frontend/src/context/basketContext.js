import React, { useReducer } from 'react'

export const BasketContext = React.createContext()

const initialState = { basket: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const newBasketItems = []
      for (let i = 0; i < action.quantity; i++) {
        newBasketItems.push(action.item)
      }
      return { basket: state.basket.concat(newBasketItems) }
    case 'delete':
      const basket = [...state.basket]
      console.log(basket, action.breadID)
      basket.splice(
        basket.findIndex((value) => value._id === action.breadID),
        1
      )
      console.log(basket, action.breadID)

      return {
        basket,
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
