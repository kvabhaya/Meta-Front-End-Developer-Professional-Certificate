var purchase = {
    shoes: 100,
    tax: 1.2,
    totalPrice: function () {
        var calculate = purchase.shoes *purchase.tax;
        console.log("Total Price : ", calculate);
    }
};

purchase.totalPrice();
