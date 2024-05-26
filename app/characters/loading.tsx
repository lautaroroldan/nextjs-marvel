import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
                <Skeleton className="h-[45px] w-[300px] rounded-sm" />
                <Skeleton className="h-[45px] w-[350px] rounded-sm" />
            </div>
            <Skeleton className="h-[500px] w-full rounded-xl" />
            <div className="flex gap-2 items-center justify-center">
                <Skeleton className="h-8 w-[50px]" />
                <Skeleton className="h-8 w-[50px]" />
                <Skeleton className="h-8 w-[50px]" />
            </div>
        </div>
    )
}