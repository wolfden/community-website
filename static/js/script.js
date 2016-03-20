$(document).ready(function() {
  $("a[href^='http://']").each(
    function(){
     if(this.href.indexOf(location.hostname) == -1) {
        $(this).attr('target', '_blank');
      }
    }
  );
$("a[href^='https://']").each(
function(){
if(this.href.indexOf(location.hostname) == -1) {
$(this).attr('target', '_blank');
}
}
);

});

$(document).ready(function() {







   parsePackages = function(data){



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
                  var modal=  $('#addRepository');
                  modal.find('.package').text(e.package)
                  modal.find('.repository').text(e.repository)
                  modal.find('.packagearch').text(e.arch)

                  modal.modal();


                }
            }
          }
          );



  };



$.ajax( {url: "http://mirror.de.sabayon.org/community/metadata.json",
  dataType: "jsonp",
}
);



});

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.row');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background', '#000',"!important");
          $(".navbar-default").css('-webkit-box-shadow','0 8px 6px -6px #999');
          $(".navbar-default").css('-moz-box-shadow','0 8px 6px -6px #999');
          $(".navbar-default").css('box-shadow','0 8px 6px -6px #999');
       } else {
          $('.navbar-default').css('background', 'transparent');
          $(".navbar-default").css('-webkit-box-shadow','none');
          $(".navbar-default").css('-moz-box-shadow','none');
          $(".navbar-default").css('box-shadow','none');
       }
   });
    }
});
