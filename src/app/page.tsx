"use client";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import RecentProject from "@/components/recentProject";
import { FloatingNav } from "@/components/ui/floatingNavbar";
import { navItems } from "../../data";
import Exprience from "@/components/exprience";
import Approach from "@/components/approach";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="py-4 relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Exprience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
