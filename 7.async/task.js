class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('ID не передан');
    }
    else if (this.alarmCollection.some(item => item.id === id)) {
      console.error('Такой ID уже существует');
    }
    else {
      this.alarmCollection.push({ id, time, callback });
    }
  }

  removeClock(id) {
    let clockId = this.alarmCollection.findIndex(item => item.id === id)
    if(clockId === -1) {
      return false;
    } else {
      this.alarmCollection.splice(clockId, 1);
      return true;
    }
    
  }

  getCurrentFormattedTime() {
    const date = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
        
    return date
  }

  checkClock(alarm) {
    if(alarm.time === this.getCurrentFormattedTime()) {
      alarm.callback();
    }
  }

  start() {
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
          this.alarmCollection.forEach(item => this.checkClock(item));
        }, 1000);
      }
    }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    return this.alarmCollection.forEach(item => console.log(`Звонок ${item.id} в ${item.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}