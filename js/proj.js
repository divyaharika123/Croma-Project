// Accordian-----------------------------------------
var sidebar=document.querySelector(".sidebar");
var html1 = document.getElementById("html1");
function acc() {
    sidebar.classList.toggle("sidebars")
}  

// Carousel-------------------------------------------

var count = 0;

function previousbtn() {
	count = count - 1;
	carousel(count);
}

function nextbtn() {
	count = count + 1;
	carousel(count);
}

function carousel(a) {
	var finaloutput = document.getElementsByClassName("imgdiv");
  
	
	if (a >= finaloutput.length) {
		a = 0;
		count = 0;
	}
	if (a < 0) {
		a = finaloutput.length - 1;
		count = finaloutput.length - 1;
	}
    for (let i = 0; i < finaloutput.length; i++) {
		finaloutput[i].style.display = "none";
	}
    finaloutput[a].style.display = "block";

}

carousel(count);



// Fetching API--------------------------------------------------
let added;
let total;
const cartBg = document.querySelector('#demo2');

fetch(`https://res.cloudinary.com/cliqtick/raw/upload/v1676876027/react-class/ecomm/products_evrz02.json`)
.then(async res => await res.json())
.then(res =>{
    console.log(res)
     html1 = '';
     res.map(data => {
        html1 +=

`<div class="products">
            <div class="img-bg">
                <img id="product-img" src="${data.pictures[0].url}" alt="img"/>
            </div>
            <div class="img-desc">
                <p>$<span id="price">${data.price[1]}</span></p>
                <p id="productname">${data.name}</p>
            </div>
            <div class="add-cart-btn">
            <button slug=${data.slug} class="plus" type="button">+</button>
                <input class = "add-btn" id="add" slug=inp-${data.slug} type="button" data-price=${data.price[1]} value="Add To Cart">
            <button slug=${data.slug} class="minus" type="button" id="plus">-</button>
              
            </div>
        </div>`
    }
    )
    document.getElementById("myid").innerHTML=html1;

    
 //Add to Cart-------------------------------------------------------------
var plus=document.querySelectorAll(".plus");
 var disply = document.querySelectorAll('.add-btn');




// plus--------------------------------------------------------------------
plus.forEach((each,index) => {
    each.onclick = (e) => {
        const dataPrice = each.parentElement.children[1].dataset.price
        let slug = e.target.getAttribute("slug");
         if(each.textContent == '+') {
             const inp = document.querySelector(`[slug="inp-${slug}"]`);
             let count1 = 0;
             if(inp.value.includes("Add")) count1 = 0; else count1 = inp.value;
             inp.value = ++count1;
            total = Number(dataPrice) * count1;
            console.log(cartBg)
            cartBg.innerHTML = `Total Price: ${total}`
         }
    }
})


// minus-------------------------------
var minus=document.querySelectorAll(".minus");
 minus.forEach((each,index) => {
    each.onclick = (e) => {
        let slug = e.target.getAttribute("slug");
         if(each.textContent == '-') {
            const dataPrice = each.parentElement.children[1].dataset.price
             const inp = document.querySelector(`[slug="inp-${slug}"]`);
             let count1 = 0;
             if(inp.value.includes("Minus")) count1 = 0; else count1 = inp.value;
             --count1;
             if(count1 < 0) count1 = 0
             inp.value = count1;
             total = Number(dataPrice) * count1;
            console.log(each)
            cartBg.innerHTML = `Total Price: ${total}`
         }

    }
})



// let a=[];
// var v={};


// disply.forEach(each => {
//     each.onclick = () => {
//         const mainParent = each.parentElement.parentElement;
//         a.push(mainParent.children[0].children[0].src);
//         console.log(a);
//         // console.log(mainParent);
//         // console.log(total)
//         let cartHtml = '';
//         a.forEach(each => {
//             cartHtml += `
//                 <div>
//                     <img class="cartimg" src=${each}  />
//                     <p>total: $${total}</p>
//                 </div>
//             `
//         })

//         cartBg.innerHTML += cartHtml
//     }
//  })




})








   


