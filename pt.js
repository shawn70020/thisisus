$(document).ready(function() {

    $('container').on('click', '.anchor', function(event) {
        event.preventDefault();
        $(html, body).animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    })























});