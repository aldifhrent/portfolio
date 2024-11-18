import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Profile />
      {/* Experience */}
      <Projects />
      {/* Skills */}
      <Contacts />
      <Footer />
    </main>
  );
}
