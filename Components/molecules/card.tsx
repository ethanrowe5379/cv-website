import Title from "../atoms/Title";

export default function card({titleContent, text} : {titleContent: string, text: string}){
    return (
        <section className="bg-slate-200">
            <Title content={titleContent}/>
            <p>{text}</p>
        </section>
    );
}