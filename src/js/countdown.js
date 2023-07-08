export function countdown1() {
  const formatDigit = (digit) => `0${digit}`.slice(-2);

  const updateTime = (time) => {
    const seconds = document.getElementById("seconds");
    const minutes = document.getElementById("minutes");
    const hours = document.getElementById("hours");
    const days = document.getElementById("days");

    const qtdSeconds = time % 60;
    const qtdMinutes = Math.floor((time % (60 * 60)) / 60);
    const qtdHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const qtdDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatDigit(qtdSeconds);
    minutes.textContent = formatDigit(qtdMinutes);
    hours.textContent = formatDigit(qtdHours);
    days.textContent = formatDigit(qtdDays);
  };

  const countdown = (time) => {
    const stopContent = () => clearInterval(id);
    const count = () => {
      if (time === 0) {
        stopContent();
      }
      updateTime(time);
      time--;
    };
    const id = setInterval(count, 1000);
  };

  const timeRest = () => {
    const dateEvent = new Date("2023-07-09 20:00:00");
    const date = Date.now();
    return Math.floor((dateEvent - date) / 1000);
  };
  countdown(timeRest());
}
