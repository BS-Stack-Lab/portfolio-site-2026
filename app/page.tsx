import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      {/* 모바일에서는 하단 네비바 높이(52px) + 하단 패딩(24px) + 여유공간만큼 여백 추가 */}
      <main className="xl:pt-[87px] pb-[100px] xl:pb-0">
        <section id="hero" className="flex items-center justify-center min-h-screen bg-gray-50 text-[#171717]">
          <h1 className="text-2xl xl:text-3xl font-bold italic">BeomSeo’s Portfolio</h1>
        </section>
      </main>
    </div>
  );
}