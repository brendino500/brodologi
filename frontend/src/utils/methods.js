export function totalCostOfBasket(breadsInBasket) {
  let totalCost = 0

  breadsInBasket.forEach((value) => {
    if (value !== undefined) {
      totalCost += value.price
    }
  })
  return totalCost
}
