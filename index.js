const hour = window["hour"];
const minute = window["minute"];
const second = window["second"];
const startBtn = window["startBtn"];
const pauseBtn = window["pauseBtn"];
const stopBtn = window["stopBtn"];
console.log(hour, minute, second, startBtn, pauseBtn, stopBtn);

class CustomClock {
    constructor(hour, minute, second, startBtn, pauseBtn, stopBtn) {
        this.hourTime = 0;
        this.minuteTime = 0;
        this.secondTime = 0;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.stopBtn = stopBtn;
        this.currentInterval;

        this.startBtn.addEventListener("click", () => this.startClock());
        this.pauseBtn.addEventListener("click", () => this.pauseClock());
        this.stopBtn.addEventListener("click", () => this.stopClock());
    }

    startClock() {
        this.currentInterval = setInterval(() => {
            this.incrementSecond();
        }, 1000);
        this.startBtn.setAttribute("disabled", "");
        this.pauseBtn.removeAttribute("disabled");
        this.stopBtn.removeAttribute("disabled");
    }
    pauseClock() {
        clearInterval(this.currentInterval);
        this.startBtn.removeAttribute("disabled");
        this.pauseBtn.setAttribute("disabled", "");
        this.stopBtn.removeAttribute("disabled");
    }
    stopClock() {
        clearInterval(this.currentInterval);
        this.hourTime = 0;
        this.minuteTime = 0;
        this.secondTime = 0;
        this.second.textContent = "00";
        this.minute.textContent = "00";
        this.hour.textContent = "00";
        this.startBtn.removeAttribute("disabled");
        this.pauseBtn.setAttribute("disabled", "");
        this.stopBtn.setAttribute("disabled", "");
    }
    incrementSecond() {
        this.secondTime += 1;
        // if seconds exceed 60
        if (this.secondTime > 60) {
            this.secondTime = 0;
            this.incrementMinute();
        }
        if (this.secondTime < 10) {
            this.second.textContent = "0" + this.secondTime;
            return null;
        }
        this.second.textContent = this.secondTime;
    }
    incrementMinute() {
        // if minutes exceed 60
        this.minuteTime += 1;
        if (this.minuteTime > 60) {
            this.minuteTime = 0;
            this.incrementHour();
        }
        if (this.minuteTime < 10) {
            this.minute.textContent = "0" + this.minuteTime;
            return null;
        }
        this.minute.textContent = this.minuteTime;
    }
    incrementHour() {
        this.hourTime += 1;
        if (this.minuteTime < 10) {
            this.hour.textContent = "0" + this.hourTime;
            return null;
        }
        this.hour.textContent = this.hourTime;
    }
}
let clock = new CustomClock(hour, minute, second, startBtn, pauseBtn, stopBtn);
