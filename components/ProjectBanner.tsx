"use client";

import React from "react";

export default function ProjectBanner() {
  const assetPath = "/asset/projectBanner/";

  return (
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden
      xl:pt-[140px] md:pt-[100px] pt-[80px]
      /* 배경 그라데이션: 180도 방향으로 회색에서 흰색으로 */
      bg-gradient-to-b from-[#F5F5F7] via-white to-white">
      
      {/* 컨텐츠 중앙 정렬 가이드 (최대 1600px) */}
      <div className="w-full max-w-[1600px] flex flex-col items-center">
        
        {/* 상단 텍스트 영역 */}
        <div className="flex flex-col items-center text-center px-[20px] 
          xl:gap-[32px] md:gap-[24px] gap-[16px] xl:mb-[48px] md:mb-[40px] mb-[32px]">
          
          {/* 소제목: 구현된 결과. */}
          <span className="font-wanted font-bold text-[#171717] tracking-[-0.23px]
            xl:text-[24px] xl:leading-[32px] md:text-[20px] md:leading-[28px] text-[16px] leading-[24px]">
            구현된 결과.
          </span>

          {/* 메인 타이틀: 상상의 실체. 프로젝트 하이라이트. */}
          <h2 className="font-wanted font-bold tracking-[0.23px] break-keep
            xl:text-[80px] xl:leading-[94px] md:text-[64px] md:leading-[76px] text-[36px] leading-[44px]
            bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent">
            상상의 실체. <br />
            프로젝트 하이라이트.
          </h2>
        </div>

        {/* 하단 이미지 영역: 영역의 100% 너비 및 하단 밀착 */}
        <div className="w-full flex justify-center items-end">
          <div className="w-full xl:max-w-[1702px] flex justify-center items-end overflow-hidden">
            <img 
              src={`${assetPath}phone.png`} 
              alt="Project Highlight Mockup" 
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}