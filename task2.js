
const products = [
    { id: 1, name: "apples", price: 400 },
    { id: 2, name: "bananas", price: 500 },
    { id: 3, name: "oranges", price: 300 }
  ];
  
  function getProductDetails(productId, successCallback, errorCallback) {
    const product = products.find((item) => item.id === productId);
    // Робимо перевірку чи знайдено продукт
    if (product) {
      successCallback(product);
    } else {
      errorCallback("Продукт не знайдено");
    }
  }
  
  const userInput = prompt("Введіть ідентифікатор продукту:");
  const productId = parseInt(userInput, 10);
  
  // Перевіряємо, чи введення є дійсним числом
  if (!isNaN(productId)) {
    getProductDetails(
      productId,
      (product) => {
        console.log("Деталі продукту:", product);
      },
      (errorMessage) => {
        console.log("Помилка:", errorMessage);
      }
    );
  } else {
    console.log("Будь ласка, введіть коректний числовий ідентифікатор продукту.");
  }
  