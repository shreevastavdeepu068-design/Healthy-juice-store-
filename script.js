let cart = [];
let isAdmin = false;

/* ======================
   ADD TO CART (OLD SAFE)
====================== */
function addCart(item){
    cart.push(item);
    renderCart();
}

/* ======================
   RENDER CART (FIXED HTML MATCH)
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
   CART TOGGLE (HTML MATCH)
====================== */
function toggleCart(){
    let box = document.getElementById("cartBox");
    if(!box) return;
    box.classList.toggle("hidden");
}

/* ======================
   WHATSAPP ORDER (FIXED SAFE)
====================== */
function whatsapp(){
    if(!cart || cart.length === 0){
        alert("Cart empty hai!");
        return;
    }

    window.open(
        "https://wa.me/917827543597?text=Order:%0A" + cart.join("%0A"),
        "_blank"
    );
}

/* ======================
   MENU TOGGLE (FIXED)
====================== */
function toggleMenu(){
    let menu = document.getElementById("menuBox");
    if(!menu) return;

    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

/* ======================
   SCROLL (HTML MATCH FIX)
====================== */
function scrollTo(id){
    let el = document.getElementById(id);
    if(el){
        el.scrollIntoView({behavior:"smooth"});
    }
}

/* ======================
   ADMIN LOGIN (HTML MATCH)
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
   ADD PRODUCT (SAFE FIX)
====================== */
function addProduct(){
    if(!isAdmin){
        alert("Admin only access");
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
   OTP SYSTEM (HTML SUPPORT)
====================== */
function sendOTP(){
    let box = document.getElementById("otpBox");
    if(box) box.classList.remove("hidden");

    alert("OTP sent (Firebase connect required)");
}

function verifyOTP(){
    alert("OTP verified (demo mode)");
}

/* ======================
   SAFE INIT
====================== */
console.log("Final JS loaded successfully");
