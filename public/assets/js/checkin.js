$(document).ready(function() {
    $('#checkInBtn').on('click',function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log("position from checkin.js")
            // console.log(pos)
            $.post('/get-places', pos, function(data) {
                // console.log(data);
                // var newselect = $('<select>').attr('id','checkinSelect')
                // $('#checkinDiv').append(newselect);
                for(var i = 0; i < data.length; i++) {
                    var newoption = $('<option>');
                    newoption.attr('value', data[i].name)
                    newoption.html(data[i].name);
                    $('#checkinSelect').append(newoption)
                }
                $('select').material_select();
            })
        });
    })
})