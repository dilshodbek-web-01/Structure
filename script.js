"use strict";

const selectArray = [];
const buttonsArray = [];
const productsArray = [];
const thingsArray = [];

$("#select").addEventListener("change", (e) => {
    $(".average").innerHTML = e.target.value;
    selectArray.push(e.target.value);
    console.log(selectArray);
});

for (let i = 0; i < $$(".btn").length; i++) {
    $$(".btn")[i].addEventListener("click", (e) => {
        $(".sm").innerHTML = e.target.innerHTML;
        buttonsArray.push(e.target.innerHTML);
        console.log(buttonsArray);
    });
}

for (let i = 0; i < $$("#extra-product").length; i++) {
    let next = document.createElement("p");
    $$("#extra-product")[i].addEventListener("change", (e) => {
        if ($$("#extra-product")[i].checked == true) {
            next.innerHTML = e.target.value;
            productsArray.push(e.target.value);
            console.log(productsArray);
        } else {
            next.innerHTML = "";
            productsArray.pop();
        }

        $(".next-product").appendChild(next);
    });
}

for (let i = 0; i < $$("#checkbox").length; i++) {
    let next = document.createElement("p");
    $$("#checkbox")[i].addEventListener("change", (e) => {
        if ($$("#checkbox")[i].checked == true) {
            next.innerHTML = e.target.value;
            thingsArray.push(e.target.value);
            console.log(thingsArray);
        } else {
            next.innerHTML = "";
            thingsArray.pop();
            console.log(thingsArray);
        }

        $(".product").appendChild(next);
    });
}

function hide() {
    $$(".btn").forEach((item) => {
        item.classList.remove("active");
    });
}
function show(i) {
    $$(".btn")[i].classList.add("active");
}
hide();
show(0);
$(".list").addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("btn")) {
        $$(".btn").forEach((item, index) => {
            if (item == e.target) {
                hide();
                show(index);
            }
        });
    }
});

$(".btn-orange").addEventListener("click", () => {
    if (
        selectArray.length <= 0 ||
        buttonsArray.length <= 0 ||
        productsArray.length <= 0 ||
        thingsArray.length <= 0
    ) {
        $(".modal__container-content-img").src = "./images/x.png";
        $(".modal__container-content-img").alt = "x";
        $(".modal__container-content-img").title = "x";
        $(".modal").setAttribute("class", "modal active");
    } else if (
        selectArray.length !== 0 &&
        buttonsArray.length !== 0 &&
        productsArray.length !== 0 &&
        thingsArray.length !== 0
    ) {
        $(".modal__container-content-img").src = "./images/check.png";
        $(".modal__container-content-img").alt = "check";
        $(".modal__container-content-img").title = "check";
        $(".modal").setAttribute("class", "modal active");

    }
});

$(".modal__container-content-img2").addEventListener("click", () => {
    $(".modal").setAttribute("class", "modal");

    if (
        selectArray.length !== 0 &&
        buttonsArray.length !== 0 &&
        productsArray.length !== 0 &&
        thingsArray.length !== 0
    ) {
        $(".modal__container-content-img").src = "./images/check.png";
        $(".modal__container-content-img").alt = "check";
        $(".modal__container-content-img").title = "check";
        $(".modal").setAttribute("class", "modal active");
        $(".modal__container-content-img2").href = "index.html";
        let array = [
            ...selectArray,
            ...productsArray,
            ...thingsArray,
            ...buttonsArray,
        ];
        console.log(array);
        alert(array);
    }
});