class CountdownTimer {
    constructor({selector, targetDate}) {
        this.timerRef = document.querySelector(`${selector}`);
        this.targetDate = targetDate;
        this.days = '';
        this.hours = '';
        this.minutes = '';
        this.seconds = '';
        this.time = 0;
    }
  
    timer() {
      setInterval(() => {
        let now = Date.now();
        this.time = this.targetDate- now;

        this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
        this.secs = Math.floor((this.time % (1000 * 60)) / 1000);

        this.displayData()
      

      }, 1000);
    }

    displayData() {
      this.timerRef.querySelector('[data-value="days"]').textContent = this.days;
      this.timerRef.querySelector('[data-value="hours"]').textContent =  this.hours;
      this.timerRef.querySelector('[data-value="mins"]').textContent =  this.mins;
      this.timerRef.querySelector('[data-value="secs"]').textContent =  this.secs;

      if (this.time < 0) {
        clearInterval(timer);
      }
    }

    init() {
      return this.timer();
    }
}
  
const timer =new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('apr 15, 2021'),
});
timer.init();

const timer2 =new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('dec 11, 2020'),
});
timer2.init();



  //==========================================================
  
//   const refs = {
//     days: document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     minutes: document.querySelector('[data-value="mins"]'),
//     seconds: document.querySelector('[data-value="secs"]'),
//   }
  
//   //console.log(refs.days);
  
//   const timer = setInterval(() => {
//     //console.log('timer');
//     let now = new Date().getTime();
//     //console.log(now);
//     let time = countDown- now;
  
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
  
//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.minutes.textContent = mins;
//     refs.seconds.textContent = secs;
  
//     console.log(days);
//     console.log(hours);
//     console.log(mins);
//     console.log(secs);
  
//   if (time < 0) {
//     document.body.innerHTML = 'Вы профукали свое время';
//     //alert(`Вы профукали свое время`);
//     clearInterval(timer);
//   }
  
//   }, 1000);
  
//   const countDown = new Date('jul 17, 2021 00:00:00').getTime();
//   // console.log(date.getFullYear());
//   // console.log(date.getMonth()+1);
//   // console.log(date.getDay());
//   //console.log(date.getTime()); //times temp
//   //console.log(countDown);
