// import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-main-bg text-main-text transition-colors duration-300">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold border-r border-acc-gray pr-4">
          404
        </h1>
        <p className="text-sm">This page could not be found.</p>
      </div>
    </div>
  );
}
