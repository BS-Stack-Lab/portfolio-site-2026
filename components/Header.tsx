import { siteConfig } from "@/constants/data";

export default function Header() {
  return (
    <>
      {/* --- 1. 데스크톱 헤더 (1280px 이상) --- */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden xl:flex flex-col w-full pointer-events-none">
        {/* macOS 메뉴바 생략 (기존 코드 유지) */}
        
        <div className="w-full h-[51px] bg-white border-b border-[#E6E6E6] flex items-center px-4 gap-4 pointer-events-auto">
          <div className="flex-none bg-[#F8F8F8] px-6 py-1.5 rounded-full border border-gray-100">
            <span className="text-[12px] text-[#7F7F7F]">{siteConfig.domain}</span>
          </div>

          <div className="flex-grow flex items-center bg-[#ECECEC] rounded-full p-[2px] gap-[2px]">
            {/* 포트폴리오 버튼 */}
            <a href={siteConfig.links.portfolio} className="flex-1 flex items-center justify-center gap-2 h-8 bg-[#F8F8F8] rounded-full hover:bg-white transition-colors">
              <img src="/asset/pavicon/portfolio.png" alt="Portfolio" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">BeomSeo’s Portfolio</span>
            </a>

            {/* GitHub 버튼 */}
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors">
              <img src="/asset/pavicon/github.png" alt="GitHub" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">GitHub 바로가기</span>
            </a>

            {/* 블로그 버튼 */}
            <a href={siteConfig.links.blog} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors border-l border-gray-300">
              <img src="/asset/pavicon/blog.png" alt="Blog" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">블로그 바로가기</span>
            </a>
          </div>
        </div>
      </header>

      {/* --- 2. 모바일/태블릿 하단 탭바 (1280px 미만) --- */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 xl:hidden bg-white/80 backdrop-blur-md border-t border-gray-200">
        <div className="flex justify-around items-center h-[64px] px-6">
          <a href={siteConfig.links.portfolio} className="flex flex-col items-center gap-1 group">
            <img src="/asset/pavicon/portfolio.png" alt="Portfolio" className="w-6 h-6 transition-transform group-active:scale-90" />
            <span className="text-[10px] font-medium text-gray-900">포트폴리오</span>
          </a>

          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <img src="/asset/pavicon/github.png" alt="GitHub" className="w-6 h-6 transition-transform group-active:scale-90" />
            <span className="text-[10px] font-medium text-gray-500">GitHub</span>
          </a>

          <a href={siteConfig.links.blog} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <img src="/asset/pavicon/blog.png" alt="Blog" className="w-6 h-6 transition-transform group-active:scale-90" />
            <span className="text-[10px] font-medium text-gray-500">블로그</span>
          </a>
        </div>
      </nav>
    </>
  );
}