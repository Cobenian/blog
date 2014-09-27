function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

$(document).ready(function () {
    var rc = GetURLParameter('rc');
    if (rc !== undefined) {
        if (rc === 'thankyou') {
            $('.thankyou').show();
        } else if (rc == 'sorry') {
            $('.sorry').show();
        }
    }

    $('form').submit(function(e) {
       var email = $('[name="email"]').val();
       if ( email.indexOf('@') < 1 ) {
           alert("You must provide a valid email address.");
           return false;
       }
       return true;
    });
});