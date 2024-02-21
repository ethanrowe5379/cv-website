import Title from "../atoms/Title";
import Navi from "../molecules/nav";
import Head from "next/head";

export default function Header(){
    return (
        <header>
            <Title content={"Ethan Rowe"}/>
            <Navi />
        </header>
    );
}