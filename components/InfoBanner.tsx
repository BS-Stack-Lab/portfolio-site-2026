"use client";

import React from "react";

export default function InfoBanner() {
  return (
    <section className="relative w-full overflow-hidden transition-all duration-300
      /* 배경 그라데이션 */
      bg-gradient-to-b from-[#F5F5F7] to-[#FFFFFF]
      /* 전체 높이 가이드 유지 */
      xl:h-[1558px] md:h-auto h-auto">
      
      {/* 중앙 정렬 컨테이너 
        pt-[140px]: 첫 요소인 '내 정보.'의 가이드 top 위치
      */}
      <div className="relative w-full max-w-[1280px] mx-auto flex flex-col items-center pt-[140px] px-[20px]">
        
        {/* 요소들 사이의 간격을 일괄 32px로 고정 (a, b, c 사이) */}
        <div className="flex flex-col items-center gap-[32px] w-full text-center">
          
          {/* a. 소제목: 내 정보. */}
          <span className="font-wanted font-bold xl:text-[24px] xl:leading-[32px] md:text-[24px] md:leading-[32px] text-[16px] leading-[24px] tracking-[-0.23px] text-[#171717]">
            내 정보.
          </span>

          {/* b. 메인 타이틀: 더욱더 과감하게. 더욱더 세밀하게. */}
          <h2 className="w-full max-w-[800px] font-wanted font-bold 
            xl:text-[80px] xl:leading-[94px] md:text-[72px] md:leading-[84px] text-[40px] leading-[48px]
            tracking-[0.23px]
            bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent">
            더욱더 과감하게.<br className="md:hidden" /> 더욱더 세밀하게.
          </h2>

          {/* c. 설명 문구 */}
          {/* c. 설명 문구: 강조 부분 색상 및 굵기 적용 */}
          <p className="w-full max-w-[700px] font-wanted font-semibold 
            xl:text-[20px] xl:leading-[28px] md:text-[20px] md:leading-[28px] text-[16px] leading-[24px]
            text-[#737373] tracking-[-0.12px] break-keep">
            새로운 가능성을 빌딩합니다.{" "}
            <span className="text-[#171717] font-bold">비전공자의 시선으로 발견한 아이디어</span>
            , 더 세밀해진 기획 그리고 구현을 향한 집요함으로 가치 있는 서비스를 설계합니다.{" "}
            <span className="text-[#171717] font-bold">기획부터 디자인을 넘어 개발까지 이어지는 폭넓은 경험</span>
            으로는 당신이 상상하는 모든 걸 더 많이 구현하고, 더 많이 보여줄 수 있죠.{" "}
            <span className="text-[#171717] font-bold">AI를 적극 활용하여 앞당긴 실행력</span>{" "}
            덕에 더 부드러워진 작업 흐름과 더 몰입감 넘치는 프로젝트 빌딩도 즐길 수 있습니다. 직접 그 진가를 확인해 보세요.
          </p>
        </div>

        {/* 설명 문구(c)와 폰 목업 사이의 간격 48px 적용 */}
        <div className="xl:mt-[48px] mb:mt-[48px] mt-[40px] w-full max-w-[905px] flex justify-center">
          <div className="relative w-full aspect-[905/946]">
            <img 
              src="/asset/infoBanner/infoPhone.png" 
              alt="Phone Mockup"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}