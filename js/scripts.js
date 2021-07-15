$(document).ready(function () {

    // upload profile image
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.changeImg img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function(){
        readURL(this);
    });


    // get map location
    $(".getLoc").click(function () {
        let value = $("#searchTextField").val();
        $("#ServLocation").val(value);
    });

    // upload documentation photo text

    $('.uploadFile').change(function() {
        var file = $(this)[0].files[0].name;
        $(this).prev('.docPhoto').attr('placeholder',file);
    });


});
