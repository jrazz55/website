/**
 * The main class loader for the website.
 *
 * @author bshai date 9/27/15.
 */

// Set up require js
requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-2.1.4.min',
        underscore: 'lib/underscore',
        text: 'lib/text'
    }
});

// Load up the menu
require([
    './menu'
], function(
    menu
) {

});