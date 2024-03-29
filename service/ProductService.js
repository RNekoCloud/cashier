class ProductService {
  constructor(sequelize, product_model) {
    this.sequelize = sequelize;
    this.product_model = product_model;
  }

  async store(data) {
    try {
      // Konek database
      await this.sequelize.authenticate();

      // Migrate up
      await this.sequelize.sync();

      // Masukkan data ke database.
      const result = await this.product_model.create({
        name: data.name,
        quantity: data.quantity,
        description: data.description,
      });

      // Kembalikan hasil data
      return result;
    } catch (error) {
      // Jika terdapat error, kembalikan nilai error
      return error;
    }
  }
}

export default ProductService;
