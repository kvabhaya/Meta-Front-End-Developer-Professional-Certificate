var purchase = {
    shoes: 50,
    tax: 1.2,
    totalPrice: function () {
        var calculate = this.shoes * this.tax;
        console.log("Total Price : ", calculate);
    }
};

purchase.totalPrice();
