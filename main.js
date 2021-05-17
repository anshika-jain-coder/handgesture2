prediction_1 = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "Take Selfie" src = "' + data_uri + '"/>';
    });
}

console.log('ml5 version: ' + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1JcgmKYqS/", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "Prediction Is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
function check() {
    img = document.getElementById("Take Selfie");
    classifier.classify(img,gotResult);
}


    