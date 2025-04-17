const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];

// #1 // 
const getNumberEntries = (object) => {
  let output = []
  for (let key in object) {
    if (typeof object[key] === 'number') {
      output.push([key, object[key]])
    }
  }
  return output
};

// #2 // 
const addKeyValuePairs = (object, additions) => {
  for (let i = 0; i < additions.length; i++) {
    object[additions[i][0]] = additions[i][1]
  }
  return object
};

// #3 //
const filterByPrice = (array, price) => {
  return array.filter(function(obj) {
    return obj.price > price
  })
};

// #4 //
const mapPurchases = (array) => {
  return array.map(function(obj) {
    let latest = obj.mostLikedReviews.length - 1
    return `${obj.product.toUpperCase()} - Review: ${obj.mostLikedReviews[latest].text}`
  })
};

// #5 //
const accumulateString = (array) => {
  return array.reduce(function(accStr, obj) {
    let array2 = obj.product.split(" ")
    accStr += array2[obj.quantity - 1]
    return accStr
  }, "")
};

// #6 //
const findProduct = (array, product, output = []) => {
  if (array.length === 0 && output.length !== 0) {
    return output
  } else if (array.length === 0 && output.length === 0) {
    return [null, null]
  }
  if (array[0].product === product) {
    output.push(array[0].product);
    output.push(array[0].category);
  }
  return findProduct(array.slice(1), product, output)
};

// #7 //
const filterByReviewLength = (array) => {
  return array.filter(function(obj) {
    let reviews = obj.mostLikedReviews
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].text.length > 35) {
        return obj.product
      }
    }
  })
};


