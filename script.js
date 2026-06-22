let cart = [];
let isAdmin = false;
let products = [];

/* ======================
   FIREBASE INIT (CONNECT LATER)
====================== */

const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

/* ======================
   LOAD PRODUCTS (FIREBASE READY)
====================== */

function loadProducts(){
    let container = document.getElementById("menu");
    if(!container) return;

    if(products.length === 0){
        // fallback local data
        products = [
            {name:"Orange Juice", price:40},
            {name:"Mango Shake", price:50},
            {name:"Mix Fruit", price:60}
        ];
    }

    container.innerHTML = products.map((item,i)=>`
        <div class="card bg-white p-4 rounded shadow">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button class="btn3d bg-green-600 text-white px-3 py-1 mt-2"
            onclick="addToCart('${item.name}')">
            Add
            </button>
        </div>
    `).join("");
}

/* ======================
   ADD TO CART
====================== */

function addToCart(item){
    cart.push(item);
    renderCart();
}

/* ======================
   CART RENDER
====================== */

function renderCart(){
    let list = document.getElementById("cartList");
    if(!list) return;

    list.innerHTML = cart.map((item,i)=>`
        <li class="flex justify-between border-b py-1">
            ${item}
            <button onclick="removeItem(${i})">❌</button>
        </li>
    `).join("");
}

/* ======================
   REMOVE ITEM
====================== */

function removeItem(i){
    cart.splice(i,1);
    renderCart();
}

/* ======================
   CART TOGGLE
====================== */

function toggleCart(){
    document.getElementById("cartBox").classList.toggle("hidden");
}

/* ======================
   WHATSAPP ORDER
====================== */

function whatsapp(){
    if(cart.length === 0){
        alert("Cart empty hai!");
        return;
    }

    let msg = "🧃 Juice Order:%0A" + cart.join("%0A");

    window.open(
        "https://wa.me/917827543597?text=" + encodeURIComponent(msg),
        "_blank"
    );
}

/* ======================
   MOBILE MENU
====================== */

function toggleMenu(){
    let m = document.getElementById("menuBox");
    if(!m) return;

    m.style.display = (m.style.display === "block") ? "none" : "block";
}

/* ======================
   ADMIN LOGIN (LOCAL NOW → FIREBASE LATER)
====================== */

function adminLogin(){
    let pass = prompt("Enter Admin Password:");

    if(pass === "admin123"){
        isAdmin = true;
        alert("Admin Login Success");
        document.getElementById("admin").classList.remove("hidden");
    } else {
        alert("Wrong Password");
    }
}

/* ======================
   ADD PRODUCT (ADMIN)
====================== */

function addProduct(){
    if(!isAdmin){
        alert("Admin only access");
        return;
    }

    let name = document.getElementById("pname").value;

    if(!name){
        alert("Enter product name");
        return;
    }

    let newProduct = {
        name: name,
        price: 50
    };

    products.push(newProduct);
    loadProducts();

    alert("Product added locally (Firebase connect pending)");
}

/* ======================
   FIREBASE AUTH (OTP READY HOOK)
====================== */

function sendOTP(){
    alert("Firebase OTP setup required (connect later)");
}

function verifyOTP(){
    alert("OTP verified (demo mode)");
}

/* ======================
   INIT APP
====================== */

loadProducts();
renderCart();
