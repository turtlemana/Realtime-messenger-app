import React from 'react'
import {getProviders,signIn} from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

async function SignInPage() {
    const providers=await getProviders();
  return (
    <div className="grid justify-center">
        <div>
            <Image src="/img/molly_main.jpg" alt="logo" width={700} height={700} className="rounded-full mx-2 object-cover mb-5"/>
        </div>
        <SignInComponent providers={providers}/>
    </div>
  )
}

export default SignInPage