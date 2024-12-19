import { Product, products } from '../data/products';

export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  products?: Product[];
};

export type ChatResponse = {
  message: string;
  products?: Product[];
};

const searchProducts = (query: string): Product[] => {
  const searchTerms = query.toLowerCase().split(' ');
  return products.filter(product =>
    searchTerms.some(term =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    )
  );
};

const getPriceInfo = (query: string): ChatResponse => {
  const searchResults = searchProducts(query);
  if (searchResults.length === 0) {
    return {
      message: "I couldn't find any products matching your query. Could you please be more specific?"
    };
  }

  const productInfo = searchResults.map(product =>
    `${product.name} costs $${product.price}`
  ).join('. ');

  return {
    message: `Here's the price information: ${productInfo}`,
    products: searchResults
  };
};

export const processMessage = async (message: string): Promise<ChatResponse> => {
  const lowercaseMessage = message.toLowerCase();

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Greeting patterns
  if (lowercaseMessage.match(/^(hi|hello|hey|greetings)/)) {
    return {
      message: "Hello! I'm your shopping assistant. I can help you with:\n- Searching for products\n- Checking prices\n- Getting product information\n\nWhat would you like to know?"
    };
  }

  // Show all products
  if (lowercaseMessage.match(/^(show|list|display)?\s*(all)?\s*products/)) {
    return {
      message: "Here are all our available products:",
      products: products
    };
  }

  // Price queries
  if (lowercaseMessage.includes('price') ||
    lowercaseMessage.includes('cost') ||
    lowercaseMessage.includes('how much')) {
    return getPriceInfo(message);
  }

  // Search queries
  if (lowercaseMessage.includes('search') ||
    lowercaseMessage.includes('find') ||
    lowercaseMessage.includes('show me') ||
    lowercaseMessage.includes('looking for')) {
    const searchResults = searchProducts(message);
    if (searchResults.length === 0) {
      return {
        message: "I couldn't find any products matching your search. Could you try different keywords?"
      };
    }
    return {
      message: "Here are the products I found:",
      products: searchResults
    };
  }

  // Help message for unrecognized queries
  return {
    message: "I can help you with:\n- Searching for products (e.g., 'show me headphones')\n- Checking prices (e.g., 'how much is the smartwatch?')\n- Browsing all products (e.g., 'show all products')\n\nHow can I assist you?"
  };
};