var darkTheme = false;
var canChangeTheme = true;

function initStorageValue() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem('theme') !== null) {
            if (JSON.parse(localStorage.getItem('theme'))) {
                localStorage.setItem('theme', false);
                toggleTheme();
            }
        } else {
            localStorage.setItem('theme', darkTheme);
        }
    } else {
        canChangeTheme = false;
    }
}

$(initStorageValue());

function toggleThemeValue() {
    darkTheme = !darkTheme;
    localStorage.setItem('theme', darkTheme);
}

function toggleTheme() {
    if (canChangeTheme) {
        if (!darkTheme) {
            $('head').append('<link id="music-dark" rel="stylesheet" href="../css/music-dark.css">');
            $('.d-logo').attr('src', '../svg/d-logo-white.svg');
            $('.btn-outline-dark').addClass('btn-outline-light');
            $('.btn-outline-dark').removeClass('btn-outline-dark');
        } else {
            $('#music-dark').remove();
            $('.d-logo').attr('src', '../svg/d-logo.svg');
            $('.btn-outline-light').addClass('btn-outline-dark');
            $('.btn-outline-light').removeClass('btn-outline-light');
        }
        toggleThemeValue();
    }
}