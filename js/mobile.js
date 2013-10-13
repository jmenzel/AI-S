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

var fullscreenEnabled = document.fullscreenEnabled;
var isFullscreen = false;
function toggleFullscreen() {
   if(!isFullscreen){
       document.documentElement.requestFullscreen();
       isFullscreen = true;
   }
    else
    {
        document.exitFullscreen();
        isFullscreen = false;
    }
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