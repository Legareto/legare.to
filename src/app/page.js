import Sidebar from "@/components/Sidebar";

export default function Home(props) {
  const title = "Accueil";

  return (
    <div>
      <Sidebar title={title} />
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>
    </div>
  );
}
