import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import InfoBanner from "@/components/InfoBanner";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import ProjectBanner from "@/components/ProjectBanner";
import Projects from "@/components/Projects";
import ValueFooter from "@/components/ValueFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      {/* 87px 마진으로 블랙 바 영역 확보 */}
      <main className="xl:mt-[87px] min-h-[calc(100vh-87px)]">
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-87px)]">
          {/* 콘텐츠 */}
          <Hero />
          <Summary />
          <InfoBanner />
          <AboutMe />
          <TechStack />
          <ProjectBanner />
          <Projects />
          <ValueFooter />
        </section>
      </main>
    </div>
  );
}