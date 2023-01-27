import Card from "@/app/card/Card";
import {FiGithub} from "react-icons/fi";
import {Octokit} from "@octokit/core";

export default async function Cards() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    const repositories = await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
        username: 'Syrent'
    })

    const data = repositories.data as Repository[];
    data.sort(() => Math.random() - 0.5);

    return (
        <>
            {
                data/*.filter(repo => !repo.fork)*/.map(repo =>
                    <Card
                        key={repo.id}
                        icon={FiGithub}
                        repository={repo}
                    />
                )
            }
        </>
    )
}

export type Repository = {
    id: number,
    name: string,
    description: string,
    fork: boolean,
    owner: {
        login: string,
        avatar_url: string,
        url: string,
        html_url: string
    },
    language: string,
    has_wiki: boolean,
    has_downloads: boolean,
    forks_count: number,
    stargazers_count: number,
    watchers_count: number
}