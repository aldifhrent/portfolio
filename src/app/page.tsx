import Header from "@/components/header";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center  justify-center min-h-screen ">
      <Header />
      <Profile />
    </main>
  );
}
