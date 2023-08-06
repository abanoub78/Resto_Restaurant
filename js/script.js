function changeActiveLink(element) {
    // Remove active class from currently active link
    const activeLink = document.querySelector('.nav li.active');
    activeLink.classList.remove('active');
  
    // Add active class to clicked link
    element.parentNode.classList.add('active');
  }

  //********************************* */



  let up=document.querySelector(".up")
  window.onscroll=function(){
      if(this.scrollY>1000)
      {
          up.style.opacity =1;
      }else{
          up.style.opacity =0;
      }
  }
  up.onclick =function(){
     window.scrollTo({
      top:0,behavior: "smooth",
     });
  }
  


  //*************************************** */

  let mainMenu = document.querySelector(".main-menu-warp")
    

function toggleMenu2(){
    mainMenu.classList.toggle("open");
}

let subMenu = document.getElementById("subMenu");
    
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

let subMenu2 = document.getElementById("subMenu2");
    
function toggleMenu3(){
    subMenu2.classList.toggle("open-menu");
}

let searchMenu = document.querySelector(".search-menu-wrap");
    
function toggleMenuSearch(){
    searchMenu.classList.toggle("open-menu");
}

/***************************************************** */



const addButton = document.querySelectorAll('.addcart');
const cartItems = [];
let totalPrice = 0;

addButton.forEach(function(button) {
  button.addEventListener('click', function() {
    const image = this.parentNode.parentNode.querySelector('img').src;
    const title = this.parentNode.parentNode.querySelector('h2').textContent;
    const price = parseFloat(this.parentNode.parentNode.querySelector('.price').textContent);

    const item = {
      image: image,
      title: title,
      price: price
    };

    cartItems.push(item);
    totalPrice += price;
    updateCart();
  });
});

function updateCart() {
  const cartItemsContainer = document.getElementById('cartitem');
  cartItemsContainer.textContent = '';

  if (cartItems.length === 0) {
    cartItemsContainer.textContent = 'Your Cart Is Empty';
  } else {
    cartItems.forEach(function(item, index) {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      const cartItemImage = document.createElement('img');
      cartItemImage.src = item.image;

      const cartItemTitle = document.createElement('h3');
      cartItemTitle.textContent = item.title;

      const cartItemPrice = document.createElement('h4');
      cartItemPrice.textContent = item.price + ' $';

      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('delete-icon');
      deleteIcon.classList.add('fas');
      deleteIcon.classList.add('fa-trash-alt');

      deleteIcon.addEventListener('click', function() {
        cartItems.splice(index, 1);
        totalPrice -= item.price;
        updateCart();
      });

      cartItem.appendChild(cartItemImage);
      cartItem.appendChild(cartItemTitle);
      cartItem.appendChild(cartItemPrice);
      cartItem.appendChild(deleteIcon);

      cartItemsContainer.appendChild(cartItem);
    });
  }

  const totalPriceElement = document.getElementById('price');
  totalPriceElement.textContent = totalPrice.toFixed(2) + ' $';
}

const clearIcon = document.querySelector('.clear');
clearIcon.addEventListener('click', function() {
  cartItems.length = 0;
  totalPrice = 0;
  updateCart();
});

/********************************************* */

document.addEventListener("DOMContentLoaded", function() {
    // Get all the red heart icons on the page
    const redHeartIcons = document.querySelectorAll(".red");
  
    // Check if there are any red heart icons on the page
    if (redHeartIcons.length > 0) {
      // Add click event listener to each red heart icon
      redHeartIcons.forEach(function(redHeartIcon) {
        redHeartIcon.addEventListener("click", function() {
          const currentColor = redHeartIcon.style.color;
  
          const boxElement = redHeartIcon.closest(".box");
  
          // Check if boxElement exists
          if (boxElement) {
            // Get the image and title from the box element
            const imageSrc = boxElement.querySelector("img").getAttribute("src");
            const title = boxElement.querySelector("h2").innerText;
  
            // Create new elements to display the saved image and title
            const item = document.createElement("div");
            item.classList.add("item");
  
            const itemImage = document.createElement("img");
            itemImage.setAttribute("src", imageSrc);
            itemImage.setAttribute("alt", "");
            item.appendChild(itemImage);
  
            const itemTitle = document.createElement("h3");
            itemTitle.innerText = title;
            item.appendChild(itemTitle);
  
            // Get the cartitem div
            const cartitem = document.getElementById("cartitem2");
  
            // Check if cartitem div is empty
            if (cartitem.innerText === "Favorites list is empty") {
              cartitem.innerText = ""; // Clear the initial message
            }
  
            // Get all the items in the cart
            const cartItems = cartitem.getElementsByClassName("item");
  
            // Initialize boolean variable to check for duplicates
            let isDuplicate = false;
  
            // Iterate over each item
            for (let i = 0; i < cartItems.length; i++){
              // Get the title of the current item
              let currentItemTitle = cartItems[i].querySelector("h3").innerText;
  
              // If the title of the current item is the same as the new item, set isDuplicate to true
              if (currentItemTitle === title) {
                isDuplicate = true;
                // Remove the item from the cart
                cartitem.removeChild(cartItems[i]);
                break;
              }
            }
  
            // If the item isn't a duplicate, append it to the cart
            if (!isDuplicate) {
              cartitem.appendChild(item);
            }
          }
        });
      });
    }
  });
  





  const cartitem = document.getElementById("cartitem2");
  const clearIcon2 = document.querySelector('.clear2');
  clearIcon2.addEventListener('click', function() {
    cartitem.innerHTML = "Favorites list is empty";
  });
  
  




function toggleMenu4(element){
    element.classList.toggle("redd");

    
}


//******************************************* */




const searchInput = document.querySelector('input[type="search"]');
const searchResContainer = document.getElementById('searchRes');

searchInput.addEventListener("keyup", filterResults);

function filterResults() {
  const input = searchInput.value.toUpperCase();
  const boxes = document.querySelectorAll(".box");

  searchResContainer.innerHTML = '';

  boxes.forEach((box) => {
    const boxTitle = box.querySelector("h2");
    const text = boxTitle.textContent.toUpperCase();

    if (text.startsWith(input)) {
      const h2Clone = boxTitle.cloneNode(true);  
      searchResContainer.appendChild(h2Clone);
    }
  });

  if (searchResContainer.innerHTML === '') {
    searchResContainer.innerHTML = 'No results found.';
  }
}



  
  searchInput.addEventListener('input', filterResults);


  const clearSearch=document.querySelector(".clearSearch");
  clearSearch.addEventListener('click', function() {
    searchResContainer.innerHTML = 'No results found.';

  });