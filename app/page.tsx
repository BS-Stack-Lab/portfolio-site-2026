import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      
      {/* xl:mt-[87px]: 데스크톱 헤더 높이만큼 마진을 주어 컨텐츠가 가려지지 않게 함
        min-h-[calc(100vh-87px)]: 화면 전체 높이에서 헤더 높이를 뺀 나머지를 최소 높이로 설정
      */}
      <main className="xl:mt-[87px] min-h-[calc(100vh-87px)] pb-[76px] xl:pb-0">
        <section 
          id="hero" 
          className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-87px)]"
        >
          <div className="text-center">
            <h1 className="text-4xl xl:text-6xl font-bold text-[#171717] tracking-tight">
              BeomSeo’s Portfolio
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              Next.js와 TypeScript로 구축한 현대적인 웹 경험
            </p>
          </div>
        </section>

        {/* 다른 섹션들 (예: About, Projects) */}
        <section id="about" className="h-screen bg-gray-50">
          {/* 내용 */}
        </section>
      </main>
    </div>
  );
}