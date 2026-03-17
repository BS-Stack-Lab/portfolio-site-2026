"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white flex justify-center overflow-hidden">
      {/* 1. xl(1280px 이상): 높이를 930px로 고정합니다.
        2. 그 미만: h-screen 또는 min-h-[700px]로 유동적으로 조절합니다.
      */}
      <div className="w-full max-w-[1600px] 
        xl:h-[930px] h-screen min-h-[700px]
        flex flex-col items-center px-[20px] md:px-[80px] pb-[80px] relative">
        
        {/* 상단: 휴대폰 목업 (WebM 영상 적용) */}
        <div className="flex-1 w-full flex flex-col justify-end items-center pt-[40px]">
          <div className="relative w-full max-w-[788px] aspect-[788/666]">
            <video autoPlay loop muted playsInline className="w-full h-full object-contain">
              <source src="/asset/hero/phone_mockup.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 하단: 텍스트 및 버튼 영역 - 고정 높이 안에서 위치를 잡습니다. */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-10 md:gap-0 mt-[40px] xl:mt-[70px]">
          <div className="flex flex-col items-start gap-[6px]">
            <span className="text-[16px] md:text-[20px] font-semibold leading-[28px] tracking-[-0.12px] text-[#A1A1A1] font-wanted">
              BEOMSEO’S PORTFOLIO
            </span>
            <h1 className="text-[32px] md:text-[48px] font-bold leading-[1.1] md:leading-[52px] tracking-[0.23px] font-wanted bg-[linear-gradient(94.77deg,#449EFF_0%,#449EFF_40%,#449EFF_65%,#A4D0FF_85%,#BDDDFF_100%)] bg-clip-text text-transparent bg-[length:300%_auto] bg-[position:100%_50%] animate-rainbow-flow">
              완전함의 재정의.<br />
              기획부터 개발까지.
            </h1>
          </div>

          {/* CTA 버튼 (Lottie 아이콘 적용) */}
          <button 
            onClick={() => window.scrollTo({ top: 930, behavior: 'smooth' })}
            className="flex flex-row items-center p-[10px] pl-[26px] gap-[16px] bg-[#EEEEF2] rounded-[100px] h-[56px] group cursor-default transition-all"
          >
            <span className="text-[14px] md:text-[16px] font-bold text-[#171717] font-wanted">
              성장 가능성을 먼저 만나보세요
            </span>
            <div className="w-[36px] h-[36px] bg-[#007AFF] rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:translate-y-1">
              <img 
                src="/asset/hero/hero_arrow.gif" 
                alt="arrow icon" 
                className="w-20 h-20 object-contain scale-150" 
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}