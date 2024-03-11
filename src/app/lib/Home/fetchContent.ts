'use server';

import {sql} from '@vercel/postgres';
import "@/app/lib/definitions";
import { cardData } from '@/app/lib/definitions';

export async function fetchContent(){
    try{
        const data = await sql<cardData> `SELECT section, content FROM "Home"`;
        return data.rows;
    }catch (error){
        console.error('Database Error')
        throw new Error('failed to fetch home content');
    }

}