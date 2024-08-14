import Navi from "../molecules/nav";
import Head from "next/head";

export default function Header(){
    return (
        <>
            <header>
                <h1 className="text-3xl">
                    System.User.Ethan_Rowe<div className="blink inline">_</div>
                </h1>
                <hr className="mt-1"/>
                <Navi />
                <hr className="mb-1"/>
            </header>
        </>
    );
}