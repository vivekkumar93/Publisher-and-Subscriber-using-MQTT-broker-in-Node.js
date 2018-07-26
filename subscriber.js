var mqtt = require('mqtt')
var fs = require('fs');
var client  = mqtt.connect('mqtt://10.1.8.22')

client.on('connect', function () {
    client.subscribe('myTopic')
})

client.on('message', function (topic, message) {
var json = JSON.parse(message);
var rssi_value = json["rssi"];
var diffMove = rssi_value; //parse json and get rssi value

console.log("diffMove>"+diffMove);

// write diffMove variable to a file

fs.appendFile("C:/NodeJS/MQTT/output.txt", diffMove+'\n', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

})