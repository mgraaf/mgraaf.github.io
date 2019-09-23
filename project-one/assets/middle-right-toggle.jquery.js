$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#right-arrow-middle').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#right-text-middle").toggleClass("visible");
        });
});
