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
  //document.getElementById("doEvent").innerHTML = "DeviceOrientation";
  // Listen for the deviceorientation event and handle the raw data
  window.addEventListener('deviceorientation', function(eventData) {
    // gamma is the left-to-right tilt in degrees, where right is positive
    var tiltLR = eventData.gamma;

    // beta is the front-to-back tilt in degrees, where front is positive
    var tiltFB = eventData.beta;

    // alpha is the compass direction the device is facing in degrees
    var dir = eventData.alpha

    // call our orientation event handler
    deviceOrientationHandler(tiltLR, tiltFB, dir);
  }, false);
} else {
  document.getElementById("orientation").innerHTML = "Device orientation - Not supported."
}

function deviceOrientationHandler(a, b, c) {
    document.getElementById('orientation').innerHTML = a+";"+b+";"+c;
}