// variables //
var currentTime = moment();
var eCounter = 1;

// load page //
var onLoad = function (list) {
	// show current time with Moment
	$('#currentDay').text(
		currentTime.format('dddd') + ', ' + currentTime.format('MMM Do YYYY')
	);
};
onLoad();

// save text entry to LS //
$('button').click(function () {
	textArea = $(this).siblings('textarea').val();
	workDay = $(this).siblings('textarea').attr('id');

	localStorage.setItem(workDay, textArea);
});

// color code the days //
for (i = 8; i < 18; i++) {
	var textInput = '#text' + eCounter;
	var hour = currentTime.hour();
	if (i < hour) {
		$(textInput).addClass('past');
	} else if (i > hour) {
		$(textInput).addClass('future');
	} else {
		$(textInput).addClass('present');
	}
    eCounter++;
}

// retrieve local storage //
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