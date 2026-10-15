import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timeFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
let intervalId = null;
let hasStarted = false;

function showDateError() {
  iziToast.error({
    message: 'Please choose a date in the future',
    position: 'topRight',
  });
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  disableMobile: true,
  onClose(selectedDates) {
    if (hasStarted) return;

    const selectedDate = selectedDates[0];
    if (!selectedDate || selectedDate.getTime() <= Date.now()) {
      userSelectedDate = null;
      startButton.disabled = true;
      showDateError();
      return;
    }

    userSelectedDate = selectedDate;
    startButton.disabled = false;
  },
};

flatpickr(dateInput, options);

startButton.addEventListener('click', () => {
  if (hasStarted) return;
  if (!userSelectedDate || userSelectedDate.getTime() <= Date.now()) {
    userSelectedDate = null;
    startButton.disabled = true;
    showDateError();
    return;
  }

  hasStarted = true;
  startButton.disabled = true;
  dateInput.disabled = true;
  intervalId = setInterval(updateTimer, 1000);
  updateTimer();
});

function updateTimer() {
  const remainingMs = Math.max(0, userSelectedDate.getTime() - Date.now());
  const time = convertMs(remainingMs);

  for (const [unit, element] of Object.entries(timeFields)) {
    element.textContent = addLeadingZero(time[unit]);
  }

  if (remainingMs === 0) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
