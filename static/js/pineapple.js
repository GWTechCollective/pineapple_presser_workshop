// State
var game;
var items = {
    "pointer": {
        "price": 1,
        "clickValue":1 ,
    },
    "hand": {
        "price": 2,
        "clickValue":2 ,
    },
    "dry-fruits": {
        "price": 3,
        "clickValue":3 ,
    },
    "trop-drinks": {
        "price": 3,
        "clickValue":4 ,
    },
    "machete": {
        "price": 4,
        "clickValue":5 ,
    },
    "pizzeria": {
        "price": 5,
        "clickValue":6 ,
    },
}

// Main App Logic
// Acts as container
$(function(){
    function initializeGame() {
        game = {
            clickAmount: 0,
            currency: 0,
            spent: 0,
            items: {},
        }
    }

    function addClickAmount(game) {
        if (!game) {
            return false;
        }
        game.clickAmount++;
        game.currency++;
        return true;
    }

    function addCurrencyAmount(game, price) {
        if (!game) {
            return false;
        }
        if(game.currency < price) {
            return false
        }

        game.currency = game.currency - price;
        return true;
    }

    $(document).ready(function() {
        initializeGame();
        Object.keys(items).forEach(function(key) {
            // console.log(key, items[key]);
            $(".storefront")
            .append($("<li id=" + key +"></li>")
            .append("<span id='" + key + "-span' class='store-item'>" + ' '+"</span> ")
            .append("<span class='cost'>" + '$' +items[key].price + "</span>")
            .append("<button id='"+key+ "-button'>BUY ME</button>"));
            $(".itemfront")
            .append($("<li id=" + key +"-item-front></li>")
            .append("<span id='" + key + "-current-items' class='current-items'>" + ' '+ "</span> "))
        });

        $("#pointer-button").on("click", function() {
            var id = $(this).parent().attr('id');
            var price = items[id].price;
            addCurrencyAmount(game, price);
            $('#currency').html(game.currency);
        })

        $("#hand-button").on("click", function() {
            var id = $(this).parent().attr('id');
            var price = items[id].price;
            addCurrencyAmount(game, price);
            $('#currency').html(game.currency);
        })

        $("#dry-fruits-button").on("click", function() {
            var id = $(this).parent().attr('id');
            var price = items[id].price;
            addCurrencyAmount(game, price);
            $('#currency').html(game.currency);
        })

        $("#trop-drinks-button").on("click", function() {
            var id = $(this).parent().attr('id');
            var price = items[id].price;
            addCurrencyAmount(game, price);
            $('#currency').html(game.currency);
        })

        $("#machete-button").on("click", function() {
            var id = $(this).parent().attr('id');
            var price = items[id].price;
            addCurrencyAmount(game, price);
            $('#currency').html(game.currency);
        })

        $("#pizzeria-button").on("click", function() {
            var id = $(this).parent().attr('id');
            var price = items[id].price;
            addCurrencyAmount(game, price);
            $('#currency').html(game.currency);
        })
    });

    $('#pineapple').click(function(){
        addClickAmount(game);
        $('#counter').html(game.clickAmount);
        $('#currency').html(game.currency);
        if($('#pineapple-img').attr("class") === 'click-activated') {
            $('#pineapple-img').removeClass('click-activated');
        } else {
            $('#pineapple-img').addClass('click-activated');
        }
    });
});
