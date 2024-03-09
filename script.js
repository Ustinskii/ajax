// let brand_item = document.getElementById("marka").value;
// let type_item = document.getElementById("product").value;

// function getValue(array) {
//   document.getElementById("card").innerHTML = "";
//   for (let i = 0; i < array.length; i++) {
//     document
//       .getElementById("card")
//       .insertAdjacentHTML(
//         "beforeend",
//         '<div class="card"><h3 class="card-name">' +
//           array[i].name +
//           '</h3><a href="' +
//           ("https://www.google.com/search?q=" + array[i].name) +
//           '" class="card-link"><img src = "' +
//           array[i].image_link +
//           '" alt = "" class="card-image"></a><p class="card-price">$' +
//           array[i].price +
//           "</p></div>"
//       );
//   }
// }

// const krData = function (brand_item, type_item) {
//   try {
//     let brand_item = document.getElementById("marka").value;
//     let type_item = document.getElementById("product").value;

//     fetch(
//       ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item}&price_greater_than=10 `
//     )
//       .then((response) => response.json())
//       .then((data) => getValue(data));
//   } catch (err) {
//     console.log("File not found");
//   }
// };

function start() {

  const ska = new XMLHttpRequest();

  ska.open(
    "GET",
    `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${marka.value}&product_type=${product.value}&price_greater_than=10`
  );

  ska.onload = function () {
    const ska1 = JSON.parse(ska.response);

    document.getElementById("card").innerHTML = "";
  for (let i = 0; i < ska1.length; i++) {
    document
      .getElementById("card")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="card"><h3 class="card-name">' +
          ska1[i].name +
          '</h3><a href="' +
          ("https://www.google.com/search?q=" + ska1[i].name) +
          '" class="card-link"><img src = "' +
          ska1[i].image_link +
          '" alt = "" class="card-image"></a><p class="card-price">$' +
          ska1[i].price +
          "</p></div>"
      );
  }
  };

  ska.send();
}
