class ShoppingCart {
  constructor() {
    this.cart = []
  }

  getItems() {
    return this.cart

  }

  addItem(name, quantity, pricePerUnit) {
    this.cart.push(
      {
        name,
        quantity,
        pricePerUnit
      })

  }

  clear() {
    this.cart.length = 0
  }

  total() {
    const sum = this.cart
      .map(cart => cart.quantity * cart.pricePerUnit)
      .reduce((a, b) => a + b, 0)
    return sum

  }
}


module.exports = ShoppingCart