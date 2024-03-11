'use server';

import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.OCTOKIT_AUTH
});

export async function fetchProjects(){
    let apiData = await octokit.request('GET /users/{username}/repos',
    {username: 'ethanrowe5379'});

    let apiDataRes = await apiData;

    apiDataRes.data.sort((a, b) => {
        return Date.parse(b.updated_at as string) - Date.parse(a.updated_at as string); // descending
    });

    return apiDataRes.data;
}