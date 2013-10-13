window.addEventListener('load', function () {
  // At first, let's check if we have permission for notification
  // If not, let's ask for it
  if (Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }
});

function vibrate(duration) {
    navigator.vibrate(duration);
}

function notify(msg) {    
    var notification = new Notification("Notification", { body: msg });
}

// || navigator.mozBattery || navigator.webkitBattery;

function setBatteryStatus() {
    var battery = navigator.battery;
    
    var charging = battery.charging;
    var level = battery.level * 100;

    document.getElementById('battery').innerHTML = "Battery: " + level + " % - Charging: " + charging;
}

var battery = navigator.battery;

function updateBatteryStatus() {
    var battery = navigator.battery;
    
    var charging = battery.charging;
    var level = battery.level * 100;

    document.getElementById('battery').innerHTML = "Battery: " + level + " % - Charging: " + charging;
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();

function loca() {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success_loc, fail_suc);
 }   
}

function success_loc(pos) {
 document.getElementById('geolocation').innerHTML = "Lat:" + pos.coords.latitude + "; Lng:" + pos.coords.longitude;   
}

function fail_suc() {
 document.getElementById('geolocation').innerHTML = "Geo Location - fail! ";
}


if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(e) {
    a = Math.floor(e.alpha);
	b = Math.floor(e.beta);
	g = Math.floor(e.gamma);
	posUpdate(a,b,c);
 }, true);
}

function posUpdate(a, b, c) {
    elem = document.getElementById('orientation');
    
    elem.innerHTML = "X:" + a;
    elem.innerHTML += "Y:" + b;
    elem.innerHTML += "Z:" + c;
}