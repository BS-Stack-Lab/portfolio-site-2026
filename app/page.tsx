import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="xl:pt-[87px]">
        {/* 임시 콘텐츠 섹션 */}
        <section id="hero" className="flex items-center justify-center h-screen bg-gray-50">
          <h1 className="text-3xl font-bold">여기는 Hero 섹션입니다.</h1>
        </section>
      </main>
    </div>
  );
}