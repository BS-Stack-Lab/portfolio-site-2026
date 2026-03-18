"use client";

import React, { useRef } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 카드 이동 로직 (데스크톱 기준)
  // 카드 너비(640px) + 간격(20px) = 660px
  const cardWidth = 660; 

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const totalWidth = container.scrollWidth;
      const visibleWidth = container.offsetWidth;
      const currentScroll = container.scrollLeft;

      // 만약 오른쪽 버튼을 눌렀을 때 마지막 카드를 보여줘야 하는 상황이라면
      // 3번 카드의 오른쪽 부분이 영역의 끝에 붙도록 스크롤 위치를 직접 계산
      const isLastCardIncoming = totalWidth - (currentScroll + visibleWidth) < cardWidth;

      if (isLastCardIncoming) {
        // 마지막 카드가 영역 끝에 붙는 스크롤 위치: 전체 너비 - 보이는 너비
        container.scrollTo({ left: totalWidth - visibleWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  // 이미지 경로 변수 (임시로 public/asset폴더 가정)
  const assetPath = "/asset/aboutMe/";

  return (
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden transition-all duration-300
      /* 데스크톱 가이드 */ xl:h-[782px] xl:py-[80px]
      /* 태블릿/모바일 (유동적) */ md:h-auto h-auto md:py-[60px] py-[40px]">
      
      {/* 중앙 정렬 컨테이너 (max-w 1600px 가이드 적용) */}
      <div className="relative w-full max-w-[1600px] h-full mx-auto flex flex-col xl:items-end items-center px-[20px] md:px-[40px] gap-[64px]">
        
        {/* 상단 타이틀 및 카드 영역 */}
        <div className="w-full xl:max-w-[1200px] flex flex-col gap-[40px]">
          
          {/* 1. 타이틀: 배우고 또 배우고... */}
          <div className="w-full flex justify-start">
            <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px]
              xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
              배우고 또 배우고. 만들고 또 만들고.
            </h2>
          </div>

          {/* 2. 카드 스크롤 영역 (overflow-x-auto, scrollbar-hide 추가) */}
          <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex flex-row gap-[20px] xl:w-[1960px] md:w-max w-max pb-5">
              
              {/* 카드 1: 비전공자의 시선 */}
              <div className="summary-card relative flex-shrink-0 flex flex-col items-start gap-[20px] 
                xl:w-[640px] xl:h-[436px] md:w-[500px] w-[300px]">
                {/* Ratio/Horizontal (이미지 영역) */}
                <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden">
                  <img src={`${assetPath}about_01.jpg`} alt="" className="w-full h-full object-cover"/>
                </div>
                {/* Frame 144: 텍스트 영역 (오른쪽 패딩 20% 적용) */}
                <div className="w-full h-[56px] flex items-start 
                  /* PC: px-16, pr-128 (요청 20%적용) */ xl:pl-[16px] xl:pr-[128px] xl:py-[4px]
                  /* Tablet/Mobile (유동적) */ md:px-[12px] px-[8px] gap-[4px]">
                  <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] xl:text-[16px] xl:leading-[24px] text-[14px]">
                    <span className="text-[#171717] font-bold">비전공자의 시선.</span>{" "}
                    일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.
                  </p>
                </div>
              </div>

              {/* 카드 2: 디자인과 개발의 융합 */}
              <div className="summary-card relative flex-shrink-0 flex flex-col items-start gap-[20px] 
                xl:w-[640px] xl:h-[436px] md:w-[500px] w-[300px]">
                <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden">
                  <img src={`${assetPath}about_02.jpg`} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[56px] flex items-start xl:pl-[16px] xl:pr-[128px] xl:py-[4px] md:px-[12px] px-[8px] gap-[4px]">
                  <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] xl:text-[16px] xl:leading-[24px] text-[14px]">
                    <span className="text-[#171717] font-bold">디자인과 개발의 융합.</span>{" "}
                    상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.
                  </p>
                </div>
              </div>

              {/* 카드 3: 풀스택 빌더 */}
              <div className="summary-card relative flex-shrink-0 flex flex-col items-start gap-[20px] 
                xl:w-[640px] xl:h-[436px] md:w-[500px] w-[300px]">
                <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden">
                  <img src={`${assetPath}about_03.jpg`} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[56px] flex items-start xl:pl-[16px] xl:pr-[128px] xl:py-[4px] md:px-[12px] px-[8px] gap-[4px]">
                  <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] xl:text-[16px] xl:leading-[24px] text-[14px]">
                    <span className="text-[#171717] font-bold">풀스택 빌더를 향한 몰입.</span>{" "}
                    기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 하단 네비게이션 버튼 영역 (Frame 150) */}
        <div className="w-full max-w-[1200px] flex justify-end xl:justify-end md:justify-center justify-center">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            {/* 왼쪽 버튼 (scrollLeft) */}
            <button 
              onClick={scrollLeft}
              className="relative w-[44px] h-[44px] bg-[#F5F5F7] rounded-full flex items-center justify-center group active:scale-95 transition-all">
              {/* 화살표 (svg or 이미지가정) */}
              <span className="text-[#A1A1A1] group-hover:text-[#737373]">←</span>
            </button>
            {/* 오른쪽 버튼 (scrollRight) */}
            <button 
              onClick={scrollRight}
              className="relative w-[44px] h-[44px] bg-[#E5E5E5] rounded-full flex items-center justify-center group active:scale-95 transition-all">
              <span className="text-[#737373] group-hover:text-[#171717]">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}