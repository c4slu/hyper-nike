import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingShop() {
  return (
    <div className="h-[calc(100vh-10.25rem)] flex justify-between items-center px-24">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-72 h-10 rounded-full" />
        <Skeleton className="w-60 h-8 rounded-full" />
        <Skeleton className="w-80 h-8 rounded-full" />
        <Skeleton className="w-72 h-12 mt-44 rounded-full " />
      </div>
      <div>
        <Skeleton className="w-[600px] h-[500px] mt-10 rounded-lg" />
      </div>
    </div>
  );
}
