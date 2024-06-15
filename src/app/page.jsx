import Header from "./components/Header";
import BiLine from "./components/BiLine";
import MainAbout from "./components/MainAbout";
import MoreAbout from "./components/MoreAbout";

export default function Home() {
  return (
    <main className="">
      <Header />
      <BiLine />

      <MainAbout />

      <MoreAbout />
    </main>
  );
}
