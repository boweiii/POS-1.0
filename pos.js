// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
let productData = [];
// ======= 請從這裡開始 =======
let menuContent = ''
let shopCar = ''
let toltalPrice = 0
// Render商品清單
axios
  .get("https://ac-w3-dom-pos.firebaseio.com/products.json")
  .then((response) => {
    console.log(response.data);
    productData = response.data;
    renderProduct(productData);
  });
function renderProduct(products) {
  let productList = "";
  products.forEach((product) => {
    productList += `
    <div class="col-3">
      <div class="card">
          <img src=${product.imgUrl} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>`;
  });
  menu.innerHTML = productList;
}
// 新增點選商品及累計金額
menu.addEventListener('click', event => {
  if (event.target.matches('.btn-primary')) {
    let productName = event.target.parentElement.children[0].innerText
    let productPrice = event.target.parentElement.children[1].innerText
    shopCar += `<li class="list-group-item">${productName} X 1 小計：${productPrice}</li>`
    cart.innerHTML = shopCar
    toltalPrice += Number(productPrice)
    totalAmount.innerText = toltalPrice
  }
})
// 送出訂單
button.addEventListener('click', () => {
  alert(`感謝購買!!\n總金額 : $${toltalPrice}`)
  // 將購物車/總金額歸零
  shopCar = ''
  cart.innerHTML = shopCar
  toltalPrice = 0
  totalAmount.innerText = toltalPrice
})