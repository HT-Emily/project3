// audio clips
let audio1 = new Audio('1.wav');
let audio2 = new Audio('2.wav');
let audio3 = new Audio('3.wav');
let audio4 = new Audio('4.wav');
let audio5 = new Audio('5.wav');
let audio6 = new Audio('6.wav');
let audio7 = new Audio('7.wav');
let audio8 = new Audio('8.wav');
let audio9 = new Audio('9.wav');
let audio10 = new Audio('10.wav');
let audio11 = new Audio('11.wav');
let audio12 = new Audio('12.wav');
let audio13 = new Audio('13.wav');
let audio14 = new Audio('14.wav');
let audio15 = new Audio('15.wav');
let audio16 = new Audio('16.wav');
let audio17 = new Audio('17.wav');
let audio18 = new Audio('18.wav');
let audio19 = new Audio('19.wav');
let audio20 = new Audio('20.wav');
let audio21 = new Audio('21.wav');
let audio22 = new Audio('22.wav');
let audio23 = new Audio('23.wav');
let audio24 = new Audio('24.wav');
let audio25 = new Audio('25.wav');
let audio26 = new Audio('26.wav');
let audio27 = new Audio('27.wav');
let audio28 = new Audio('28.wav');
let audio29 = new Audio('29.wav');
let audio30 = new Audio('30.wav');
let audio31 = new Audio('31.wav');
let audio32 = new Audio('32.wav');
let audio33 = new Audio('33.wav');
let audio34 = new Audio('34.wav');
let audio35 = new Audio('35.wav');
let audio36 = new Audio('36.wav');
let audio37 = new Audio('37.wav');
let audio38 = new Audio('38.wav');
let audio39 = new Audio('39.wav');
let audio40 = new Audio('40.wav');
let audio41 = new Audio('41.wav');
let audio42 = new Audio('42.wav');
let audio43 = new Audio('43.wav');
let audio44 = new Audio('44.wav');
let audio45 = new Audio('45.wav');
let audio46 = new Audio('46.wav');
let audio47 = new Audio('47.wav');
let audio48 = new Audio('48.wav');
let audio49 = new Audio('49.wav');
let audio50 = new Audio('50.wav');
let audio51 = new Audio('51.wav');
let audio52 = new Audio('52.wav');
let audio53 = new Audio('53.wav');
let audio54 = new Audio('54.wav');
let audio55 = new Audio('55.wav');
let audio56 = new Audio('56.wav');
let audio57 = new Audio('57.wav');
let audio58 = new Audio('58.wav');
let audio59 = new Audio('59.wav');
let audio60 = new Audio('60.wav');
let audio61 = new Audio('61.wav');
let audio62 = new Audio('62.wav');
let audio63 = new Audio('63.wav');
let audio64 = new Audio('64.wav');

var audioCurr = 0;
let device;

// setup midi
if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log("Could not connect to MIDI");
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
     midiAccess.addEventListener("statechange", updateDevices);
     const inputs = midiAccess.inputs;

     inputs.forEach((input) => {
        input.addEventListener('midimessage', handleInput)
     })
}

function handleInput(input) {
    const command = input.data[0];
    const key = input.data[1];
    const velocity = input.data[2];
    console.log(`command: ${command}, key: ${key}, velocity = ${velocity}`);
    if (velocity > 0) {
        playNote(key);
    }
}

