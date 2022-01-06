setInterval(function (){
	let data = new Date();
	document.getElementById('clock').innerHTML = data.getHours() + ':' + data.getMinutes() +  ':' + data.getSeconds();
}, 100);

function writeTime (id, hour, minute, second) {
	document.getElementById(id).innerHTML = hour + ':' + minute + ':' + second;
}

let btnStopwatch = true;
let btnHourglass = true;

let timeStopwatch = 1;
let timeHourglass = 1;

function stopwatch() {
	let hour = ["0", Math.floor(timeStopwatch/3600)];
	let minute = ["0", Math.floor(timeStopwatch/60)];
	let second = ["0", timeStopwatch - minute[1]*60 - hour[1]*3600]; 
	if (btnStopwatch) {
		btnStopwatch = false;
		intervalStopwatch = setInterval(function() {
			hour[1] = Math.floor(timeStopwatch/3600) ;
			minute[1] = Math.floor(timeStopwatch/60) - hour[1]*60 ;

			hour = hour >= 10 ? ["", hour[1]] : ["0", hour[1]];
			minute = minute >= 10 ? ["", minute[1]] : ["0", minute[1]];

			if (timeStopwatch%60 != 0) {
				second[1] = timeStopwatch - minute[1]*60 - hour[1]*3600;
			}else {
				second[1] = 0;
			}
			second = second[1] >= 10 ? ["", second[1]] : ["0", second[1]];
			writeTime('stopwatch', hour[0]+ hour[1], minute[0] + minute[1], second[0] + second[1]);
			timeStopwatch += 1;
		}, 1000);
	}
}

function hourglass() {
	let hour = ["0", parseInt(document.getElementById('hour').value)];
	let minute = ["0", parseInt(document.getElementById('minute').value)];
	let second = ["0", parseInt(document.getElementById('second').value)]; 
	let time = hour[1]*3600 + minute[1]*60 + second[1];
	if (btnHourglass & hour[1] + minute[1] + second[1] != 0) {
		btnHourglass = false;
		intervalHourglass = setInterval(function() {
			timeleft = time - timeHourglass;
			hour[1] = Math.floor(timeleft/3600);
			minute[1] = Math.floor(timeleft/60) - hour[1]*60;
			second[1] = timeleft - minute[1]*60 - hour[1]*3600;

			hour = hour[1] >= 10 ? ["", hour[1]] : ["0", hour[1]];
			minute = minute[1] >= 10 ? ["", minute[1]] : ["0", minute[1]];
			second = second[1] >= 10 ? ["", second[1]] : ["0", second[1]];
			writeTime('hourglass', hour[0]+ hour[1], minute[0] + minute[1], second[0] + second[1]);
			timeHourglass += 1;
			if (timeleft === 0) {
				resetHourglass();
			}
		}, 1000);
	}
}

function stopStopwatch() {
	clearInterval(intervalStopwatch);
	btnStopwatch = true;
}

function resetStopwatch() {
	timeStopwatch = 1;
	clearInterval(intervalStopwatch);
	btnStopwatch = true
}

function resetHourglass() {
	timeHourglass = 1;
	clearInterval(intervalHourglass);
	btnHourglass = true
	writeTime('hourglass',"00","00","00");

}

function winner() {
	const competitors = document.getElementById('competitors').value;
	const winner = Math.floor(Math.random() * (competitors - 1) + 1);
	document.getElementById('winner').innerHTML = winner;
}
  
function password() {
	const down = "abcdefghijklmnopqrstuvwxyz";
	const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const esp = "!'#$%&()*+,-./:;<=>?@[]^_{}";
	let password = "";
	for (var i = 0; i <= 10; i++) {
		num = Math.floor(Math.random() * ( 26 - 1) + 1);
		if (i <= 3) {
			password += down[num];
		}
		if (i > 3 & i <= 5) {
			password += up[num];
		}
		if (i > 6 & i <=8) {
			password += esp[num];	 
		}
		if (i > 9 & i <=10) {
			password += num;
		}
	}
	document.getElementById('password').value =  password;
}

function copy() {
	navigator.clipboard.writeText(document.getElementById('password').value);
}