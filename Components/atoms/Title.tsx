export default function Title({content} : {content: string}){
    return(
        <h1 className="text-2xl font-semibold">{content}</h1>
    );
}