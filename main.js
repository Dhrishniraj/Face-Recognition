Webcam.set({
    width: 480, 
    height: 300, 
    image_format: 'png', 
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="' + data_uri + '">';
    });
}
console.log("ml5 version: " + ml5.version);
var faceRecognizer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hjDxCXnxB/model.json", model_loaded);
function model_loaded(){
    window.alert("Model is loaded!");
}