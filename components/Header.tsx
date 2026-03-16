"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/constants/data";

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const dayList = ["일", "월", "화", "수", "목", "금", "토"];
      const day = dayList[now.getDay()];
      
      let hours = now.getHours();
      const ampm = hours >= 12 ? "오후" : "오전";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");

      setCurrentTime(`${month}월 ${date}일 (${day}) ${ampm} ${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* --- 1. 데스크톱 헤더 (1280px 이상) --- */}
      <header className="fixed top-0 left-0 right-0 z-[100] hidden xl:flex flex-col w-full">
        
        {/* macOS Menu Bar (Black) - 상단 고정 */}
        <div className="w-full h-[36px] bg-[#000000] flex flex-row justify-between items-center px-[10px] py-[5px]">
          {/* Group - Leading */}
          <div className="flex flex-row items-center">
            {/* [수정] 애플 로고 텍스트 대신 Logo.png 이미지 적용 */}
            <div className="w-[33px] flex justify-center items-center">
              <img 
                src="/asset/header/Logo.png" 
                alt="Logo" 
                className="h-[16px] w-auto object-contain" 
              />
            </div>
          <div className="px-[11px]">
            <span className="text-[13px] font-bold text-[#FAFAFA] whitespace-nowrap">
              {siteConfig.name}
            </span>
          </div>
        </div>

          {/* Frame - Trailing */}
          <div className="flex flex-row items-center">
            {/* 배터리 */}
            <div className="flex flex-row items-center px-[11px] gap-[4px]">
              <span className="text-[11px] font-semibold text-[#FAFAFA]">100%</span>
              <div className="relative w-[24px] h-[12px] border border-white/40 rounded-[4px]">
                <div className="absolute inset-[1.5px] bg-white rounded-[1.5px] w-[18px]" />
              </div>
            </div>

            {/* Status Icons - [해결] 아이콘이 안 보일 때를 대비해 스타일 보정 */}
            <div className="flex flex-row items-center">
              <div className="px-[8px] flex items-center">
                <img src="/asset/header/kor.png" alt="KOR" className="h-[14px] w-auto brightness-200" />
              </div>
              <div className="px-[8px] flex items-center">
                <img src="/asset/header/wifi.png" alt="Wi-Fi" className="h-[12px] w-auto brightness-200" />
              </div>
              <div className="px-[8px] flex items-center">
                <img src="/asset/header/search.png" alt="Search" className="h-[14px] w-auto brightness-200" />
              </div>
              <div className="px-[8px] flex items-center">
                <img src="/asset/header/control.png" alt="Control" className="h-[14px] w-auto brightness-200" />
              </div>
            </div>

            {/* Date & Time */}
            <div className="px-[11px] min-w-[140px] text-right">
              <span className="text-[13px] font-semibold text-[#FAFAFA]">
                {currentTime || "시간 로딩 중..."}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Browser Address Bar Style (White) - 블랙 바 바로 아래 위치 */}
        <div className="w-full h-[51px] bg-white border-b border-[#E6E6E6] flex items-center px-4 gap-4">
          <div className="flex-none bg-[#F8F8F8] px-6 py-1.5 rounded-full border border-gray-100">
            <span className="text-[12px] text-[#7F7F7F]">{siteConfig.domain}</span>
          </div>
          <div className="flex-grow flex items-center bg-[#ECECEC] rounded-full p-[2px] gap-[2px]">
            <a href={siteConfig.links.portfolio} className="flex-1 flex items-center justify-center gap-2 h-8 bg-white rounded-full shadow-sm hover:bg-[#F8F8F8]">
              <img src="/asset/pavicon/portfolio.png" alt="" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">BeomSeo’s Portfolio</span>
            </a>
            <a href={siteConfig.links.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-white/50 rounded-full transition-all">
              <img src="/asset/pavicon/github.png" alt="" className="w-4 h-4" />
              <span className="text-[12px] font-medium text-[#171717]">GitHub 바로가기</span>
            </a>
            <a href={siteConfig.links.blog} target="_blank" className="flex-1 flex items-center justify-center gap-2 h-8 hover:bg-white/50 rounded-full transition-all border-l border-gray-300">
              <img src="/asset/pavicon/blog.png" alt="" className="w-4 h-4" />
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