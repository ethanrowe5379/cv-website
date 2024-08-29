'use client';
import { fetchContent } from "@/app/lib/Home/fetchContent";
import { cardData } from '@/app/lib/definitions';
import Link from "next/link";

export default function GitCard({title, text, url, time}: {title: string, text: string, url: string, time: string}){
    let date = Date.parse(time);
    let timeNew = new Date(date);
    return (
        <>
        <a href={url}>
        <section className="hover:bg-slate-100 mb-1">
            <h2 className="inline" >{title}</h2>
            <p className="text-base text-sm inline ml-5">{timeNew.toUTCString()}</p>
            <p className="text-base mt-1">{text}</p>
        </section>
        </a>
        <hr className="mt-1"/>
        </>
    );
}