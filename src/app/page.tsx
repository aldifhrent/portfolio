import Contacts from "@/components/sections/contacts";
import Footer from "@/components/sections/footer";
import Profile from "@/components/sections/profile";
import Projects from "@/components/sections/projects";
import Study from "@/components/sections/study";
import WorkExperience from "@/components/sections/workexperience";


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
