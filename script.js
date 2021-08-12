$(document).ready(function() {

$('form').on('submit',function(event){
    let $input = $(event.target).find('input');
    let comment = $input.val();
    if(comment != ''){
        let html = $('<li>').text(comment);
        html.prependTo('#comments');
        $input.val('');
    }
    return false;
})      

})