/**
 * This makes the menu correctly click to all the right pages.
 *
 * @author bshai date 9/27/15.
 */

require([
    'jquery',
    'text!../pages/about.html',
    'text!../pages/home.html',
    'text!../pages/portfolio.html',
    'text!../pages/contact.html'
], function (
    $,
    aboutTemplate,
    homeTemplate,
    portfolioTemplate,
    contactTemplate
) {
    var pages = {
        about: aboutTemplate,
        home: homeTemplate,
        portfolio: portfolioTemplate,
        contact: contactTemplate
    };

    var loadPageContent = function(contentName) {
        document.location.hash = contentName;
        var template = pages[contentName];
        $('#content').html(template);
    };

    // if someone tries to load the page directly, via url, make sure it loads
    if (document.location.hash) {
        loadPageContent(document.location.hash.substr(1));
    } else {
        // otherwise load the home page
        loadPageContent("home");
    }

    $('#menu li').click(function(evt) {
        var contentName = $(evt.target).data("content");
        if (document.location.hash.substr(1) == contentName) return;
        loadPageContent(contentName);
    });

});