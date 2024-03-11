export default function SubTitle({content, css} : {content: string, css: string}){
    return(
        <h1 className={"text-xl font-semibold " + css}>{content}</h1>
    );
}