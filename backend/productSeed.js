import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import Product from "./src/models/schema/productSchema.js";

dotenv.config();

const products = [
  // ================= PHONES =================
  {
    name: "Samsung Galaxy S25 Ultra",
    model: "SM-S938B",
    category: "Phone",
    description: "Samsung flagship smartphone with 6.9-inch Dynamic AMOLED display, Snapdragon 8 Elite processor, 200MP camera system, and built-in S Pen.",
    specifications: {
      ram: "12GB LPDDR5X",
      ssd: "256GB UFS 4.0",
    },
    price: 1299.99,
    quantity: 45,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung Galaxy S25+",
    model: "SM-S936B",
    category: "Phone",
    description: "High-end Samsung smartphone with AMOLED display and triple camera setup.",
    specifications: {
      ram: "12GB LPDDR5X",
      ssd: "256GB UFS 4.0",
    },
    price: 999.99,
    quantity: 60,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung Galaxy A55 5G",
    model: "SM-A556E",
    category: "Phone",
    description: "Mid-range Samsung phone with AMOLED display and 50MP camera.",
    specifications: {
      ram: "8GB LPDDR4X",
      ssd: "128GB UFS 2.2",
    },
    price: 449.99,
    quantity: 0,
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung Galaxy Z Fold 6",
    model: "SM-F956B",
    category: "Phone",
    description: "Premium foldable phone with large inner display.",
    specifications: {
      ram: "12GB",
      ssd: "256GB",
    },
    price: 1799.99,
    quantity: 25,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung Galaxy Z Flip 6",
    model: "SM-F741B",
    category: "Phone",
    description: "Compact foldable flip phone with FlexCam.",
    specifications: {
      ram: "12GB",
      ssd: "256GB",
    },
    price: 1099.99,
    quantity: 35,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800",
  },

  // ================= IPHONES =================
  {
    name: "Apple iPhone 16 Pro Max",
    model: "A3293",
    category: "Phone",
    description: "Apple flagship with A18 Pro chip and titanium design.",
    specifications: {
      ram: "8GB",
      ssd: "256GB NVMe",
    },
    price: 1199.99,
    quantity: 50,
    image: "https://images.unsplash.com/photo-1698424595981-1c7c9f6e1b21?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple iPhone 16 Pro",
    model: "A3292",
    category: "Phone",
    description: "Pro iPhone with advanced camera system.",
    specifications: {
      ram: "8GB",
      ssd: "128GB",
    },
    price: 999.99,
    quantity: 55,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999098c4b?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple iPhone 16",
    model: "A3290",
    category: "Phone",
    description: "Standard iPhone with A18 chip.",
    specifications: {
      ram: "8GB",
      ssd: "128GB",
    },
    price: 799.99,
    quantity: 70,
    image: "https://images.unsplash.com/photo-1696446702408-1b6f3f3c4b4e?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple iPhone 15",
    model: "A2846",
    category: "Phone",
    description: "Previous generation iPhone with A16 chip.",
    specifications: {
      ram: "6GB",
      ssd: "128GB",
    },
    price: 699.99,
    quantity: 90,
    image: "https://images.unsplash.com/photo-1698424595981-1c7c9f6e1b21?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple iPhone SE (3rd Gen)",
    model: "A2595",
    category: "Phone",
    description: "Affordable iPhone with A15 chip.",
    specifications: {
      ram: "4GB",
      ssd: "64GB",
    },
    price: 429.99,
    quantity: 100,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800",
  },

  // ================= LAPTOPS =================
  {
    name: "Apple MacBook Pro 16-inch (M4 Max)",
    model: "MX2Y3LL/A",
    category: "Laptop",
    description: "Apple most powerful laptop.",
    specifications: {
      ram: "128GB",
      ssd: "1TB",
    },
    price: 3499.99,
    quantity: 20,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple MacBook Pro 14-inch (M4 Pro)",
    model: "MX2F3LL/A",
    category: "Laptop",
    description: "Compact powerhouse MacBook Pro.",
    specifications: {
      ram: "24GB",
      ssd: "512GB",
    },
    price: 1999.99,
    quantity: 30,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple MacBook Air 15-inch (M3)",
    model: "MQKQ3LL/A",
    category: "Laptop",
    description: "Lightweight large MacBook Air.",
    specifications: {
      ram: "8GB",
      ssd: "256GB",
    },
    price: 1299.99,
    quantity: 40,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple MacBook Air 13-inch (M3)",
    model: "MRXN3LL/A",
    category: "Laptop",
    description: "Ultra-thin MacBook Air.",
    specifications: {
      ram: "8GB",
      ssd: "256GB",
    },
    price: 1099.99,
    quantity: 50,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung Galaxy Book4 Pro 360",
    model: "NP960QGK-KG1US",
    category: "Laptop",
    description: "2-in-1 convertible laptop.",
    specifications: {
      ram: "16GB",
      ssd: "512GB",
    },
    price: 1699.99,
    quantity: 22,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung Galaxy Book4 Pro",
    model: "NP940XGK-KG1US",
    category: "Laptop",
    description: "Premium slim Samsung laptop.",
    specifications: {
      ram: "16GB",
      ssd: "512GB",
    },
    price: 1499.99,
    quantity: 28,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung Galaxy Book4 Edge",
    model: "NP940XMA-KB1US",
    category: "Laptop",
    description: "Snapdragon-powered laptop.",
    specifications: {
      ram: "16GB",
      ssd: "512GB",
    },
    price: 1249.99,
    quantity: 35,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800",
  },
  {
    name: "HP Spectre x360",
    model: "14-eu0xxx",
    category: "Laptop",
    description: "Premium 2-in-1 laptop.",
    specifications: {
      ram: "32GB",
      ssd: "2TB",
    },
    price: 1749.99,
    quantity: 18,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
  },
  {
    name: "HP EliteBook 840 G11",
    model: "9G0B6ET",
    category: "Laptop",
    description: "Business laptop with vPro security.",
    specifications: {
      ram: "16GB",
      ssd: "512GB",
    },
    price: 1399.99,
    quantity: 25,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800",
  },
  {
    name: "HP Pavilion Plus 14 (2024)",
    model: "14-ey0xxx",
    category: "Laptop",
    description: "Everyday thin laptop.",
    specifications: {
      ram: "16GB",
      ssd: "512GB",
    },
    price: 849.99,
    quantity: 45,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
  },
  {
    name: "HP Omen 16 Gaming Laptop",
    model: "16-xf0xxx",
    category: "Laptop",
    description: "High performance gaming laptop.",
    specifications: {
      ram: "16GB",
      ssd: "1TB",
    },
    price: 1549.99,
    quantity: 20,
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800",
  },

  // ================= TELEVISIONS =================
  {
    name: "Samsung 65-inch QLED 4K TV",
    model: "Q80D",
    category: "Television",
    description: "Samsung QLED smart TV.",
    specifications: {
      ram: "2.5GB",
      ssd: "16GB",
    },
    price: 1297.99,
    quantity: 15,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung 55-inch Neo QLED 8K",
    model: "QN800D",
    category: "Television",
    description: "8K Neo QLED TV.",
    specifications: {
      ram: "4GB",
      ssd: "32GB",
    },
    price: 2499.99,
    quantity: 10,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung 75-inch Crystal UHD",
    model: "DU8000",
    category: "Television",
    description: "Large 4K TV.",
    specifications: {
      ram: "1.5GB",
      ssd: "8GB",
    },
    price: 849.99,
    quantity: 20,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung 85-inch The Frame",
    model: "LS03D",
    category: "Television",
    description: "Art TV with frame design.",
    specifications: {
      ram: "2.5GB",
      ssd: "16GB",
    },
    price: 2799.99,
    quantity: 8,
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800",
  },
  {
    name: "LG C4 OLED 65-inch",
    model: "OLED65C4PUA",
    category: "Television",
    description: "Premium OLED TV.",
    specifications: {
      ram: "3GB",
      ssd: "16GB",
    },
    price: 1696.99,
    quantity: 12,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800",
  },
  {
    name: "LG G4 OLED 55-inch",
    model: "OLED55G4PSA",
    category: "Television",
    description: "Gallery OLED TV.",
    specifications: {
      ram: "4GB",
      ssd: "32GB",
    },
    price: 1999.99,
    quantity: 9,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800",
  },
  {
    name: "LG 75-inch QNED MiniLED",
    model: "QNED85",
    category: "Television",
    description: "QNED MiniLED TV.",
    specifications: {
      ram: "2GB",
      ssd: "16GB",
    },
    price: 1199.99,
    quantity: 14,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800",
  },
  {
    name: "LG 50-inch UHD 4K",
    model: "UR8050",
    category: "Television",
    description: "Affordable 4K TV.",
    specifications: {
      ram: "1.5GB",
      ssd: "8GB",
    },
    price: 449.99,
    quantity: 30,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple Pro Display XDR",
    model: "MWPE2LL/A",
    category: "Television",
    description: "Professional 6K display.",
    specifications: {
      ram: "4GB",
      ssd: "N/A",
    },
    price: 4999.99,
    quantity: 5,
    image: "https://images.unsplash.com/photo-1587202372775-98927c2b2d08?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple Studio Display",
    model: "MMYW3LL/A",
    category: "Television",
    description: "27-inch 5K display.",
    specifications: {
      ram: "4GB",
      ssd: "N/A",
    },
    price: 1599.99,
    quantity: 12,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800",
  },

  // ================= ACCESSORIES =================
  {
    name: "Apple AirPods Pro 2",
    model: "MTJV3LL/A",
    category: "Accessories",
    description: "Noise cancelling earbuds.",
    specifications: {
      ram: "64MB",
      ssd: "1GB",
    },
    price: 249.99,
    quantity: 100,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple MagSafe Charger",
    model: "MPWL3AM/A",
    category: "Accessories",
    description: "MagSafe wireless charger.",
    specifications: {
      ram: "N/A",
      ssd: "N/A",
    },
    price: 45.99,
    quantity: 150,
    image: "https://images.unsplash.com/photo-1612810436541-336d3d5b1a52?auto=format&fit=crop&w=800",
  },
  {
    name: "Apple USB-C to MagSafe 3",
    model: "MLYV3AM/A",
    category: "Accessories",
    description: "Charging cable for MacBooks.",
    specifications: {
      ram: "N/A",
      ssd: "N/A",
    },
    price: 49.99,
    quantity: 120,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung 45W USB-C Charger",
    model: "EP-TA845XBEGGB",
    category: "Accessories",
    description: "Fast charging adapter.",
    specifications: {
      ram: "N/A",
      ssd: "N/A",
    },
    price: 34.99,
    quantity: 200,
    image: "https://images.unsplash.com/photo-1609592806596-b43b5f0d2c0b?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung SmartTag2",
    model: "EI-T5600BBEGWW",
    category: "Accessories",
    description: "Item tracker.",
    specifications: {
      ram: "64MB",
      ssd: "128MB",
    },
    price: 29.99,
    quantity: 175,
    image: "https://images.unsplash.com/photo-1623123095582-6a3c2c3b1f11?auto=format&fit=crop&w=800",
  },
  {
    name: "Anker 10000mAh Power Bank",
    model: "A1259011",
    category: "Accessories",
    description: "Portable charger with PD 30W.",
    specifications: {
      ram: "N/A",
      ssd: "N/A",
    },
    price: 35.99,
    quantity: 220,
    image: "https://images.unsplash.com/photo-1609592806596-b43b5f0d2c0b?auto=format&fit=crop&w=800",
  },
  {
    name: "Logitech MX Master 3S",
    model: "910-006557",
    category: "Accessories",
    description: "Premium productivity mouse.",
    specifications: {
      ram: "N/A",
      ssd: "4MB",
    },
    price: 99.99,
    quantity: 90,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800",
  },
  {
    name: "Belkin 3-in-1 MagSafe Stand",
    model: "WIZ017ttWH",
    category: "Accessories",
    description: "Charging stand for Apple devices.",
    specifications: {
      ram: "N/A",
      ssd: "N/A",
    },
    price: 149.99,
    quantity: 65,
    image: "https://images.unsplash.com/photo-1612810436541-336d3d5b1a52?auto=format&fit=crop&w=800",
  },
  {
    name: "Samsung USB-C Multiport Adapter",
    model: "EE-P5400BBEGWW",
    category: "Accessories",
    description: "4-in-1 USB-C hub.",
    specifications: {
      ram: "N/A",
      ssd: "N/A",
    },
    price: 59.99,
    quantity: 110,
    image: "https://images.unsplash.com/photo-1623123095582-6a3c2c3b1f11?auto=format&fit=crop&w=800",
  },
];

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
