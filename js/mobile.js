function vibrate(duration) {
    navigator.vibrate(duration);
}

function notify(msg) {
    var n = new Notification(msg);
}