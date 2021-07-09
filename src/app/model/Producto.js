class Product {
  constructor(obj, id = 0) {
    this.id = id;
    this.nombre = obj.nombre;
    this.stock = obj.stock;
    this.precio_compra = obj.precio_compra;
    this.precio_venta = obj.precio_venta;
  }
}

module.exports = {
  Product,
};
