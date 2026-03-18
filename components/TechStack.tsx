"use client";

import React from "react";

export default function TechStack() {
  const assetPath = "/asset/techStack/";
  const iconPath = "/asset/icons/";

  return (
    <section className="relative w-full bg-white flex flex-col items-center transition-all duration-300 xl:py-[140px] md:py-[100px] py-[80px] overflow-hidden">
      {/* 🛠 1. 상위 가이드 컨테이너: 1600px 제한 및 좌우 패딩 일괄 적용 */}
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] flex flex-col gap-[100px] items-center">
        
        {/* 상단 타이틀 영역 */}
        <div className="w-full flex justify-start">
          <h2 className="font-wanted font-bold tracking-[0.23px] xl:text-[64px] xl:leading-[78px] md:text-[48px] md:leading-[60px] text-[32px] leading-[42px] max-w-[603px]
            bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent">
            디자인과 로직의 조화. <br className="hidden md:block" />
            감각적인 기획에 개발의 정교함을 더하다.
          </h2>
        </div>

        {/* 🛠 2. 이미지 영역: 가로 길이 80% 설정 */}
        <div className="w-full flex justify-center overflow-visible">
          <div className="w-[80%] max-w-[1124px]">
            <img 
              src={`${assetPath}techStack.png`} 
              alt="Tech Stack Devices" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* 🛠 3. 하단 텍스트 및 버튼 영역 (반응형 정렬) 🛠 */}
        <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-end gap-[60px] xl:gap-[88px]">
          
          {/* 왼쪽 설명글: 모바일에서는 왼쪽 정렬, PC에서는 지정된 너비 */}
          <p className="font-wanted font-semibold text-[#737373] tracking-[-0.12px] xl:text-[20px] xl:leading-[28px] md:text-[18px] text-[15px] leading-[1.6] xl:max-w-[700px] break-keep">
            내가 상상하는 모든 것을 실체로 만드는 원동력, 저의 풀스택 툴킷입니다. 
            AI를 효율적인 파트너로 삼아 작업의 효율을 극대화하는 것은 물론, 
            보이지 않는 로직부터 사용자에게 닿는 감각적인 부분까지 모든 과정을 단단하게 빌딩하죠. 
            기획부터 디자인까지 직접 고민하며 쌓아온 저의 폭넓은 시야는 아이디어를 정교하게 설계하고, 
            구체화하여 세상에 내놓을 수 있게 해줍니다. 완벽한 결과물을 향한 집요함은 아주 작은 디테일까지 
            놓치지 않고 설계하여 사용자에게 결점 없는 경험을 선사하게 한답니다.
          </p>

          {/* 오른쪽 서브 타이틀 및 버튼 */}
          <div className="flex flex-col gap-[32px] items-start xl:w-[343px]">
            <div className="flex flex-col gap-[4px]">
              <span className="font-wanted font-semibold text-[#A1A1A1] text-[14px] leading-[20px] tracking-[0.145px]">최대</span>
              <h3 className="font-wanted font-bold tracking-[0.23px] xl:text-[40px] xl:leading-[52px] md:text-[32px] text-[24px]
                bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent">
                상상을 실체로 만드는 <br /> 압도적 가속도.
              </h3>
              <span className="font-wanted font-semibold text-[#A1A1A1] text-[14px] leading-[20px] tracking-[0.145px]">
                AI 기반 가속 워크플로 및 통합 빌딩 환경 기반 시
              </span>
            </div>

            {/* 🛠 4. Hero 버튼 스타일 적용 (SVG 플러스 아이콘) */}
            <button className="group flex flex-row items-center justify-between pl-[24px] pr-[10px] w-[194px] h-[56px] bg-[#EEEEF2] rounded-full transition-all duration-300 hover:bg-[#E5E5E5] active:scale-95">
              <span className="font-wanted font-bold text-[#171717] text-[16px] leading-[24px] tracking-[0.057px]">
                기술 스택 더보기
              </span>
              <div className="w-[36px] h-[36px] bg-[#0071E3] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-90">
                <img src={`${iconPath}plus.svg`} alt="add" className="w-[20px] h-[20px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}