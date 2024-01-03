

function PageNotFound() {
  return (
    <>
      <div className="container flex flex-col max-h-screen min-h-screen absolute items-center justify-center">
        <img className="blur-xs relative top-1 left-1 w-1/4 object-cover" src="/404.png" alt="404" />
      </div>

      <div className="container flex flex-col max-h-screen min-h-screen  mx-auto items-center justify-center
      ">
        <h1 className="text-4xl md:text-6xl lg:text-9xl  z-[100] text-light bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text "
        
          style={{ textShadow: "0 0 20px rgba(0,0,0,0.3)", color: "transparent", WebkitTextStroke: "4px rgb(236, 213, 82)" }}
        >404!</h1>
        <h1 className="text-2xl md:text-4xl lg:text-6xl z-[100] text-light bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text "
          style={{ textShadow: "0 0 20px rgba(0,0,0,0.3)", color: "transparent", WebkitTextStroke: "2px rgb(236, 213, 82)" }}
        >Page not found!</h1>
      </div>
    </>
  )
}



export default PageNotFound;