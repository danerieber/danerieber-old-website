// fullPage.JS init
new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Projects', 'Tools'],
    scrollBar: true
});

// Typed.js init
new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 20
});

// WOW.js init
new WOW().init();