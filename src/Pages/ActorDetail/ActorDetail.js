import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import Star from "../../Components/Star/Star";
import axios from "axios";
import { IoChevronBackOutline } from "react-icons/io5";

const Status = {
    Loading: 'loading',
    Error: 'error',
    Success: 'success'
}

const BlinkingStars = Array(100).fill().map(() => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return <Star x={x} y={y} />
});

export default function ActorsDetail() {
    const { id } = useParams();
    const [pageState, setPageState] = useState(Status.Success);
    const [actorInfo, setActorInfo] = useState(null);
    const [blinkingStars, _] = useState(BlinkingStars);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/people/${id}`);
                if (response.status !== 200) {
                    setPageState(Status.Error);
                    return;
                }
                console.log(response.data);
                if (response.data.count === 0) {
                    setPageState(Status.Success);
                    return;
                } else {
                    setPageState(Status.Success);
                    setActorInfo(response.data);
                }
            } catch (error) {
                setPageState(Status.Error);
            }
        }

        setPageState(Status.Loading);
        fetch();

    }, [id]);

    return (
        <div>
            <button className="m-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex align-center items-center">
                <IoChevronBackOutline />
                <p className="hidden lg:flex"> Go back </p>
            </button>

            <Header />
            {
                pageState === Status.Loading && <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-white">Loading...</h1>
                </div>
            }
            {
                pageState === Status.Error && <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-white">Something went wrong</h1>
                </div>
            }
            {
                pageState === Status.Success && actorInfo === null
                && <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-white">No actor found</h1>
                </div>
            }
            {
                pageState === Status.Success && actorInfo !== null && <div className="flex flex-col items-center justify-center">
                    <ActorDetails actor={actorInfo} />
                </div>
            }


            <div className="hidden lg:flex flex-col gap-5 items-center z-[-1]">
                {blinkingStars}
            </div>

        </div>
    );
}



const ActorDetails = ({ actor }) => {
  return (
    <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{actor.name}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><span className="font-semibold">Height:</span> {actor.height} cm</p>
            <p><span className="font-semibold">Mass:</span> {actor.mass} kg</p>
            <p><span className="font-semibold">Hair Color:</span> {actor.hair_color}</p>
            <p><span className="font-semibold">Skin Color:</span> {actor.skin_color}</p>
          </div>
          <div>
            <p><span className="font-semibold">Eye Color:</span> {actor.eye_color}</p>
            <p><span className="font-semibold">Birth Year:</span> {actor.birth_year}</p>
            <p><span className="font-semibold">Gender:</span> {actor.gender}</p>
          </div>
        </div>
        <div className="mt-4">
          <p><span className="font-semibold">Homeworld:</span> <a href={actor.homeworld}>Explore</a></p>
          <p><span className="font-semibold">Films:</span> {actor.films.map((film, index) => (
            <span key={index}><a href={film}>Film {index + 1}</a>{index !== actor.films.length - 1 && ', '}</span>
          ))}</p>
          <p><span className="font-semibold">Species:</span> {actor.species.map((specie, index) => (
            <span key={index}><a href={specie}>Specie {index + 1}</a>{index !== actor.species.length - 1 && ', '}</span>
          ))}</p>
        </div>
      </div>
    </div>
  );
};
