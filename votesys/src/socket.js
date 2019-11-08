import io from 'socket.io-client';

const socket = io('https://cuny-hacks-backend.herokuapp.com');

socket.on('connect', ()=>{
    console.log("you have been connected");
})

socket.on('joined', (data) =>{
    console.log(`${data} has joined the room`);
})


export default socket;