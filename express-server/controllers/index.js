const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller functions
exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await prisma.product.create({
      data: { name, description, price }
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price } = req.body;
    const product = await prisma.product.update({
      where: { id: productId },
      data: { name, description, price }
    });
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    await prisma.product.delete({
      where: { id: productId }
    });
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
};
