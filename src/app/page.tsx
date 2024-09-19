import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <Profile />
      <Header />
      <Work />
      <Projects />

      <Contacts />
      <Footer />
    </main>
  );
}
