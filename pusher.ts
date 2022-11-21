import Pusher from "pusher";
import ClientPusher from 'pusher-js'

export const serverPusher=new Pusher({
appId : "1510668",
key : "d2597d8d7abde29928a6",
secret : "f9ea1dd083cc341cbec9",
cluster : "ap3",
useTLS:true
})

export const clientPusher= new ClientPusher('d2597d8d7abde29928a6', {
      cluster: 'ap3',
      forceTLS:true
    })