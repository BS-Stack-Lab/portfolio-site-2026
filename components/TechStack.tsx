"use client";

import React, { useState, useEffect } from "react";
import TechModal from "./TechModal"; 

export default function TechStack() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 오픈 시 본문 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  const assetPath = "/asset/techStack/";
  const iconPath = "/asset/icons/";

  return (
    <section className="relative w-full bg-white flex flex-col items-center xl:py-[140px] md:py-[100px] py-[80px] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] flex flex-col items-center xl:gap-[100px] md:gap-[80px] gap-[60px]">
        
        {/* 타이틀 영역 */}
        <div className="md:w-[80%] w-full flex justify-start">
          <h2 className="font-wanted font-bold tracking-[0.23px] xl:text-[64px] xl:leading-[78px] md:text-[48px] md:leading-[60px] text-[32px] leading-[42px] max-w-[603px]
            bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent">
            디자인과 로직의 조화. <br className="hidden md:block" />
            감각적인 기획에 개발의 정교함을 더하다.
          </h2>
        </div>

        {/* 이미지 영역 */}
        <div className="w-full flex justify-center">
          <div className="w-[80%] max-w-[1124px]">
            <img src={`${assetPath}techStack.png`} alt="Tech Stack" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 하단 텍스트 및 버튼 영역 */}
        <div className="w-full flex flex-col items-center gap-[60px] md:gap-[80px]">
          <div className="md:w-[80%] w-full flex flex-col md:flex-row justify-between items-start gap-[40px] md:gap-[60px] xl:gap-[88px]">
            <p className="font-wanted font-semibold text-[#737373] xl:text-[20px] xl:leading-[28px] md:text-[18px] md:leading-[26px] text-[15px] leading-[1.6] md:flex-1 break-keep">
              내가 상상하는 모든 것을 실체로 만드는 원동력, 저의 풀스택 툴킷입니다. 
              AI를 효율적인 파트너로 삼아 작업의 효율을 극대화하는 것은 물론, 
              보이지 않는 로직부터 사용자에게 닿는 감각적인 부분까지 모든 과정을 단단하게 빌딩하죠.
            </p>

            <div className="flex flex-col gap-[4px] md:w-auto xl:w-[343px]">
              <span className="font-wanted font-semibold text-[#A1A1A1] text-[14px]">최대</span>
              <h3 className="font-wanted font-bold xl:text-[40px] xl:leading-[52px] md:text-[32px] text-[24px]
                bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent">
                상상을 실체로 만드는 <br /> 압도적 가속도.
              </h3>
              <span className="font-wanted font-semibold text-[#A1A1A1] text-[14px]">
                AI 기반 가속 워크플로 및 통합 빌딩 환경 기반 시
              </span>
            </div>
          </div>

          {/* 모달 실행 버튼 */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex flex-row items-center justify-between pl-[24px] pr-[10px] w-[194px] h-[56px] bg-[#EEEEF2] rounded-full transition-all hover:bg-[#E5E5E5] active:scale-95"
          >
            <span className="font-wanted font-bold text-[#171717] text-[16px]">
              기술 스택 더보기
            </span>
            <div className="w-[36px] h-[36px] bg-[#0071E3] rounded-full flex items-center justify-center transition-transform group-hover:rotate-90">
              <img src={`${iconPath}plus.svg`} alt="add" className="w-[20px] h-[20px]" />
            </div>
          </button>
        </div>
      </div>

      {/* 모달 컴포넌트 호출 */}
      <TechModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}