/*
* stopwatch class
    start()
    stop()
    getTime()
    reset()
*/
var stopwatch = /** @class */ (function () {
    function stopwatch() {
    }
    return stopwatch;
}());
(function () {
    var second = 0;
    var minute = 0;
    var hour = 0;
    var timeout;
    var initiateTimer = function () {
        second++;
        if (second == 60) {
            second = 0;
            minute += 1;
        }
        else {
            minute = minute;
        }
        if (minute == 60) {
            minute = 0;
            hour += 1;
        }
    };
    start();
    {
        timeout = window.setTimeout(initiateTimer(), 1000);
    }
    stop();
    {
        window.clearTimeout(timeout);
    }
    getTime();
    {
        return ((hour <= 9) ? "0" + hour : hour) + " : " + ((minute <= 9) ? "0" + minute : minute) + ":" + ((second <= 9) ? "0" + second : second);
    }
    reset();
    {
        window.clearTimeout(timeout);
        second = 0;
        hour = 0;
        minute = 0;
    }
});
var stopWatch = stopwatch();