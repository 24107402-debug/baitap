let products = [
    ["Áo", 200000, "ao.png"],
    ["Quần", 300000, "quần.png"],
    ["Giày", 500000, "giày.png"]
];


function calculate() {

    let product = document.getElementById("product").value;

    let quantity = Number(
        document.getElementById("quantity").value
    );

    let price;

    if (product == "ao") {

        price = 200000;

    } else if (product == "quan") {

        price = 300000;

    } else {

        price = 500000;
    }


    let total = price * quantity;

    let discount;

    if (total >= 500000) {

        discount = total * 10 / 100;

    } else {

        discount = 0;
    }


    let pay = total - discount;


    document.getElementById("total").innerHTML =
        total + "đ";

    document.getElementById("discount").innerHTML =
        discount + "đ";

    document.getElementById("pay").innerHTML =
        pay + "đ";
}

function changeImage() {

    let product =
        document.getElementById("product").value;


    if (product == "ao") {

        document.getElementById("productImage").src =
            "images/ao.png";

    } else if (product == "quan") {

        document.getElementById("productImage").src =
            "images/quần.png";

    } else if (product == "giay") {

        document.getElementById("productImage").src =
            "images/giày.png";
    }
}

function changeColor(color) {

    document.body.style.backgroundColor = color;

}


function showPrice() {

    let result = "";

    for (let i = 0; i < products.length; i++) {

        result +=
            (i + 1) + ". " +
            products[i][0] + " - " +
            products[i][1] + "đ<br>";
    }

    document.getElementById("priceList").innerHTML =
        result;
}