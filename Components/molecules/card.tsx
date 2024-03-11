'use client';
import { fetchContent } from "@/app/lib/Home/fetchContent";
import { cardData } from '@/app/lib/definitions';
import SubTitle from "../atoms/subsectiontitle";
import Link from "next/link";

export default function card({title, text}: {title: string, text: string}){

    return (
        <section className="bg-slate-200 hover:bg-slate-100">
            <SubTitle content={title} css=""/>
            <p className="text-base">{text}</p>
        </section>

    );
}