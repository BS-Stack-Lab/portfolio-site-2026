// components/Header.tsx
import { siteConfig } from "@/constants/data";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden xl:flex flex-col w-full pointer-events-none">
      {/* 1. macOS Top Menu Bar (Black) */}
      <div className="w-full h-[36px] bg-black flex items-center justify-between px-5 pointer-events-auto">
        <div className="flex items-center gap-4">
          {/* Apple Logo Placeholder */}
          <span className="text-white text-lg"></span>
          <span className="text-[13px] font-bold text-[#FAFAFA]">{siteConfig.name}</span>
        </div>
        
        {/* Right Status (Battery, Time, etc.) */}
        <div className="flex items-center gap-4 text-[#FAFAFA] text-[11px] font-semibold">
          <span>100%</span>
          <div className="w-6 h-3 border border-white/40 rounded-sm relative">
            <div className="absolute inset-[1px] bg-white rounded-[1px]" />
          </div>
          <span>한</span>
          <span>3월 4일 (수) 오후 9:09</span>
        </div>
      </div>

      {/* 2. Browser Address Bar Style (White) */}
      <div className="w-full h-[51px] bg-white border-b border-[#E6E6E6] flex items-center px-4 gap-4 pointer-events-auto">
        {/* Left Side: Domain Label */}
        <div className="flex-none bg-[#F8F8F8] px-6 py-1.5 rounded-full border border-gray-100">
          <span className="text-[12px] text-[#7F7F7F]">{siteConfig.domain}</span>
        </div>

        {/* Center: Action Links (The Clickable Buttons) */}
        <div className="flex-grow flex items-center bg-[#ECECEC] rounded-full p-[2px] gap-[2px]">
          {/* Portfolio Link */}
          <a 
            href={siteConfig.links.portfolio}
            className="flex-1 flex items-center justify-center gap-2 h-8 bg-[#F8F8F8] rounded-full hover:bg-white transition-colors group"
          >
            <div className="w-4 h-4 bg-gradient-to-br from-[#D4E8FF] to-[#007AFF] rounded-[4px]" />
            <span className="text-[12px] font-medium text-[#171717]">BeomSeo’s Portfolio</span>
          </a>

          {/* GitHub Link */}
          <a 
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors"
          >
            <div className="w-4 h-4 bg-[#1B1F23] rounded-[4px] flex items-center justify-center">
              <span className="text-[10px] text-white">G</span>
            </div>
            <span className="text-[12px] font-medium text-[#171717]">GitHub 바로가기</span>
          </a>

          {/* Blog Link */}
          <a 
            href={siteConfig.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-[#FDFDFD] rounded-full transition-colors border-l border-gray-300"
          >
            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" />
            </div>
            <span className="text-[12px] font-medium text-[#171717]">블로그 바로가기</span>
          </a>
        </div>
      </div>
    </header>
  );
}