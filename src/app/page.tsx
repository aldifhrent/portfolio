import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import TopMenu from "@/components/top-menu";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <TopMenu />
      <Profile />
      <Header />
      <Projects />
      <Work />
      <Contacts />
      <Footer />
    </main>
  );
}
