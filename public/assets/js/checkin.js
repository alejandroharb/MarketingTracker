$(document).ready(function() {
    $('#checkInBtn').on('click',function() {
        //-----initiate preloader-----
        $('#checkInPreloader').addClass('progress');
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            $.post('/get-places', pos, function(data) {
                //-----adding options of businesses to select element-----
                for(var i = 0; i < data.length; i++) {
                    var newoption = $('<option>');
                    newoption.attr('value', data[i].name)
                    newoption.html(data[i].name);
                    $('#checkinSelect').append(newoption);
                }
                $('#checkInPreloader').removeClass('progress');
                //reseting select element to display new dynamically created options
                $('select').material_select();
                //--------------------------
                //add new submit button
                //add
            })
        });
    })
    $('#checkInSubmit').on('click', function() {
        //-----collect form elements here---
        //
        //--ajax post to send data to back-end here
        //
        //--------------------
        //closes the collapsible feature
        $('#checkInBtn').removeClass('active');
        $('.collapsible').collapsible();
        //emptying the dynamic select element, and reinitializing it
        $('#checkinSelect').empty();
        $('select').material_select();
        console.log("ran close function")
    })
})