'use server';

import { fetchProjects } from "@/app/lib/Projects/fetchProjects";
import { Octokit } from "octokit";
import GitCard from "../../../../../Components/molecules/GitCard";
import Title from "../../../../../Components/atoms/Title";

export default async function Page(){
    const projects = await fetchProjects();
    return (
        <>
            <main>
                <Title content="Github"/>
                <ol>
                {
                    projects.map((items, index) => {
                        if(items.description == null){
                            items.description = "Description Unavailable - View Readme.md in on github";
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
                <p>Created using the Github API via Octokit</p>
            </main>
        </>
    );
};