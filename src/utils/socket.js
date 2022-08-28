import io from "socket.io-client";
const SOCKET_URL = "http://ec2-3-86-81-95.compute-1.amazonaws.com:5001";
export const socket = io(SOCKET_URL, { transports : ['websocket'] });