require('dotenv').config({ path: '../.env' });
// import { P2cBalancer, RandomBalancer } from "load-balancers";

// // TODO: Update this list with your proxies or virtual machines.
// const proxies = ["https://localhost:5000",
//                "https://localhost:5050"];

// // Initializes the Power of 2 Choices (P2c) Balancer with ten proxies.
// const balancer = new P2cBalancer(proxies.length);

// // P2c Balancer is preferred over the Random Balancer.
// // const balancer = new RandomBalancer(proxies.length);

// for (let i = 0; i < 1e6; i++) {
//   const proxy = proxies[balancer.pick()];

//   // TODO: Use the assigned proxy to scrape a website,
//   // shift traffic to a virtual machine etc.
//   console.log(proxy);
// }
const server = require('./server');
//=====================================
//  LISTEN
//-------------------------------------

// TODO
// Clean up on shutdown for nodemon script
// process.once('SIGUSR2', function () {
//   TODO
//   gracefulShutdown(function () {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });

server.listen(server.get('port'), server.get('host'), error => {
  if (error) {
    console.error('server.listen encountered an error:', error);
    if (error.syscall !== 'listen') {
      throw error;
    }
    const port = process.env.PORT;
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  } else {
    console.log('----------------------------------------------------');
    console.log('');
    console.log('===> 😊  Starting Server . . .');
    console.log('===>  Environment: ' + process.env.NODE_ENV);
    console.info(`===>  Server listening @ ${server.get('host')}:${server.get('port')}`);
    console.log('');
    console.log('----------------------------------------------------');
  }
});