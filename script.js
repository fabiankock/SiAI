$('.menu .item')
  .tab()
;

$('.ui.sticky')
  .sticky({
    context: '#main_container'
  })
;

$('.firmenlogo').bind('mouseover', function(event) {
  $('.review_text').hide();
  $('.'+event.currentTarget.id).show();
})