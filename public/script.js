$(document).ready(function(){
  console.log('Jquery :'+jQuery.fn.jquery);
  $(document)
    .on('click', '[data-show]', function(e){
      e.preventDefault()
      var tag = $('#'+$(this).data('show'));
      tag.addClass('opened');
      e.stopPropagation()
    })
    .on('click', '[data-hide]', function(e){
      e.preventDefault()
      var tag = $('#'+$(this).data('hide'))
      tag.removeClass('opened')
      e.stopPropagation()
    })

})
