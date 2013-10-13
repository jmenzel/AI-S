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
    
    console.log("Battery status: " + level + " %");
    document.getElementById('battery').innerHTML = " " + level + " % - Charging: " + charging;
    
  if (battery.charging) {
    console.log("Battery is charging"); 
  }
}