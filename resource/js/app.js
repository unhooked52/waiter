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

    var DOMStrings = {
        getMenuBtn: 'get_menu_btn',
        hotelIdTextBox: 'hotel_id',
        checkInSection: 'checkin_selection',
        menuSection: 'menu_section',
    }

    var displayMenu = function (menu) {
        if (menu !== null) {

            var html;
            html = '<ol>'
            menu.forEach(function (menuItem) {
                html += '<li> Name : ' + menuItem.name + ' Description : ' + menuItem.desc + ' Price : ' + menuItem.price + '</li>'
            });
            html += '</ol>'
            document.getElementById(DOMStrings.menuSection).insertAdjacentHTML('afterbegin', html);
        } else {
            //Menu not found
        }
    }

    return {
        DOMStrings: DOMStrings,
        readHotelId: function () {
            return document.getElementById(DOMStrings.hotelIdTextBox).value;
        },
        hideCheckInSection: function () {
            document.getElementById(DOMStrings.checkInSection).hidden = true;
        },
        renderMenu: function (menu) {
            displayMenu(menu);
        }
    }
})()


var appController = (function (hController) {

    var menu;

    var initalizeApplication = function () {
        console.log("Application Initalized");

        addEventHandlers();
    }

    var addEventHandlers = function () {
        var DOMStrings = uiController.DOMStrings;
        document.getElementById(DOMStrings.getMenuBtn).addEventListener('click', getMenuClicked);
    }

    //get Menu card
    var getMenuClicked = function () {
        // Read input from UI
        var hotelId = parseFloat(uiController.readHotelId());
        if (!isNaN(hotelId)) {
            // Get menu object from Hotel controller
            menu = hotelController.getMenu(hotelId);
            console.log(menu);
            // Hide Check in section
            uiController.hideCheckInSection();
            // Show check out section
            // Render on UI
            uiController.renderMenu(menu);
        }
    }

    return {
        init: function () {
            initalizeApplication();
        }
    }
})(hotelController)

appController.init();
