//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.


    function () {

        $('#show').click(function(event){
            event.preventDefault();

            $.ajax('http://api.tvmaze.com/singlesearch/shows?q=the+magicians&embed=episodes', {
                method: "GET",
                dataType: "json"
            }).done(
                function (data) {

                    //Add the name
                    $(show).append(data.name);


                    //Add the episodes
                    data._embedded.episodes.forEach(function (episode) {
                        $('#episodeList').append('<tr>' +
                            '<td>' + episode.season + '</td>' +
                            '<td>' + episode.number + '</td>' +
                            '<td>' + episode.name + '</td>' +
                            '<td>' + episode.summary + '</td>' +
                            +' </tr>')
                    })
                })

        })


                }
)
