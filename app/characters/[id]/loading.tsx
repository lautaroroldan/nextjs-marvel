import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-0 mt-0 md:mt-8 h-[500px]">
            <div className="flex-shrink-0">
                <Skeleton className="h-[500px] w-[500px] rounded-xl" />
            </div>
            <div className="space-y-4 text-center md:text-left w-full">
                <Skeleton className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl align-top" />
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-24 w-full" />
                <div className="grid gap-2 w-full">
                    <Skeleton className="h-8 w-[150px]" />
                    <div>
                        <Skeleton className="h-40 w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}