export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
    stock: 50
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 299.99,
    description: "Advanced smartwatch with health tracking features",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80",
    stock: 30
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable, eco-friendly cotton t-shirt",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80",
    stock: 100
  },
  {
    id: "4",
    name: "Wireless Gaming Mouse",
    price: 79.99,
    description: "High-precision wireless gaming mouse with RGB lighting",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80",
    stock: 45
  },
  {
    id: "5",
    name: "4K Ultra HD Monitor",
    price: 399.99,
    description: "27-inch 4K monitor with HDR support",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80",
    stock: 20
  }
  ,
  {
    id: "6",
    name: "Noise Cancelling Earbuds",
    price: 89.99,
    description: "In-ear wireless earbuds with active noise cancellation",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=300&q=80",
    stock: 75
  },
  {
    id: "7",
    name: "Robot Vacuum Cleaner",
    price: 249.99,
    description: "Smart robotic vacuum with self-charging and app control",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1603618090561-412154b4bd1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3QlMjB2YWN1dW18ZW58MHx8MHx8fDA%3D",
    stock: 40
  },
  {
    id: "8",
    name: "Electric Stand Mixer",
    price: 159.99,
    description: "Powerful 6-speed stand mixer for baking and food preparation",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1601297185877-72c15e60cfba?auto=format&fit=crop&w=300&q=80",
    stock: 30
  },
  {
    id: "9",
    name: "Air Fryer",
    price: 129.99,
    description: "Healthy cooking with 3.2L capacity and rapid air circulation",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1600795005049-e3829a58b0d7?auto=format&fit=crop&w=300&q=80",
    stock: 50
  },
  {
    id: "10",
    name: "Gaming Mouse",
    price: 49.99,
    description: "RGB backlit gaming mouse with 16000 DPI sensitivity",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1585746181577-2a60a12b4ff3?auto=format&fit=crop&w=300&q=80",
    stock: 100
  },
  {
    id: "11",
    name: "Smart Thermostat",
    price: 119.99,
    description: "Wi-Fi enabled smart thermostat for energy savings and remote control",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1545259742-b4fd8fea67e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U21hcnQlMjBUaGVybW9zdGF0fGVufDB8fDB8fHww",
    stock: 35
  },
  {
    id: "12",
    name: "Bluetooth Portable Speaker",
    price: 69.99,
    description: "Waterproof, compact Bluetooth speaker with 12-hour battery life",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1574412986262-292baf2bdf6c?auto=format&fit=crop&w=300&q=80",
    stock: 60
  }
];

