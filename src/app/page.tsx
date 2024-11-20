import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import WorkExperience from "@/components/workexperience";

export default function Home() {
  return (
    <main>
      <Profile />
      <WorkExperience/>
      <Skills/>
      <Projects />

      <Contacts />
      <Footer />
    </main>
  );
}
