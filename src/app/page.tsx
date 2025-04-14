import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className='bg-[#032739] '>
        <Hero />
      </main>
    </>
  );
}
