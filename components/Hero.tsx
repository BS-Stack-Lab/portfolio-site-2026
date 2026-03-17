"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white flex justify-center overflow-hidden transition-all duration-300">
      {/* 반응형 컨테이너 설정:
        1. 모바일: 기본 h-[564px], px-4 (16px)
        2. 태블릿: md(768px~) h-[910px], px-8 (32px)
        3. 데스크톱: xl(1280px~) h-[930px], max-w-[1600px], px-[80px], mx-auto (중앙정렬)
      */}
      <div className="w-full max-w-[1600px] mx-auto
        xl:h-[930px] md:h-[910px] h-[564px]
        xl:px-[80px] md:px-[32px] px-[16px]
        flex flex-col items-center pt-[48px] md:pt-[24px] pb-[32px] md:pb-[60px] relative">
        
        {/* 상단: 휴대폰 목업 영역 */}
        <div className="w-full flex flex-col justify-center items-center h-[258px] md:h-[574px] xl:h-[500px] overflow-hidden mb-[44px] md:mb-0">
          <div className="relative w-full max-w-[308px] md:max-w-[680px] xl:max-w-[788px] aspect-[788/666] flex justify-center items-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-contain scale-110"
            >
              <source src="/asset/hero/phone_mockup.webm" type="video/webm" />
            </video>
          </div>
        </div>

        {/* 하단: 텍스트 및 버튼 영역 
            데스크톱(xl)에서만 양끝 정렬(between), 태블릿/모바일은 왼쪽 정렬(items-start)
        */}
        <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-end gap-[32px] md:gap-[48px] xl:gap-0">
          
          {/* 텍스트 그룹 */}
          <div className="flex flex-col items-start gap-[6px] w-full">
            <span className="text-[14px] md:text-[20px] font-semibold leading-[20px] md:leading-[28px] tracking-[0.145px] md:tracking-[-0.12px] text-[#A1A1A1] font-wanted">
              BEOMSEO’S PORTFOLIO
            </span>
            <h1 className="text-[40px] md:text-[48px] font-bold leading-[38px] md:leading-[52px] tracking-[0.23px] font-wanted bg-hero-reveal bg-clip-text text-transparent bg-[length:200%_auto] animate-rainbow-shift break-keep">
              완전함의 재정의.<br />
              기획부터 개발까지.
            </h1>
          </div>

          {/* CTA 버튼 - whitespace-nowrap 추가로 글자 잘림 방지 */}
          <button 
            onClick={() => window.scrollTo({ top: 930, behavior: 'smooth' })}
            className="flex flex-row items-center p-[10px] pl-[16px] md:pl-[26px] gap-[16px] bg-[#EEEEF2] rounded-[100px] h-[48px] md:h-[56px] w-fit md:min-w-[281px] group cursor-default transition-all whitespace-nowrap"
          >
            <span className="text-[16px] font-semibold md:font-bold text-[#171717] font-wanted flex-1">
              성장 가능성을 먼저 만나보세요
            </span>
            <div className="w-[28px] md:w-[36px] h-[28px] md:h-[36px] bg-[#007AFF] rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:translate-y-1 flex-shrink-0">
              <img 
                src="/asset/hero/hero_arrow.gif" 
                alt="arrow icon" 
                className="w-20 h-20 object-contain scale-70" 
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}