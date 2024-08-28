'use server'
import db from '@/lib/db'
import { hashSync } from 'bcrypt-ts'
import { redirect } from 'next/navigation'

export default async function  register(FormData : FormData){
    const name = FormData.get('name') as string
    const email = FormData.get('email') as string
    const password = FormData.get('password') as string

    if(!name || !email || !password){
        throw new Error("OS Campos devem estar prenchidos ")
    }

    const user = await db.user.findUnique({
        where: {
            email : email
        }
    })

    if(user){
        throw new Error("Este usuario já existe")
    }
    await db.user.create({
        data: {
            name : name,
            email : email, 
            password : hashSync(password)
        }
    })

    redirect('/')
    
    
}