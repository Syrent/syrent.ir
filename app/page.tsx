import Card from "@/app/card/Card";
import { FiGithub } from "react-icons/fi";
import {Octokit} from "@octokit/core";
import {Suspense} from "react";
import CardLoading from "@/app/card/CardLoading";
import logo from "@/public/logo.png";
import Image from "next/image";
import * as process from "process";

export default async function Home() {
    return (
        <main className="w-full fixed">
            <div className="blur-[1px] cards grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-1">
                <Suspense fallback={<CardLoading />}>
                    <Cards />
                </Suspense>
            </div>
            <div className="w-[100vw] h-[100vh] bg-black absolute top-0 left-0 opacity-50 pointer-events-none">
            </div>
            <div className="w-[100vw] h-[100vh] absolute top-0 left-0 pointer-events-none">
                <div className="relative flex gap-12 justify-center items-center h-[100vh]">
                    <Image src={logo} alt="logo" />
                </div>
            </div>
        </main>
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

async function Cards() {
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