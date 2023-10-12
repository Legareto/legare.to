import Sidebar from "@/components/Sidebar";

export default function Curriculumvitae(props) {
  const title = "Curriculum Vitae";

  return (
    <div>
      <Sidebar title={title} />
      <main className="lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-16">
          <h1>{title}</h1>
          <p>Accueil</p>
        </div>
      </main>
    </div>
  );
}
