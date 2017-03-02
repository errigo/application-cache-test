// Convenience array of status values
var cacheStatusValues = [];
cacheStatusValues[0] = 'uncached';
cacheStatusValues[1] = 'idle';
cacheStatusValues[2] = 'checking';
cacheStatusValues[3] = 'downloading';
cacheStatusValues[4] = 'updateready';
cacheStatusValues[5] = 'obsolete';

// Listeners for all possible events
var cache = window.applicationCache;
cache.addEventListener('cached', logEvent, false);
cache.addEventListener('checking', logEvent, false);
cache.addEventListener('downloading', logEvent, false);
cache.addEventListener('error', logEvent, false);
cache.addEventListener('noupdate', logEvent, false);
cache.addEventListener('obsolete', logEvent, false);
cache.addEventListener('progress', logEvent, false);
cache.addEventListener('updateready', logEvent, false);

// Log every event to the console
function logEvent(e) {
    var online, status, type, message;
    online = (navigator.onLine) ? 'yes' : 'no';
    status = cacheStatusValues[cache.status];
    type = e.type;
    message = 'online: ' + online;
    message += ', event: ' + type;
    message += ', status: ' + status;
    if (type == 'error' && navigator.onLine) {
        message += ' (probably a syntax error in manifest)';
    }
    console.log(message);
}

// Swap in newly download files when update is ready
window.applicationCache.addEventListener('updateready',
    function () {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            console.log("Browser downloaded a new app cache.");
            // appCache.swapCache(); // if user deletes browser cache, this is NPE
            console.log("Swapped Application Cache");
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        } else {
            console.log("Manifest didn't changed. Nothing new to serve.");
        }
    },
false);
/*
// Check for manifest changes every 10 seconds
setInterval(function () {
    cache.update()
}, 10000);
*/
setInterval(function () {
    console.log("JS version: 4");
}, 1000);