//https://teachablemachine.withgoogle.com/models/VvfF7asI9/
Webcam.set({
    width:450,
    height:400,
    image_format : 'png',
    png_quality:90,
    crop_width:400,
    crop_height:350
});
Webcam.attach("#camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });

}
console.log('ml5 version,'+ ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VvfF7asI9/model.json",modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!");
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first hand gesture is " + prediction_1;
var utterThis = new SpeechSynthesisUtterance(speak_data_1);
synth.speak(utterThis);

}


function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}



function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_handsign_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak()
        if(results[0].label == "Bird Call"){
            document.getElementById("update_handsign").innerHTML = "&#128080;"
        }
       
        if(results[0].label == "Amazing"){
            document.getElementById("update_handsign").innerHTML = "&#128076;"
        }
        if(results[0].label == "victory"){
            document.getElementById("update_handsign").innerHTML = "&#9996;"
        }
        if(results[0].label == "Good"){
            document.getElementById("update_handsign").innerHTML = "&#128077;"
        }
        if(results[0].label == "Bad"){
            document.getElementById("update_handsign").innerHTML = "&#128078;"
        }
        if(results[0].label == "Stop"){
            document.getElementById("update_handsign").innerHTML = "&#9995;"
        }
        if(results[0].label == "Go"){
            document.getElementById("update_handsign").innerHTML = "&#128070;"
        }


    }
    

}
