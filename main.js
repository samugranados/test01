
$( document ).ready(function() {
	$('#hito1').waypoint(function() {
	    $('#pic1').fadeTo( "slow" , 1);
	});

	$('#hito2').waypoint(function() {
		$('#pic1').fadeTo( "slow" , 0);
	    $('#pic2').fadeTo( "slow" , 1);
	});
});