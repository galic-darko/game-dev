var game = new Game("Test game");
game.start(
	function progress(percent_completed, info) {
		console.log("Progressing ...");
		document.getElementById('progress-info').innerHTML = info;

}, function started() {
	// body...
	var info = document.getElementById('progress-info');
	info.innerHTML = "Started";
	info.style.color = "green";
}, function failure(error) {
	// body...
	var info = document.getElementById('progress-info');
	info.innerHTML = "Error: " + error;
	info.style.color = "red";
});
