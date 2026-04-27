import Nav from "@/components/case-study/Nav";
import Hero from "@/components/case-study/Hero";
import Overview from "@/components/case-study/Overview";
import ProblemSolution from "@/components/case-study/ProblemSolution";
import Features from "@/components/case-study/Features";
import Architecture from "@/components/case-study/Architecture";
import Evolution from "@/components/case-study/Evolution";

import Impact from "@/components/case-study/Impact";
import Reflection from "@/components/case-study/Reflection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <ProblemSolution />
        <Features />
        <Architecture />
        <Evolution />
        
        <Impact />
        <Reflection />
      </main>
    </div>
  );
};

export default Index;
