var hotelController = (function () {

    var hotels = [{
        id: 1,
        name: "HotelOne",
        menu: [{
            id: 1,
            name: "Tea",
            price: 10,
            desc: "Hot Beverage",
            type: "Beverage"
}, {
            id: 2,
            name: "Coffee",
            price: 20,
            desc: "Hot Beverage",
            type: "Beverage"
}, {
            id: 3,
            name: "Cold Drink",
            price: 35,
            desc: "Cold Beverage",
            type: "Beverage"
}]
    }, {
        id: 2,
        name: "HotelTwo",
        menu: [{
            id: 1,
            name: "Tea",
            price: 10,
            desc: "Hot Beverage",
            type: "Beverage"
}, {
            id: 2,
            name: "Coffee",
            price: 20,
            desc: "Hot Beverage",
            type: "Beverage"
}, {
            id: 3,
            name: "Cold Drink",
            price: 35,
            desc: "Cold Beverage",
            type: "Beverage"
}]
    }];
    getHotel = function (hotelId) {
        var selectedHotel;
        hotels.forEach(function (hotel) {
            if (hotel.id === hotelId)
                selectedHotel = hotel;
        })
        return selectedHotel;
    }

    getMenu = function (hotelId) {
        var hotel = getHotel(hotelId);
        if (hotel == null) {
            return null
        } else {
            return hotel.menu
        }
    }

    return {
        getMenu: function (hotelId) {
            return getMenu(hotelId)
        }
    }
})();


var uiController = (function () {

})()


var appController = (function (hController) {


})(hotelController)
