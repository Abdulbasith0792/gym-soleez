import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
      </div>
      <div>
        <About />
      </div>
    </main>
  );
}
