import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-1/5" />
      <main className="w-4/5 bg-gray-200">OK</main>
    </div>
  );
}
