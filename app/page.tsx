import React from 'react'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { Message } from '../Typings'
import {unstable_getServerSession} from 'next-auth/next'
import {Providers}  from "./providers"


async function page() {
    const data=await fetch(`${process.env.VERCEL_URL||"http://localhost:3000"}/api/getMessages`).then((res)=>res.json())

    const messages:Message[]=data.messages; 
    const session=await unstable_getServerSession();
  return (
    <Providers session={session}>
    <main>
        {/* Message List */}
        <MessageList initialMessages={messages}/>
        {/* Chat Input */}
        <ChatInput session={session}/>
    </main>
    </Providers>
  )
}

export default page