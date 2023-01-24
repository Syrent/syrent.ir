import {IconType} from "react-icons";
import Link from "next/link";
import { Repository } from "@/app/page";
import {BiGitRepoForked, FiStar, MdLanguage} from "react-icons/all";

type CardProps = {
    icon: IconType,
    repository: Repository
}

type CardDataProps = {
    icon: IconType,
    amount: string,
}

export default function Card(props: CardProps) {
    return (
        <Link target="_blank" className={`flex flex-col gap-5 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-all m-2 p-6 row-span-1 cursor-pointer col-span-4 h-45`} href={`https://github.com/Syrent/${props.repository.name}`}>
            <div className="flex flex-row gap-5 items-center">
                <props.icon className="scale-[200%]" />
                <h1 className="font-bold">{props.repository.name}</h1>
            </div>
            <div className="h-12 overflow-hidden">
                { props.repository.description && <p>{props.repository.description}</p> }
            </div>
            <div className="flex flex-row gap-5">
                { props.repository.language && <CardData icon={MdLanguage} amount={props.repository.language} /> }
                { props.repository.forks_count > 0 && <CardData icon={BiGitRepoForked} amount={props.repository.forks_count.toString()} /> }
                { props.repository.stargazers_count > 0 && <CardData icon={FiStar} amount={props.repository.stargazers_count.toString()} /> }
            </div>
        </Link>
    )
}

function CardData(props: CardDataProps) {
    return (
        <div className="flex flex-row gap-2 items-center text-gray-700">
            <props.icon className="scale-150" />
            <span>{props.amount}</span>
        </div>
    )
}