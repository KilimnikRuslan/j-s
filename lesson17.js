

class ProductsService {
  static async getAllProducts() {
    try {
      const response = await fetch('https://');

      if (!response.ok) {
        throw new Error('Не вдалося виконати запит до сервера');
      }

      const data = await response.json();
      console.log('Всі продукти:', data);
      return data;
    } catch (error) {
      console.error('Виникла помилка при запиті до сервера:', error.message);
      throw error;
    }
  }

  static async getOneProduct(productId) {
    try {
      const response = await fetch(`https://${productId}`);

      if (!response.ok) {
        throw new Error('Не вдалося виконати запит до сервера');
      }

      const data = await response.json();
      console.log('Один продукт:', data);
      return data;
    } catch (error) {
      console.error('Виникла помилка при запиті до сервера:', error.message);
      throw error;
    }
  }

  static async searchProducts(query) {
    try {
      const response = await fetch(`https://${query}`);

      if (!response.ok) {
        throw new Error('Не вдалося виконати запит до сервера');
      }

      const data = await response.json();
      console.log('Результати пошуку:', data);
      return data;
    } catch (error) {
      console.error('Виникла помилка при запиті до сервера:', error.message);
      throw error;
    }
  }
}

ProductsService.getAllProducts()
  .then((data) => {
    const products = data.products;
    for (const product of products) {
      console.log('Назва продукту:', product.name);
      console.log('Ціна продукту:', product.price);
    }
  })
  .catch((error) => {
    console.error('Виникла помилка при запиті до сервера:', error.message);
  });

ProductsService.getOneProduct(1)
  .then((data) => {
    const product = data.product;
    console.log('Назва продукту:', product.name);
    console.log('Ціна продукту:', product.price);
  })
  .catch((error) => {
    console.error('Виникла помилка при запиті до сервера:', error.message);
  });

ProductsService.searchProducts('phone')
  .then((data) => {
    const products = data.products;
    for (const product of products) {
      console.log('Назва продукту:', product.name);
      console.log('Ціна продукту:', product.price);
    }
  })
  .catch((error) => {
    console.error('Виникла помилка при запиті до сервера:', error.message);
  });
