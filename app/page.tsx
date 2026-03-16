import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      {/* 데스크톱은 상단 여백, 모바일은 하단 여백 추가 */}
      <main className="xl:pt-[87px] pb-[64px] xl:pb-0">
        <section id="hero" className="flex items-center justify-center h-screen bg-gray-50">
          <h1 className="text-2xl xl:text-3xl font-bold">포트폴리오 내용</h1>
        </section>
      </main>
    </div>
  );
}