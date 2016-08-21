function Game(game_title){
	var title = title;

	this.start = function start(progress_callback, success_callback, failure_callback) {
		
		progress_callback(10, "Loading assets ...");
		progress_callback(20, "Creating objects ...")


		success_callback();
	}

}