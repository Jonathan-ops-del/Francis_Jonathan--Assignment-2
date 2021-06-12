 /* To add input to List*/
function addLists() {
    if($("#todoInput").val() ===""){
     alert('Please Enter Your Input!');
}   
    else{
      let text = $("#todoInput").val()
      $("#todoList").append('<li>'+text+'<span class="delete">X</span></li>')
      $("#todoInput").val("");
    }
}



/* To submit input to List*/
$("form").on("submit", function(){
    addLists()
    return false;
})



/* To check off items on List*/
$("#todoList").on('click','li',function() {
    $(this).toggleClass( "checked" );
});




/* To remove items on List*/
$('#todoList').on('click', '.delete', function() {
    $(this).parent().remove();
});




/*To Sort items on List*/
$( function() {
    $("#todoList").sortable();
    $("#todoList").disableSelection();
  } );