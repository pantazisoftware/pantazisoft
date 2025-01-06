import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="container mx-auto px-4 py-12">
			<Skeleton className="h-12 w-48 mb-8" />
			<div className="flex gap-2 mb-8">
				{Array.from({ length: 5 }).map((_, i) => (
					<Skeleton
						key={i}
						className="h-10 w-20"
					/>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{Array.from({ length: 6 }).map((_, i) => (
					<Skeleton
						key={i}
						className="h-[400px] w-full rounded-lg"
					/>
				))}
			</div>
		</div>
	);
}
