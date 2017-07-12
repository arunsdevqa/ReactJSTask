var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var RTM = require('satori-rtm-sdk');
var endpoint = "wss://open-data.api.satori.com";
var appkey = "Af6db5e74015FDeEb3fbfACe1DBBFC7b";
var channel = "transportation";
var client = new RTM(endpoint, appkey);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));



client.on('enter-connected', function() {
    console.log('Connected to Satori RTM!');
});

var subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

subscription.on('rtm/subscription/data', function(pdu) {
    pdu.body.messages.forEach(function(msg) {
        console.log('Got message:', msg);
    });
});

client.on('error', function(error) {
    console.log('Failed to connect', error);
});

client.start();
