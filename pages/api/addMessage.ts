// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serverPusher } from '../../pusher';
import redis from '../../redis';
import {Message} from '../../Typings'

type Data = {
  message: Message
}
type ErrorData={
    body:string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
    if(req.method!=="POST"){res.status(405).json({body:"Method not Allowed"}); return;}
    const{message}=req.body;

    const newMessage={
        ...message,
        // Replace the timestamp of the user to the timestamp of the server
        created_at:Date.now()
    };

    // pushing to upstash redis 
    await redis.hset("messages",message.id,JSON.stringify(newMessage))
    serverPusher.trigger('messages','new-message',newMessage)
  res.status(200).json({ message: newMessage })
}
