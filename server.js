import dgram from 'dgram';
import { Buffer } from 'buffer';
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

});
// Later, when you want to close the server.
server.bind(41234);
