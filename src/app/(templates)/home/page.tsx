import Card from "../../../../Components/molecules/card";
import {sql} from "@vercel/postgres"
import { fetchProjects } from "@/app/lib/Projects/fetchProjects";
import GitCard from "../../../../Components/molecules/GitCard";

export default async function Page(){
    const projects = await fetchProjects();
    return (
        <main >
            <h2 className="text-xl">/Home</h2>
            <section className="homeSection min-h-80">
                <h3>About</h3>
                <p>BSc Applied Computing Graduate from The University of Dundee. Based within Clackmannashire looking for a full-time position within any Software or Web development role. </p>
                <p>Currently Working as a Kitchen Assistant Part-time @ Powmill Milkbar. </p>
            </section>
            <section className="homeSection min-h-80 ml-1 float-right">
                <h3>Projects</h3>
                <hr className="mt-1"/>
                {
                    projects.map((items, index) => {
                        if(items.description == null){
                            items.description = "Description Unavailable - View Readme.md within github repo";
                        }
                        if(items.updated_at == null || items.updated_at == undefined){
                            items.updated_at = "Time Unavailable";
                        }
                        return (
                            <GitCard key={index} title={items.name} time={items.updated_at} text={items.description} url={items.html_url}/>
                        )
                    })
                }
            </section>
            <section className="homeSection">
                <h3>Contact</h3>
                <p>You can find my Contact information on my LinkedIn Profile.</p>
            </section>
        </main>
    );
};