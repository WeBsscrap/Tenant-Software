const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const sampleProducts = [
  {
    name: "Concrete Mix",
    category: "Cement",
    price: 15,
    inStock: true,
    stateCodes: ["TX", "NY", "CA"],
    distributor: false
  },
  {
    name: "Rebar Steel Rods",
    category: "Metal",
    price: 25,
    inStock: true,
    stateCodes: ["TX", "FL"],
    distributor: false
  },
  {
    name: "Wiring Kit",
    category: "Electrical",
    price: 30,
    inStock: true,
    stateCodes: ["NY", "CA"],
    distributor: false
  },
  {
    name: "Drywall Panels",
    category: "Interior",
    price: 20,
    inStock: true,
    stateCodes: ["TX", "WA"],
    distributor: false
  },
  {
    name: "Insulation Foam",
    category: "Thermal",
    price: 18,
    inStock: true,
    stateCodes: ["CA", "WA"],
    distributor: true
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log("🌱 Sample products inserted!");
    process.exit();
  } catch (err) {
    console.error("❌ Failed to seed products:", err);
    process.exit(1);
  }
}

seedProducts();
