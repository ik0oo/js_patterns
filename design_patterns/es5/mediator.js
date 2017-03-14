/**
 * Created by dkw on 13/03/2017.
 *
 * Медиатор выступает в качестве посредника в общении между различными модулями,
 * инкапсулируя их взаимодействие.
 * Кроме того, этот шаблон проектирования,
 * предотвращая прямое взаимодействие различных компонентов системы,
 * способствует ослаблению связей в коде.
 *
 * https://habrahabr.ru/post/132472/
 */

var Daddy = (function () {
    'use strict';

    function Daddy () {

    }

    Daddy.prototype = {
        constructor: Daddy,
        getBeer: function () {
            if (!kitchen.tryToGetBeer()) {
                console.log("Daddy: Who the hell drank all my beer?");
                return false;
            }

            console.log("Daddy: Yeeah! My beeer!");
            kitchen.oneBeerHasGone();
            return true;
        },
        argueBack: function () {
            console.log("Daddy: it's my last beer, for sure!");
        }
    };

    return Daddy;
})();

var Mammy = (function () {
    'use strict';

    function Mammy () {

    }

    Mammy.prototype = {
        constructor: Mammy,
        argue: function () {
            console.log("Mammy: You are f*king alconaut!");
            kitchen.disputeStarted();
        }
    };

    return Mammy;
})();

var BeerStorage = (function () {
    'use strict';

    function BeerStorage (beerBottleCount) {
        this.beerBottleCount = beerBottleCount;
    }

    BeerStorage.prototype = {
        constructor: BeerStorage,
        takeOneBeerAway: function () {
            if (this.beerBottleCount === 0) return false;

            this.beerBottleCount--;
            return true;
        }
    };

    return BeerStorage;
})();

/***
 * mediator
 * */

var kitchen = {
    daddy: new Daddy,
    mammy: new Mammy,
    refrigerator: new BeerStorage(3),
    stash: new BeerStorage(2),

    tryToGetBeer: function () {
        if (this.refrigerator.takeOneBeerAway()) return true;
        if (this.stash.takeOneBeerAway()) return true;

        return false;
    },
    oneBeerHasGone: function () {
        this.mammy.argue();
    },
    disputeStarted: function () {
        this.daddy.argueBack();
    }
};

//test
var roundCounter = 0;
while (kitchen.daddy.getBeer()) {
    roundCounter++;
    console.log(roundCounter + ' round passed');
}
