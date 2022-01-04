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

function winner() {
	const competitors = document.getElementById('competitors').value;
	const winner = Math.floor(Math.random() * (competitors - 1) + 1);
	document.getElementById('winner').innerHTML = winner;
}
  
function password() {
	const down = "abcdefghijklmnopqrstuvwxyz";
	const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const esp = "!@()+-={}~"
	let password = "";
	let length = 26
	for (var i = 0; i <= 10; i++) {
		num = Math.floor(Math.random() * ( length - 1) + 1);
		if (i <= 3) {
			password += down[num];
		}
		if (i > 4 & i <= 6) {
			password += up[num];
		}
		if (i > 6 & i <=9) {
			length = 10;
			if (i > 7) {
				password += esp[num];	
			}
		}
		if (i > 8 & i <=10) {
			password += num;
		}

	}
	document.getElementById('password').value = password;
}

function copy() {
	navigator.clipboard.writeText(document.getElementById('password').value);
}