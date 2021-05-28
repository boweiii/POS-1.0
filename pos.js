// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
let productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 180
  }
];
// ======= 請從這裡開始 =======
let menuContent = ''
let shopCar = ''
let toltalPrice = 0
// Render商品清單
productData.forEach(product => {
  menuContent += `
  <div class="col-3">
    <div class="card">
      <img src=${product.imgUrl} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
        <a href="#" class="btn btn-primary">加入購物車</a>
      </div>
    </div>
  </div>`
})
menu.innerHTML = menuContent
// 新增點選商品及累計金額
menu.addEventListener('click', event => {
  if(event.target.matches('.btn-primary')){
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
  shopCar=''
  cart.innerHTML = shopCar
  toltalPrice = 0
  totalAmount.innerText = toltalPrice
})