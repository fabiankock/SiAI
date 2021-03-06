$('.menu .item')
  .tab()
;

$('#zf').css('border-bottom', '2px solid blue');

$('.ui.sticky')
  .sticky({
    context: '#main_container'
  })
;

let timeouts = [];
let isHover = false;

$('#switch_comment_left').on('click', function(event){
  currentIndex--;
  if(currentIndex < 0) {
    currentIndex = 5;
  }
  timeouts.forEach(timeout=>{
    clearTimeout(timeout);
  })
  $('.firmenlogo').each(function(index, div) {
    if (index === currentIndex) {
      $('.'+div.id).show();
      $(div).css('border-bottom', '2px solid blue');
    }
    else {
      $('.'+div.id).hide();
      $(div).css('border-bottom', '0px solid blue');
    }
  })
  isHover = true;
})

$('#switch_comment_right').on('click', function(event){
  currentIndex++;
  if(currentIndex > 5) {
    currentIndex = 0;
  }
  timeouts.forEach(timeout=>{
    clearTimeout(timeout);
  })
  $('.firmenlogo').each(function(index, div) {
    if (index === currentIndex) {
      $('.'+div.id).show();
      $(div).css('border-bottom', '2px solid blue');
    }
    else {
      $('.'+div.id).hide();
      $(div).css('border-bottom', '0px solid blue');
    }
  })
  isHover = true;
})


$('.firmenlogo').bind('mouseover', function(event) {
  isHover = true;
  timeouts.forEach(timeout=>{
    clearTimeout(timeout);
  })
  timeouts = [];
  $('.review_text').hide();
  $('.firmenlogo').css('border-bottom', '0px solid blue');
  $('#'+event.currentTarget.id).css('border-bottom', '2px solid blue');
  $('.'+event.currentTarget.id).show();
  switch(event.currentTarget.id) {
    case "zf": currentIndex = 0; break;
    case "mtu": currentIndex = 1; break;
    case "zeppelin": currentIndex = 2; break;
    case "hbo": currentIndex = 3; break;
    case "liebherr": currentIndex = 4; break;
    case "sap": currentIndex = 5; break;
  }
})

$('#customers').bind('mouseleave', function(event) {
  isHover = false;
  timeouts.push(setTimeout(displayNextLogo, 5000));
})

$(document).ready(function() {
  $(".test_btn").click(function(){
      alert("Test Button");
  });
  
  $('.contact_btn').click(function(){
      alert("Contact Button");
  });
});

let currentIndex = 0;

displayNextLogo();

function displayNextLogo() {
  if (isHover) return;
  $('.firmenlogo').each(function(index, div) {
    if (index === currentIndex) {
      $('.'+div.id).show();
      $(div).css('border-bottom', '2px solid blue');
    }
    else {
      $('.'+div.id).hide();
      $(div).css('border-bottom', '0px solid blue');
    }
  })
  currentIndex++;
  if (currentIndex > 5) {currentIndex=0;}
  timeouts.push(setTimeout(function(){
    displayNextLogo();
  },10000));
}