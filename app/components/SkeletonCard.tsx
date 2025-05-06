export const SkeletonCard: React.FC = () => {
    return (
        <div className="space-y-4">
            <div className="skeleton h-10 w-3/4 rounded-xl"></div>
            <div className="skeleton h-6 w-1/2"></div>
            <div className="skeleton h-6 w-full"></div>
        </div>
    );
}
