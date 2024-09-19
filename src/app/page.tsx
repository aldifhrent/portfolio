import WorkExperience from "@/components/work";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Profile from "@/components/profile";
import TopMenu from "@/components/top-menu";
import Work from "@/components/work";
import Contacts from "@/components/contacts";

export default function Home() {
  return (
    <main>
      <TopMenu />
      <Profile />
      <Header />
      <Projects />
      <Work />
      <Contacts />
    </main>
  );
}
