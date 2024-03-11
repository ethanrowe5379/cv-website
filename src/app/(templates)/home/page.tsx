import { fetchContent } from "@/app/lib/Home/fetchContent";
import Card from "../../../../Components/molecules/card";
import {sql} from "@vercel/postgres"



export default async function Page(){
    const pageContents = await fetchContent();
    return (
        <main>
            {
                pageContents.map((items, index) => (
                    <Card key={index} title={items.section} text={items.content}/>
                ))
            }
        </main>
    );
};