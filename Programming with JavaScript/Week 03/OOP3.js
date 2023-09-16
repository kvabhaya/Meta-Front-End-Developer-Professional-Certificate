var purchase1 = {
    shoes: 100,
    tax: 1.2,
    totalPrice: function () {
        var calculate = this.shoes * this.tax;
        console.log("Total Price : ", calculate);
    }
};

purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    tax: 1.2,
    totalPrice: function () {
        var calculate = this.shoes * this.tax;
        console.log("Total Price : ", calculate);
    }
};

purchase2.totalPrice();
