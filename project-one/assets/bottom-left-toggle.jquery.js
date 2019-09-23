$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#left-arrow-bottom').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#left-text-bottom").toggleClass("visible");
        });
});
