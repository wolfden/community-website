$(document).ready(function() {
    parsePackages = function(data) {

        $('#searchpkg .typeahead').typeahead({
            order: "asc",
            dynamic: !0,
            delay: 500,
            source: {
                packages: {
                    display: "package",
                    data: data,
                    template: '<span>{{package}} <span class="arch">~{{arch}}</span></span> <span style="color:green;" class="kk-suggest-detail"> {{repository}}</span>'
                }
            },
            callback: {
                onClick: function(a, s, e) {
                    var modal = $('#addRepository');
                    modal.find('.package').text(e.package)
                    modal.find('.repository').text(e.repository)
                    modal.find('.packagearch').text(e.arch)

                    modal.modal();


                }
            }
        });

    };
    $.ajax({
        url: "http://mirror.de.sabayon.org/community/metadata.json",
        dataType: "jsonp",
    });



});