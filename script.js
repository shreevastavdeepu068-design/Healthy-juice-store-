let cart = [];
let isAdmin = false;

/* ======================
   ADD TO CART (MENU BUTTONS)
====================== */
function addCart(item){
    cart.push(item);
    renderCart();
}

/* ======================
   CART RENDER
====================== */
function renderCart(){
    let list = document.getElementById("cartList");
    if(!list) return;

    list.innerHTML = cart.map((i,index)=>`
        <li class="flex justify-between border-b py-1">
            ${i}
            <button onclick="removeItem(${index})">❌</button>
        </li>
    `).join("");
}

/* REMOVE ITEM */
function removeItem(i){
    cart.splice(i,1);
    renderCart();
}

/* ======================
   CART OPEN/CLOSE
====================== */
function toggleCart(){
    let box = document.getElementById("cartBox");
    if(box){
        box.classList.toggle("hidden");
    }
}

/* ======================
   WHATSAPP ORDER (BOOKING SYSTEM)
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
   MENU (3 DOTS)
====================== */
function toggleMenu(){
    let menu = document.getElementById("menuBox");
    if(!menu) return;

    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

/* ======================
   SMOOTH SCROLL (HOME / MENU / ABOUT / CONTACT)
====================== */
function scrollTo(id){
    let el = document.getElementById(id);
    if(el){
        el.scrollIntoView({behavior:"smooth"});
    }
}

/* ======================
   ADMIN LOGIN SYSTEM
====================== */
function adminLogin(){
    let pass = prompt("Enter Admin Password");

    if(pass === "admin123"){
        isAdmin = true;
        let panel = document.getElementById("admin");
        if(panel) panel.classList.remove("hidden");
        alert("Admin Login Success");
    } else {
        alert("Wrong Password");
    }
}

/* ======================
   ADD PRODUCT (ADMIN PANEL)
====================== */
function addProduct(){
    if(!isAdmin){
        alert("Admin only");
        return;
    }

    let input = document.getElementById("pname");

    if(!input || !input.value){
        alert("Enter product name");
        return;
    }

    alert("Product Added: " + input.value);
    input.value = "";
}

/* ======================
   OTP SYSTEM (FIREBASE READY)
====================== */
function sendOTP(){
    let box = document.getElementById("otpBox");
    if(box) box.classList.remove("hidden");

    alert("OTP sent (Firebase connect later)");
}

function verifyOTP(){
    alert("OTP verified (demo mode)");
}

/* ======================
   INIT SAFE
====================== */
function init(){
    renderCart();
}

init();

console.log("FULL MERGED JS LOADED");
