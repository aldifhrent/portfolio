import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import WorkExperience from "@/components/workexperience";

export default function Home() {
  return (
    <main>
      <Profile />
      <WorkExperience />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}
