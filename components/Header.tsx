import { siteConfig } from "@/constants/data";

export default function Header() {
  return (
    <>
      {/* --- 1. 데스크톱 헤더 (1280px 이상에서만 보임) --- */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden xl:flex flex-col w-full pointer-events-none">
        {/* 기존 데스크톱 코드 유지 */}
        <div className="w-full h-[36px] bg-black flex items-center justify-between px-5 pointer-events-auto">
          <div className="flex items-center gap-4">
            <span className="text-white text-lg"></span>
            <span className="text-[13px] font-bold text-[#FAFAFA]">{siteConfig.name}</span>
          </div>
          <div className="flex items-center gap-4 text-[#FAFAFA] text-[11px] font-semibold text-white">
            <span>100%</span>
            <span>한</span>
            <span>3월 4일 (수) 오후 9:09</span>
          </div>
        </div>

        <div className="w-full h-[51px] bg-white border-b border-[#E6E6E6] flex items-center px-4 gap-4 pointer-events-auto">
          <div className="flex-none bg-[#F8F8F8] px-6 py-1.5 rounded-full border border-gray-100">
            <span className="text-[12px] text-[#7F7F7F]">{siteConfig.domain}</span>
          </div>
          <div className="flex-grow flex items-center bg-[#ECECEC] rounded-full p-[2px] gap-[2px]">
            <a href={siteConfig.links.portfolio} className="flex-1 flex items-center justify-center gap-2 h-8 bg-[#F8F8F8] rounded-full hover:bg-white transition-colors">
              <span className="text-[12px] font-medium text-[#171717]">BeomSeo’s Portfolio</span>
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors">
              <span className="text-[12px] font-medium text-[#171717]">GitHub 바로가기</span>
            </a>
            <a href={siteConfig.links.blog} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors border-l border-gray-300">
              <span className="text-[12px] font-medium text-[#171717]">블로그 바로가기</span>
            </a>
          </div>
        </div>
      </header>

      {/* --- 2. 모바일/태블릿 하단 탭바 (1280px 미만에서 보임) --- */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 xl:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 pb-safe">
        <div className="flex justify-around items-center h-[64px] px-6">
          {/* 포트폴리오 탭 */}
          <a href={siteConfig.links.portfolio} className="flex flex-col items-center gap-1 group">
            <div className="w-6 h-6 bg-gradient-to-br from-[#D4E8FF] to-[#007AFF] rounded-md transition-transform group-active:scale-90" />
            <span className="text-[10px] font-medium text-gray-900">포트폴리오</span>
          </a>

          {/* GitHub 탭 */}
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="w-6 h-6 bg-[#1B1F23] rounded-md flex items-center justify-center text-white text-[12px] transition-transform group-active:scale-90">
              G
            </div>
            <span className="text-[10px] font-medium text-gray-500">GitHub</span>
          </a>

          {/* 블로그 탭 */}
          <a href={siteConfig.links.blog} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="relative w-6 h-6 flex items-center justify-center transition-transform group-active:scale-90">
              <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full" />
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <span className="text-[10px] font-medium text-gray-500">블로그</span>
          </a>
        </div>
      </nav>
    </>
  );
}