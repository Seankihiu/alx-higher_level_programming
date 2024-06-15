$(document).ready(function() {
    $.ajax({
        url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
        method: 'GET',
        success: function(response) {
            $.each(response.results, function(index, movie) {
                $('UL#list_movies').append('<li>' + movie.title + '</li>');
            });
        },
        error: function() {
            $('UL#list_movies').append('<li>Error fetching movies.</li>');
        }
    });
});
