


export default function Error({ reload }) {
    return (
        <>
            <div className="container flex flex-col max-h-screen min-h-screen absolute items-center justify-center">
                <img className="blur-xs relative top-1 left-1 w-1/4 object-cover" src="/chew-img.png" alt="404" />
            </div>

            <div className="container flex flex-col max-h-screen min-h-screen  mx-auto items-center justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-9xl  z-[100] text-light bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text "

                    style={{ textShadow: "0 0 20px rgba(0,0,0,0.3)", color: "transparent", WebkitTextStroke: "4px rgb(236, 213, 82)" }}
                >OOps!</h1>
                <h1 className="text-2xl md:text-4xl lg:text-6xl z-[100] text-light bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text "
                    style={{ textShadow: "0 0 20px rgba(0,0,0,0.3)", color: "transparent", WebkitTextStroke: "2px rgb(236, 213, 82)" }}
                >
                    Something went wrong!
                </h1>
                {/* reload button */}
                <button className="border p-3 rounded-full shadow hover:shadow-lg
            hover:cursor-pointer transition duration-250 ease-in-out
            flex items-center justify-center gap-2 text-white disabled:opacity-50
            disabled:cursor-not-allowed hover:bg-slate-900 hover:border-slate-900 disabled:hover:border-none
             "
                    onClick={reload}>
                    <div className="text-slate-400 hidden lg:flex">Reload</div>
                </button>
            </div>
        </>
    )
}