function playNote(note) {
    if (audioCurr != 0) {
        audioCurr.pause();
    }

    // background color
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    // api for quote generator
    const settings = {
    	"async": true,
    	"crossDomain": true,
    	"url": "https://motivational-quotes1.p.rapidapi.com/motivation",
    	"method": "POST",
    	"headers": {
    		"content-type": "application/json",
    		"X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
    		"X-RapidAPI-Key": "3a9bcf4cd6msh01220b386028ba1p185e28jsn4eef39503523"
    	},
    	"processData": false,
    	"data": {
    		"key1": "value",
    		"key2": "value"
    	}
    };

    $.ajax(settings).done(function (response) {
    	document.getElementById("p1").innerHTML = response;

    });
    // programming midi
    // 1st row
    if (note == 64) {
        audioCurr = audio1;
    }

    if (note == 65) {
        audioCurr = audio2;
    }

    if (note == 66) {
        audioCurr = audio3;
    }

    if (note == 67) {
        audioCurr = audio4;
    }

    if (note == 96) {
        audioCurr = audio5;
    }

    if (note == 97) {
        audioCurr = audio6;
    }

    if (note == 98) {
        audioCurr = audio7;
    }

    if (note == 99) {
        audioCurr = audio8;
    }
    // 2nd row
    if (note == 60) {
        audioCurr = audio9;
    }

    if (note == 61) {
        audioCurr = audio10;
    }

    if (note == 62) {
        audioCurr = audio11;
    }

    if (note == 63) {
        audioCurr = audio12;
    }

    if (note == 92) {
        audioCurr = audio13;
    }

    if (note == 93) {
        audioCurr = audio14;
    }

    if (note == 94) {
        audioCurr = audio15;
    }

    if (note == 95) {
        audioCurr = audio16;
    }
    // 3rd row
    if (note == 56) {
        audioCurr = audio17;
    }

    if (note == 57) {
        audioCurr = audio18;
    }

    if (note == 58) {
        audioCurr = audio19;
    }

    if (note == 59) {
        audioCurr = audio20;
    }

    if (note == 88) {
        audioCurr = audio21;
    }

    if (note == 89) {
        audioCurr = audio22;
    }

    if (note == 90) {
        audioCurr = audio23;
    }

    if (note == 91) {
        audioCurr = audio24;
    }
    // row 4
    if (note == 52) {
        audioCurr = audio25;
    }

    if (note == 53) {
        audioCurr = audio26;
    }

    if (note == 54) {
        audioCurr = audio27;
    }

    if (note == 55) {
        audioCurr = audio28;
    }

    if (note == 84) {
        audioCurr = audio29;
    }

    if (note == 85) {
        audioCurr = audio30;
    }

    if (note == 86) {
        audioCurr = audio31;
    }

    if (note == 87) {
        audioCurr = audio32;
    }
    // row 5
    if (note == 48) {
        audioCurr = audio33;
    }

    if (note == 49) {
        audioCurr = audio34;
    }

    if (note == 50) {
        audioCurr = audio35;
    }

    if (note == 51) {
        audioCurr = audio36;
    }

    if (note == 80) {
        audioCurr = audio37;
    }

    if (note == 81) {
        audioCurr = audio38;
    }

    if (note == 82) {
        audioCurr = audio39;
    }

    if (note == 83) {
        audioCurr = audio40;
    }
    // row 6
    if (note == 44) {
    audioCurr = audio41;
    }

    if (note == 45) {
    audioCurr = audio42;
    }

    if (note == 46) {
    audioCurr = audio43;
    }

    if (note == 47) {
    audioCurr = audio44;
    }

    if (note == 76) {
    audioCurr = audio45;
    }

    if (note == 77) {
    audioCurr = audio46;
    }

    if (note == 78) {
    audioCurr = audio47;
    }

    if (note == 79) {
    audioCurr = audio48;
    }
    // row 7
    if (note == 40) {
    audioCurr = audio49;
    }

    if (note == 41) {
    audioCurr = audio50;
    }

    if (note == 42) {
    audioCurr = audio51;
    }

    if (note == 43) {
    audioCurr = audio52;
    }

    if (note == 72) {
    audioCurr = audio53;
    }

    if (note == 73) {
    audioCurr = audio54;
    }

    if (note == 74) {
    audioCurr = audio55;
    }

    if (note == 75) {
    audioCurr = audio56;
    }
    // row 8
    if (note == 36) {
    audioCurr = audio57;
    }

    if (note == 37) {
    audioCurr = audio58;
    }

    if (note == 38) {
    audioCurr = audio59;
    }

    if (note == 39) {
    audioCurr = audio60;
    }

    if (note == 68) {
    audioCurr = audio61;
    }

    if (note == 69) {
    audioCurr = audio62;
    }

    if (note == 70) {
    audioCurr = audio63;
    }

    if (note == 71) {
    audioCurr = audio64;
    }

    if (audioCurr != 0) {
        audioCurr.play();
    }
}


