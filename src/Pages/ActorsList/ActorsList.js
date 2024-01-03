import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import ActorCardSkeleton from "../../Components/ActorCardSkeleton/ActorCardSkeleton";
import Error from "../../Components/Error/Error";
import Star from "../../Components/Star/Star";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ActorCard from "../../Components/ActorCard/ActorCard";


const BlinkingStars = Array(100).fill().map(() => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return <Star x={x} y={y} />
});

const Status = {
    Loading: 'loading',
    Error: 'error',
    Success: 'success'
}

function ActorsList() {
    const [pageState, setPageState] = useState(Status.Success);
    const [actors, setActors] = useState([]);
    const [page, setPage] = useState(1);
    const [hasPreviousPage, setHasPreviousPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [blinkingStars, _] = useState(BlinkingStars);

    const fetch = async () => {
        setPageState(Status.Loading);
        try {
            const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
            if (response.status !== 200) {
                setPageState(Status.Error);
                return;
            }
            setPageState(Status.Success);
            setHasPreviousPage(!!response.data.previous);
            setHasNextPage(!!response.data.next);
            setActors(response.data.results);
        } catch (error) {
            setPageState(Status.Error);
        }
    }

    useEffect(() => {
        fetch();
    }, [page])


    return (
        <div className="min-h-screen  max-h-screen flex flex-col items-center absolute w-screen">
            <Header />

            {
                <div className=" flex-initial flex gap-5 md:gap-12 justify-between items-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Button

                        leading={<GrFormPrevious />}
                        content="Previous"
                        onClick={() => setPage(page - 1)}
                        disabled={pageState === Status.Loading || !hasPreviousPage}
                    />


                    <div className="text-slate-400">Page {page}</div>

                    <Button
                        leading={<GrFormNext />}
                        content="Next"
                        onClick={() => setPage(page + 1)}
                        disabled={pageState === Status.Loading || !hasNextPage}
                    />
                </div>
            }

            <div className="bg-black w-full grid justify-start mx-auto px-4 sm:px-6 lg:px-8 overflow-y-scroll container flex-1 gap-8 mt-5
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full z-3" >
                {pageState === Status.Loading && Array(8).fill().map((_, index) => { return <ActorCardSkeleton key={index} /> })}
                {pageState === Status.Success && actors.map((actor) => { return ActorCard(actor); })}
                {pageState === Status.Success && actors.length === 0 && <div className="text-white text-2xl">No actors found!</div>}
                {pageState === Status.Error && <Error reload={fetch} />}
            </div>

            <div className="hidden lg:flex flex-col gap-5 items-center z-[-1]">
                {blinkingStars}
            </div>

        </div>
    );
}

function Button(
    { onClick, disabled, content, leading = null }
) {
    return (
        <button
            className="border p-3 rounded-full shadow hover:shadow-lg
            hover:cursor-pointer transition duration-250 ease-in-out
            flex items-center justify-center gap-2 text-white disabled:opacity-50
            disabled:cursor-not-allowed hover:bg-slate-900 hover:border-slate-900 disabled:hover:border-none
             "
            onClick={onClick} disabled={disabled}>
            {leading}
            <div className="text-slate-400 hidden lg:flex">{content}</div>
        </button>
    );
}


export default ActorsList;