//Dark mode css change warning
if (navigator.userAgent.match(/samsung/i)) {
    alert("You are using a defective browser (Samsung Internet) that " +
        "might not be configured to display this website properly. " +
        "You should consider using a proper standards-compliant " +
        "browser instead. \n\n" +
        "We recommend using Google Chrome, Firefox or Microsoft Edge.");
}

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    alert("Please disable dark mode to view the website in it's original theme")
  }
})


function goToCareer() {
    window.location.href = 'careers.html';
}
function removeCareer() {
    if (window.innerWidth > 800) {
        $('.nav_about_dropdown_career').hide();
        $('.nav_about_dropdown').removeClass('nav_about_dropdown_visible');
    }
}
function showAboutDropdown() {
    document.getElementById("nav_about_dropdown").style.visibility = "visible";
}
const $dropdown = $('.nav_about_dropdown');
$(document).mouseup(e => {
    if (!$dropdown.is(e.target) // if the target of the click isn't the container...
        && $dropdown.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $dropdown.removeClass('nav_about_dropdown_visible');
        $dropdown.removeClass('nav_about_dropdown_mobile');
    }
});

$('.nav_about').on('click', () => {
    $dropdown.toggleClass('nav_about_dropdown_visible');
});
$('.nav_button').on('click', () => {
    $dropdown.toggleClass('nav_about_dropdown_mobile');
    $('.nav_about_dropdown_career').show();
});

// Get started popup
const $cross1 = $('.get_started_cross_one');
const $cross2 = $('.get_started_cross_two');
$(document).mouseover(e => {
    if ((!$cross1.is(e.target) // if the target of the click isn't the container...
        && $cross1.has(e.target).length === 0)
        && (!$cross2.is(e.target)
            && $cross2.has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $cross1.removeClass('get_started_cross_one_hover');
        $cross2.removeClass('get_started_cross_two_hover');
    }
})
$('.nav_link_get_started').on('click', () => {
    $('.get_started_background').show();
    $('.get_started_cross_one').show();
    $('.get_started_cross_two').show();
    $('.get_started_cross_one_hover').show();
    $('.get_started_cross_two_hover').show();
    $('.get_started_title').show();
    $('.get_started_investor_button').show();
    $('.get_started_entrepreneur_button').show();
});
$('.main_get_started').on('click', () => {
    $('.get_started_background').show();
    $('.get_started_cross_one').show();
    $('.get_started_cross_two').show();
    $('.get_started_cross_one_hover').show();
    $('.get_started_cross_two_hover').show();
    $('.get_started_title').show();
    $('.get_started_investor_button').show();
    $('.get_started_entrepreneur_button').show();
});
$('.get_started_cross_one').on('mouseover', () => {
    $('.get_started_cross_two').addClass('get_started_cross_two_hover');
    $('.get_started_cross_one').addClass('get_started_cross_one_hover');
});
$('.get_started_cross_two').on('mouseover', () => {
    $('.get_started_cross_two').addClass('get_started_cross_two_hover');
    $('.get_started_cross_one').addClass('get_started_cross_one_hover');
});
$('.get_started_cross_one').on('click', () => {
    $('.get_started_background').hide();
    $('.get_started_cross_one').hide();
    $('.get_started_cross_two').hide();
    $('.get_started_cross_one_hover').hide();
    $('.get_started_cross_two_hover').hide();
    $('.get_started_title').hide();
    $('.get_started_investor_button').hide();
    $('.get_started_entrepreneur_button').hide();
});
$('.get_started_cross_two').on('click', () => {
    $('.get_started_background').hide();
    $('.get_started_cross_one').hide();
    $('.get_started_cross_two').hide();
    $('.get_started_cross_one_hover').hide();
    $('.get_started_cross_two_hover').hide();
    $('.get_started_title').hide();
    $('.get_started_investor_button').hide();
    $('.get_started_entrepreneur_button').hide();
});

$(document).on('keydown', function (event) {
    if (event.key == "Escape") {
        $('.get_started_background').hide();
        $('.get_started_cross_one').hide();
        $('.get_started_cross_two').hide();
        $('.get_started_cross_one_hover').hide();
        $('.get_started_cross_two_hover').hide();
        $('.get_started_title').hide();
        $('.get_started_investor_button').hide();
        $('.get_started_entrepreneur_button').hide();
    }
});


function goToAboutSection() {
    if (window.innerWidth > 800) {
        window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth"
        })
        $dropdown.removeClass('nav_about_dropdown_visible');
    }
    else {
        window.scroll({
            top: window.innerHeight * 0.74,
            left: 0,
            behavior: "smooth"
        })
    }
}
function goToMissionSection() {
    if (window.innerWidth > 800) {
        window.scroll({
            top: window.innerHeight * 1.5,
            left: 0,
            behavior: "smooth"
        })
        $dropdown.removeClass('nav_about_dropdown_visible');
    }
    else {
        window.scroll({
            top: window.innerHeight * 1.1,
            left: 0,
            behavior: "smooth"
        })
    }
}
function goToValueSection() {
    if (window.innerWidth > 800) {
        window.scroll({
            top: window.innerHeight * 1.9,
            left: 0,
            behavior: "smooth"
        });
        $dropdown.removeClass('nav_about_dropdown_visible');
    }
    else {
        window.scroll({
            top: window.innerHeight * 1.6,
            left: 0,
            behavior: "smooth"
        });
    }
}
function goToServicesSection() {
    if (window.innerWidth > 932) {
        window.scroll({
            top: window.innerHeight * 2.28,
            left: 0,
            behavior: "smooth"
        });
    }
    else if (window.innerWidth > 800) {
        window.scroll({
            top: window.innerHeight * 2.7,
            left: 0,
            behavior: "smooth"
        });
    }
    else if (window.innerWidth > 700) {
        window.scroll({
            top: window.innerHeight * 2.55,
            left: 0,
            behavior: "smooth"
        });
    }
    else if (window.innerWidth > 500) {
        window.scroll({
            top: window.innerHeight * 2.7,
            left: 0,
            behavior: "smooth"
        });
    }
    else {
        window.scroll({
            top: window.innerHeight * 2.9,
            left: 0,
            behavior: "smooth"
        });
    }
    $dropdown.removeClass('nav_about_dropdown_visible');
}
function goToApproachSection() {
    if (window.innerWidth > 932) {
        window.scroll({
            top: window.innerHeight * 3,
            left: 0,
            behavior: "smooth"
        });
    }
    else if (window.innerWidth > 800) {
        window.scroll({
            top: window.innerHeight * 3.9,
            left: 0,
            behavior: "smooth"
        });
    }
    else {
        window.scroll({
            top: window.innerHeight * 3.6,
            left: 0,
            behavior: "smooth"
        });
    }

}
function goToContactSection() {
    if (window.innerWidth > 932) {
        window.scroll({
            top: window.innerHeight * 4.95,
            left: 0,
            behavior: "smooth"
        });
    }
    else {
        window.scroll({
            top: window.innerHeight * 5.9,
            left: 0,
            behavior: "smooth"
        });
    }
}