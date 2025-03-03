import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Study from "@/components/study";
import WorkExperience from "@/components/workexperience";

export default function Home() {
  return (
    <main>
      <Profile />
      <Study/>
      <WorkExperience />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}
