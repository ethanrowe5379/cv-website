'use client';
import { fetchContent } from "@/app/lib/Home/fetchContent";
import { cardData } from '@/app/lib/definitions';
import Link from "next/link";

export default function card({title, text, css}: {title: string, text: string,  css: string}){

    return (
        <section className={"card shadow-lg rounded-lg m-1 "+css}>
            <h2 className="">{title}</h2>
            <p className="text-base card-text">{"Maecenas neque nunc, tempus ut vehicula sed, venenatis sed leo. Sed consequat elit a justo sodales, ac aliquet metus facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vitae laoreet nunc. Vivamus vitae enim enim. Morbi sed lorem a diam condimentum pulvinar ac sed arcu. Ut tincidunt tortor quam, et tempus ex fringilla eget. Nullam consectetur purus dui, a faucibus nisi tristique tincidunt. Morbi pulvinar orci ante, at tincidunt sapien aliquet eget. Morbi in libero mi. Donec eget efficitur nisi, a sodales nibh. Etiam iaculis laoreet odio ut accumsan." }</p>
        </section>

    );
}