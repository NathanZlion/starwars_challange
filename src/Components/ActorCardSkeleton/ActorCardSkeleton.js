
export default function ActorCardSkeleton() {
    return (
        <div className='w-full p-4 border-t-4 border-orange-300 rounded-b-lg shadow hover:shadow-orange-300 shadow-orange-300 shadow-sm hover:shadow-6xl mx-auto hover:cursor-wait'>
            <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                    {/* the name part */}
                    <div class="h-9 bg-slate-700 rounded"></div>

                    <div class="space-y-3">
                        {/* the height part */}
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-3 bg-slate-700 rounded col-span-1"></div>
                            <div class="h-3 bg-slate-700 rounded col-span-2"></div>
                        </div>

                        {/* the birth year part */}
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-3 bg-slate-700 rounded col-span-1"></div>
                            <div class="h-3 bg-slate-700 rounded col-span-2"></div>
                        </div>
                    </div>

                    {/* the details button */}
                    <div class="h-6 w-1/2 bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    )
}

