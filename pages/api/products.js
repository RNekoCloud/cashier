import ProductService from "@/service/ProductService";
import sequelize from "@/config/database";
import Product from "@/model/product";

export default async function handler(req, res) {
  try {
    const productService = new ProductService(sequelize, Product);

    if (req.method === "POST") {
      const addProduct = await productService.store({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
      });

      return res.status(200).json({
        message: "Successfully add product data",
        data: addProduct,
      });
    } else if (req.method === "GET") {
      return res.status(200).json({
        message: "This is method GET",
      });
    }
  } catch (err) {}
}
