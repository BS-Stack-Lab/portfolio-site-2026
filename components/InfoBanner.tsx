"use client";

import React from "react";

export default function InfoBanner() {
  return (
    <section className="relative w-full overflow-hidden transition-all duration-300
      /* 배경 그라데이션 설정 */
      bg-gradient-to-b from-[#F5F5F7] to-[#FFFFFF]
      /* 데스크톱 기준 높이 */ xl:h-[1558px] md:h-[1300px] h-[1000px]">
      
      {/* 콘텐츠 중앙 정렬 컨테이너 */}
      <div className="relative w-full max-w-[1280px] h-full mx-auto flex flex-col items-center">
        
        {/* 1. 소제목: 내 정보. */}
        <span className="absolute top-[140px] font-wanted font-bold text-[24px] leading-[32px] tracking-[-0.23px] text-[#171717] text-center">
          내 정보.
        </span>

        {/* 2. 메인 타이틀: 더욱더 과감하게. 더욱더 세밀하게. */}
        <h2 className="absolute top-[204px] w-full max-w-[700px] font-wanted font-bold 
          xl:text-[80px] xl:leading-[94px] md:text-[60px] md:leading-[72px] text-[40px] leading-[48px]
          text-center tracking-[0.23px]
          /* 그라데이션 텍스트 처리 */
          bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent">
          더욱더 과감하게.<br className="md:hidden" /> 더욱더 세밀하게.
        </h2>

        {/* 3. 설명 문구 */}
        <p className="absolute top-[424px] w-full max-w-[700px] px-[20px] font-wanted font-semibold 
          xl:text-[20px] xl:leading-[28px] text-[16px] leading-[24px]
          text-center text-[#737373] tracking-[-0.12px] break-keep">
          새로운 가능성을 빌딩합니다. 비전공자의 시선으로 발견한 아이디어, 더 세밀해진 기획 그리고 구현을 향한 집요함으로 가치 있는 서비스를 설계합니다. 기획부터 디자인을 넘어 개발까지 이어지는 폭넓은 경험으로는 당신이 상상하는 모든 걸 더 많이 구현하고, 더 많이 보여줄 수 있죠. AI를 적극 활용하여 앞당긴 실행력 덕에 더 부드러워진 작업 흐름과 더 몰입감 넘치는 프로젝트 빌딩도 즐길 수 있습니다. 직접 그 진가를 확인해 보세요.
        </p>

        {/* 4. 폰 목업 영역 (첨부된 이미지 사용) */}
        <div className="absolute top-[612px] w-full max-w-[905px] flex justify-center">
          <div className="relative w-full aspect-[905/946]">
            <img 
              src="/asset/infoBanner/infoPhone.jpg" 
              alt="Phone Mockup"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}