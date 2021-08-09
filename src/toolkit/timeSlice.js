import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  breakTime: 5,
  sessionTime: 25,
  interval: "Session",
  timeLeft: 25 * 60,
  timerOn: false,
  audioElement: null,
};

const timeSlice = createSlice({
  name: "time",
  initialState,

  reducers: {
    addBreak(state, action) {
      if (state.breakTime > 0 && state.breakTime < 60) state.breakTime += 1;
    },
    minusBreak(state, action) {
      if (state.breakTime > 1 && state.breakTime <= 60) state.breakTime -= 1;
    },
    addSession(state, action) {
      const timeLeft = state.sessionTime < 60 ? state.sessionTime += 1 : state.sessionTime;
      state.timeLeft = timeLeft * 60;
    },
    minusSession(state, action) {
      const timeLeft = state.sessionTime > 1 ? state.sessionTime -= 1 : state.sessionTime;
      state.timeLeft = timeLeft * 60;

    },
    stopTimer(state, action) {
      state.timerOn = false;
    },
    startTimer(state, action) {
      state.timerOn = true;
    },
    resetTimer: () => initialState,

    switchBreak(state, action) {
      state.interval = "Break";
      state.timeLeft = state.breakTime * 60;
    },
    switchSession(state, action) {
      state.interval = "Session";
      state.timeLeft = state.sessionTime * 60;
    },
    decrementTime(state, action) {
      state.timeLeft -= 1;
    },
  },
});

export const {
  addBreak,
  minusBreak,
  addSession,
  minusSession,
  startTimer,
  stopTimer,
  resetTimer,
  decrementTime,
  switchBreak,
  switchSession,
} = timeSlice.actions;

export const selectSession = (state) => state.time.sessionTime;
export const selectBreak = (state) => state.time.breakTime;
export const timeLeft = (state) => state.time.timeLeft;
export const interval = (state) => state.time.interval;
export const timerOn = (state) => state.time.timerOn;

export default timeSlice.reducer;
