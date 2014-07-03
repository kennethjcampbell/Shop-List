	

$(document).ready(function() {

    $("#itemName").click(function() {	
		$('#itemName').val("");
    });

    $('#searchContainer').on('click','input[name="add"]', function() {
      $('ul').append('<li>'+$('#itemName').val()+'<button class="delete">Delete</button><button class="complete">Complete</button></li>');
      $('#itemName').val("");
      $('.delete').click(function() {
      	$(this).closest("li").remove();
      });
      $('.complete').click(function() {
      	$(this).closest("li").css("text-decoration", "line-through");
      });
  });
});

