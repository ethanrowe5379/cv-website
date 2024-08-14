'use server';

import { fetchProjects } from "@/app/lib/Projects/fetchProjects";
import { Octokit } from "octokit";
import GitCard from "../../../../../Components/molecules/GitCard";

export default async function Page(){
    const projects = await fetchProjects();
    return (
        <>
            <main>
                <h2 className={""}>/Projects/Github</h2>
                <ol>
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
                </ol>
                <p className="text-sm">Created using the Github API via Octokit</p>
            </main>
        </>
    );
};