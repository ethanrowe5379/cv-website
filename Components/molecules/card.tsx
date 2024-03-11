'use client';
import { fetchContent } from "@/app/lib/Home/fetchContent";
import { cardData } from '@/app/lib/definitions';
import SubTitle from "../atoms/subsectiontitle";
import Link from "next/link";

export default function card({title, text, url}: {title: string, text: string, url: string}){
    console.log(url)
    return (
        <a href={url}>
        <section className="bg-slate-200 hover:bg-slate-100">
            <SubTitle content={title}/>
            <p className="text-base">{text}</p>
        </section>
        </a>
    );
}