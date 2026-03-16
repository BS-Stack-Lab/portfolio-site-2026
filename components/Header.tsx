import { siteConfig } from "@/constants/data";

export default function Header() {
  return (
    <>
      {/* --- 1. 데스크톱 헤더 (1280px 이상) --- */}
      <header className="fixed top-0 left-0 right-0 z-[100] hidden xl:flex flex-col w-full">
        
        {/* macOS Menu Bar (Black) */}
        <div className="w-full h-[36px] bg-[#000000] flex flex-row justify-between items-center px-[10px] py-[5px] relative">
          
          {/* Group - Leading (Apple Logo + App Name) */}
          <div className="flex flex-row items-center gap-[0px]">
             {/* Apple Logo Placeholder */}
            <div className="w-[33px] h-[24px] flex items-center justify-center relative">
              <span className="text-[#FAFAFA] text-[16px]"></span>
            </div>
            {/* App Name */}
            <div className="flex flex-row items-start px-[11px] py-[4px] gap-[10px]">
              <span className="text-[13px] font-bold leading-[16px] text-[#FAFAFA] text-center whitespace-nowrap">
                {siteConfig.name}
              </span>
            </div>
          </div>

          {/* Frame - Trailing (Status Items) */}
          <div className="flex flex-row items-center justify-end gap-[0px]">
            {/* 배터리 */}
            <div className="flex flex-row items-center px-[11px] py-[5px] gap-[4px]">
              <span className="text-[11px] font-semibold leading-[14px] tracking-[0.311px] text-[#FAFAFA]">100%</span>
              <div className="relative w-[28px] h-[12px]">
                {/* Rectangle 17 (Border) */}
                <div className="absolute w-[24px] h-[12px] border border-white/40 rounded-[4px]" />
                {/* Rectangle 18 (Fill) */}
                <div className="absolute w-[20px] h-[8px] left-[3px] top-[2px] bg-white rounded-[2.5px]" />
                {/* Rectangle 19 (Tip) */}
                <div className="absolute w-[1.5px] h-[4px] left-[26px] top-[4px] bg-white/40 rounded-r-[10px]" />
              </div>
            </div>

            {/* Icons (Wi-Fi, Search, etc. - Icons from image) */}
            <div className="flex flex-row items-center">
              <div className="px-[11px] py-[4px] flex items-center"><span className="text-[#FAFAFA] text-[13px]">한</span></div>
              <div className="px-[11px] py-[4px] flex items-center text-[#FAFAFA] text-[14px]">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 12L0 3.5C2.5 1 5.5 0 9 0C12.5 0 15.5 1 18 3.5L9 12Z" fill="white"/></svg>
              </div>
              <div className="px-[11px] py-[4px] flex items-center text-[#FAFAFA] text-[14px]">🔍</div>
              <div className="px-[11px] py-[4px] flex items-center text-[#FAFAFA] text-[14px]">⊚</div>
            </div>

            {/* Date & Time */}
            <div className="px-[11px] py-[4px] min-w-[149px]">
              <span className="text-[13px] font-semibold leading-[18px] tracking-[0.252px] text-[#FAFAFA] whitespace-nowrap">
                3월 4일 (수) 오후 9:09
              </span>
            </div>
          </div>
        </div>

        {/* 2. Browser Address Bar Style (White) */}
        <div className="w-full h-[51px] bg-white border-b border-[#E6E6E6] flex items-center px-4 gap-4 pointer-events-auto">
          {/* ... (기존 주소창 코드 유지) ... */}
          <div className="flex-none bg-[#F8F8F8] px-6 py-1.5 rounded-full border border-gray-100">
            <span className="text-[12px] text-[#7F7F7F]">{siteConfig.domain}</span>
          </div>
          <div className="flex-grow flex items-center bg-[#ECECEC] rounded-full p-[2px] gap-[2px]">
            <a href={siteConfig.links.portfolio} className="flex-1 flex items-center justify-center gap-2 h-8 bg-[#F8F8F8] rounded-full hover:bg-white transition-colors">
              <img src="/asset/pavicon/portfolio.png" alt="P" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">BeomSeo’s Portfolio</span>
            </a>
            <a href={siteConfig.links.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors">
              <img src="/asset/pavicon/github.png" alt="G" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">GitHub 바로가기</span>
            </a>
            <a href={siteConfig.links.blog} target="_blank" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors border-l border-gray-300">
              <img src="/asset/pavicon/blog.png" alt="B" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">블로그 바로가기</span>
            </a>
          </div>
        </div>
      </header>

      {/* --- 2. 모바일/태블릿 하단 탭바 (1280px 미만) --- */}
<div className="fixed bottom-0 left-0 right-0 z-[100] xl:hidden flex justify-center items-end pb-[24px] pointer-events-none">
  <nav 
    className="flex flex-row items-center h-[52px] px-[24px] gap-[12px] bg-white/40 backdrop-blur-[10px] rounded-[100px] border border-white/30 shadow-lg pointer-events-auto"
    style={{ width: 'fit-content' }}
  >
    {/* 포트폴리오 탭 */}
    <a href={siteConfig.links.portfolio} className="flex flex-col items-center justify-center w-[56px] h-full gap-[2px] group">
      <div className="w-[24px] h-[24px] rounded-[6.24px] overflow-hidden flex items-center justify-center bg-white">
        {/* 수정 포인트: 경로 맨 앞의 / 확인 및 'pavicon' 폴더명 실제와 대조 필수 */}
        <img 
          src="/asset/pavicon/portfolio.png" 
          alt="Portfolio" 
          className="w-full h-full object-contain transition-transform group-active:scale-90" 
        />
      </div>
      <span className="text-[11px] font-medium leading-[14px] tracking-[0.311px] text-[#171717]">포트폴리오</span>
    </a>

    {/* GitHub 탭 */}
    <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-[56px] h-full gap-[2px] group">
      <div className="w-[24px] h-[24px] rounded-[6px] overflow-hidden flex items-center justify-center bg-white">
        <img 
          src="/asset/pavicon/github.png" 
          alt="GitHub" 
          className="w-full h-full object-contain transition-transform group-active:scale-90" 
        />
      </div>
      <span className="text-[11px] font-medium leading-[14px] tracking-[0.311px] text-[#A1A1A1]">GitHub</span>
    </a>

    {/* 블로그 탭 */}
    <a href={siteConfig.links.blog} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-[56px] h-full gap-[2px] group">
      <div className="w-[24px] h-[24px] rounded-[6.24px] overflow-hidden flex items-center justify-center bg-white">
        <img 
          src="/asset/pavicon/blog.png" 
          alt="Blog" 
          className="w-full h-full object-contain transition-transform group-active:scale-90" 
        />
      </div>
      <span className="text-[11px] font-medium leading-[14px] tracking-[0.311px] text-[#A1A1A1]">블로그</span>
    </a>
  </nav>
</div>
    </>
  );
}