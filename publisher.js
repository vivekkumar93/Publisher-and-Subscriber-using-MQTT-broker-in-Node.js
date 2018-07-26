var mqtt = require('mqtt');
var fs = require('fs');

var client  = mqtt.connect('mqtt://10.1.8.22');// IP address of your PC
client.on('connect', function () {
setInterval(function() {
var rssi = Math.floor(Math.random() * 25) -75;
var jsonContent = '{"projectid":"5a0b483fed7dde4ea19ae9","addresstype":"macaddr","address":"CB:75:E8:14:DE:25","rssi":'+rssi+',"scanRecord":"","txPower":-31,"url":"https://oef.io/Bk5wZaKp","timeStamp":1518380883024}';
client.publish('myTopic', jsonContent);
console.log('Message Sent');
}, 100);
});