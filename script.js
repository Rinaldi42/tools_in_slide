setInterval(function (){
	let data = new Date();
	document.getElementById('clock').innerHTML = data.getHours() + ':' + data.getMinutes() +  ':' + data.getSeconds();
}, 100);

let startBlock = true;

function startStopwatch() {
	let time = document.getElementById('stopwatch').innerHTML;
	let hour = parseInt(time.split(":")[0]);
	let minute = parseInt(time.split(":")[1]);
	let second = parseInt(time.split(":")[2]); 
	let zero = ['0',''];
	let i = 1;
	if (startBlock) {
		startBlock = false;
		interval = setInterval(function() {
			second +=1;
			if (second === 60) {
				second = 0;
				minute +=1;
			}
			if (minute === 60) {
				minute = 0;
				hour +=1;
			}
			if (second < 10) {
				seconds = "0" + second;
			}else {
				seconds = second;
			}
			if (minute < 10) {
				minutes = "0" + minute;
			}else {
				minutess = minute;
			}
			if (hour < 10) {
				hours = "0" + hour;
			}else {
				hours = hour;
			}
			document.getElementById('stopwatch').innerHTML = hours+ ':' + minutes + ':' + seconds;
		}, 1000);
	}
}

function stop() {
	clearInterval(interval);
	startBlock = true;
}

function reset() {
	clearInterval(interval);
	startBlock = true
	document.getElementById('stopwatch').innerHTML = '00:00:00';

}