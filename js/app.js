$(document).ready(function() {

    $("#itemName").click(function() {	
		  $('#itemName').val("");
    });

    $('#searchContainer').on('click','input[name="add"]', function() {
      addItem();
    });

    $('#searchContainer').on('keydown','#itemName', function(event) {
      if( event.which == 13) {
        addItem();
      }
    });

    $('#center').on('click','.delete',function() {
        $(this).closest("li").remove();
      });

    $('#center').on('click', '.complete', function() {
        $(this).closest("li").css("text-decoration", "line-through");
    });

    function addItem(){
        $('ul').append('<li>'+$('#itemName').val()+'<button class="delete">Delete</button><button class="complete">Complete</button></li>');
        $('#itemName').val("");
      }


});

