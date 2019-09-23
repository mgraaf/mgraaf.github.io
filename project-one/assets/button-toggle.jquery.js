$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#left-arrow-top, #left-arrow-bottom, #right-arrow-top, #right-arrow-middle, #right-arrow-bottom").toggleClass("visible");
        });
});
