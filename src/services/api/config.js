const hostname = 'http://localhost';
const port = 1989;
const config = {
  serverUrl: `${hostname}:${port}`,
  socketSourceUrl: `${hostname}:${port}/socket.io/socket.io.js`,
}

export default config;