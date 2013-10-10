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
    if (Notification && Notification.permission === "granted") {
      var n = new Notification("Hi there!");
    }

    // If the user hasn't told if he wants to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }

        // If the user said okay
        if (status === "granted") {
          var n = new Notification("Hi there!");
        }

        // Otherwise, we can fallback to a regular modal alert
        else {
          alert("Hi - no notification!");
        }
      });
    }

    // If the user refuses to get notified
    else {
      // We can fallback to a regular modal alert
      alert("Hi - no notification!");
    }
  }
