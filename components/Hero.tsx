"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white flex justify-center overflow-hidden">
      {/* 1. 데스크톱(xl): 100vh에서 헤더 높이 87px을 뺍니다.
          2. 태블릿/모바일: 헤더가 플로팅(영역 없음)이므로 100vh 전체를 사용합니다.
      */}
      <div className="w-full max-w-[1600px] 
        h-[100vh] xl:h-[calc(100vh-87px)] 
        min-h-[600px] flex flex-col items-center px-[20px] md:px-[80px] pb-[80px] relative">
        
        {/* 상단: 휴대폰 목업 영역 */}
        <div className="flex-1 w-full flex flex-col justify-end items-center pt-[40px]">
          <div className="relative w-full max-w-[788px] aspect-[788/666]">
            <img 
              src="/asset/hero/phone_mockup.png" 
              alt="Phone Mockup" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 하단: 텍스트 및 버튼 영역 */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-10 md:gap-0 mt-[40px] xl:mt-[70px]">
          <div className="flex flex-col items-start gap-[6px]">
            <span className="text-[16px] md:text-[20px] font-semibold leading-[28px] tracking-[-0.12px] text-[#A1A1A1] font-['Wanted_Sans']">
              BEOMSEO’S PORTFOLIO
            </span>
            <h1 className="text-[32px] md:text-[48px] font-bold leading-[1.1] md:leading-[52px] tracking-[0.23px] bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-fade">
              완전함의 재정의.<br />
              기획부터 개발까지.
            </h1>
          </div>

          {/* CTA 버튼 */}
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex flex-row items-center p-[10px] pl-[26px] gap-[16px] bg-[#EEEEF2] rounded-[100px] h-[56px] group cursor-default transition-all"
          >
            <span className="text-[14px] md:text-[16px] font-bold text-[#171717] font-['Wanted_Sans']">
              성장 가능성을 먼저 만나보세요
            </span>
            <div className="w-[36px] h-[36px] bg-[#007AFF] rounded-full flex items-center justify-center transition-transform group-hover:translate-y-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}