import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:8000";

export const socket = io(URL);

socket.on("connect", () => {
  console.log("connect");

  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("ping", (message) => {
  state.fooEvents.push(message);
});

socket.on("pong", (...args) => {
  state.barEvents.push(args);
});
