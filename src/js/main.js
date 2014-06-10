(function() {
    requirejs.config({
        // shim: {
        //     "Modernizr": {
        //         deps: ["jquery"],
        //         exports: "Modernizr"
        //     }
        // },
        paths: {
            jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min', "lib/jquery.min"]
        }
    });
    require(["jquery"], function($) {
        // foo
    });
}).call(this);
