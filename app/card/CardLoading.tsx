import {FiGithub} from "react-icons/fi";

export default function CardLoading() {

    const cards: JSX.Element[] = [];
    for (let i = 0; i < 20; i++) {
        cards.push(
            <div className={`flex flex-col gap-5 rounded-2xl shadow-sm bg-gray-50 hover:shadow-md transition-all m-2 p-6 row-span-1 cursor-pointer col-span-4 max-h-40`}>
                <div className="flex flex-row gap-5 items-center">
                    <FiGithub className="scale-[200%]" />
                    <span className="w-2/3 h-7 rounded bg-gray-300"></span>
                </div>
                <span className="h-6 w-max rounded bg-gray-300"></span>
                <span className="h-6 w-3/4 rounded bg-gray-300"></span>
            </div>
        )
    }

    return (
        <>
            {cards}
        </>
    )
}