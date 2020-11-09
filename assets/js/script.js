//GLOBAL VARIABLES
var cTime = moment();
var eCounter = 1;

//----COLOR CODE THE TIME OF DAY (PAST, PRESENT, FUTURE)----//
for (i = 8; i < 18; i++) {
	var tEntry = '#text-entry' + eCounter;
	var hour = cTime.hour();
	if (i < hour) {
		$(tEntry).addClass('past');
	} else if (i > hour) {
		$(tEntry).addClass('future');
	} else {
		$(tEntry).addClass('present');
	}
	eCounter++;
}

//----GET LOCAL STORAGE----//
var checkHistory = function () {
	$('#text-1').val(localStorage.getItem('text-1'));
	$('#text-2').val(localStorage.getItem('text-2'));
	$('#text-3').val(localStorage.getItem('text-3'));
	$('#text-4').val(localStorage.getItem('text-4'));
	$('#text-5').val(localStorage.getItem('text-5'));
	$('#text-6').val(localStorage.getItem('text-6'));
	$('#text-7').val(localStorage.getItem('text-7'));
	$('#text-8').val(localStorage.getItem('text-8'));
	$('#text-9').val(localStorage.getItem('text-9'));
    $('#text-10').val(localStorage.getItem('text-10'));
    $('#text-11').val(localStorage.getItem('text-11'));
};
checkHistory();

//---SAVE THE TEXT ENTRY TO LOCAL STORAGE----//
$('button').click(function () {
	tArea = $(this).siblings('textarea').val();
	wDay = $(this).siblings('textarea').attr('id');

	localStorage.setItem(wDay, tArea);
});

//----LOAD THE PAGE----//
var onLoad = function (list) {
	//grab the current time
	$('#currentDay').text(
		cTime.format('dddd') + ', ' + cTime.format('MMM Do YYYY')
	);
};
onLoad();