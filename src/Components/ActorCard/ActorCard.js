import { Link } from "react-router-dom";

export default function ActorCard({ name, height, birth_year, url }) {
    return (
        <div className='flex flex-col w-full p-4 border-t-4 border-orange-300 rounded-b-lg shadow hover:shadow-orange-300 shadow-orange-300 shadow-sm hover:shadow-6xl mx-auto h-fit '>
            <h1 className="text-white bg-slate-900 p-3 rounded">{name}</h1>
            <h2 className="ps-2"> Height : {height}</h2>
            <h1 className="ps-2">Birth Year : {birth_year}</h1>
            <DetailsButton url={url} />
        </div>
    );
}


function DetailsButton ({url}) {
    const id = url.split('/')[5];
    return  (
        <Link to={`/${id}`} className='border w-fit px-3 py-1 rounded-lg mt-5 hover:shadow hover:cursor-pointer
            hover:shadow-orange-300 shadow-orange-300 shadow-sm hover:shadow-9xl'>
            Details
        </Link>
    );
}