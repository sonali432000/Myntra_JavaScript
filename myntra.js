let bagItems = [];
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayBagIcon();
  displayItemsHomePage();
}


function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';
  bagItemCountElement.innerText = bagItems.length;
  }else{
  bagItemCountElement.style.visibility = 'hidden';
  }
}


function displayItemsHomePage(){
let itemsContainerElement = document.querySelector('.items_container');

if(!itemsContainerElement){
  return;
}

let innerHTML= '';
items.forEach(item => {
   innerHTML += `<div class="item_container">
    <img class="item_image" src="${item.image}" alt="image">
    
    <div class="rating">${item.rating.stars} ⭐| ${item.rating.count} </div>

    <div class="company_name">${item.company}</div>
    <div class="item_name">${item.item_name}</div>

    <div class="price">
      <span class="current_price">Rs ${item.current_price} </span>
      <span class="original_price">Rs ${item.original_price} </span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>

    <button class="btn_add_bag" onclick ='addToBag(${item.id})'>Add to Bag</button>

  </div>`
});
itemsContainerElement.innerHTML = innerHTML;
}