"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // 버튼 활성화 상태 관리 (옵션)
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 스크롤 상태 업데이트 함수
  const updateButtonStates = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10); // 10px 이상 스크롤 시 왼쪽에 여유가 있다고 판단
      setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateButtonStates);
      updateButtonStates(); // 초기화
      window.addEventListener('resize', updateButtonStates);
      
      return () => {
        container.removeEventListener("scroll", updateButtonStates);
        window.removeEventListener('resize', updateButtonStates);
      };
    }
  }, [updateButtonStates]);

  // 🛠 핵심 수정: 한 칸씩 이동하는 스마트 스크롤 로직 🛠
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      
      // 현재 스크롤 위치를 기준으로 가장 가까운 카드의 인덱스를 계산
      // w-[calc(100vw-40px)]과 md:w-[500px]을 고려하여 유동적으로 너비를 가져옵니다.
      const cards = container.getElementsByClassName("summary-card");
      if (cards.length === 0) return;
      
      const firstCard = cards[0] as HTMLElement;
      // 카드 한 장의 너비 + 간격(gap-20)
      const moveDistance = firstCard.offsetWidth + 20;

      container.scrollBy({
        left: direction === "left" ? -moveDistance : moveDistance,
        behavior: "smooth",
      });
    }
  };

  const assetPath = "/asset/aboutMe/";

  const cardData = [
    { 
      title: "비전공자의 시선. 일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.",
      src: `${assetPath}about_01.png` // 실제 이미지 파일명으로 수정 필요
    },
    { 
      title: "디자인과 개발의 융합. 상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.",
      src: `${assetPath}about_02.png` // 실제 이미지 파일명으로 수정 필요
    },
    { 
      title: "풀스택 빌더를 향한 몰입. 기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.",
      src: `${assetPath}about_03.png` // 실제 이미지 파일명으로 수정 필요
    }
  ];

  return (
    // 최외곽 section
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden transition-all duration-300
      /* 데스크톱 가이드 */ xl:h-[782px] xl:py-[80px]
      /* 태블릿/모바일 (유동적) */ md:h-auto h-auto md:py-[60px] py-[40px]">
      
      {/* 글로벌 CSS: 스크롤바 숨김 처리 */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 🛠 1. 최외곽 콘텐츠 컨테이너: 중앙 정렬 및 너비 제한 🛠
          - mx-auto: 1600px 초과 시 중앙 정렬
          - max-w-[1600px]: 데스크톱 너비 제한
          - px-[20px] md:px-[40px] xl:px-[80px]: 반응형 패딩 적용 (1600이하에서 양옆 80px)
      */}
      <div className="relative w-full max-w-[1600px] mx-auto h-full flex flex-col xl:items-end items-center px-[20px] md:px-[40px] xl:px-[80px] gap-[64px]">
        
        {/* 상단 타이틀 및 카드 영역 */}
        <div className="w-full xl:max-w-[1200px] flex flex-col gap-[40px]">
          
          {/* 타이틀 */}
          <div className="w-full flex justify-start">
            <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px]
              xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
              배우고 또 배우고. 만들고 또 만들고.
            </h2>
          </div>

          {/* 🛠 2. 카드 스크롤 영역 (snap-x mandatory 추가) 🛠
              - snap-x mandatory: 터치 스크롤 시 자석처럼 딱 붙게 만듦
          */}
          <div 
            ref={scrollRef} 
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x mandatory pb-5"
          >
            <div className="flex flex-row gap-[20px] md:w-max w-max">
              {cardData.map((card, index) => (
                // 🛠 3. 카드 스냅 아이템 (snap-center 추가) 🛠
                <div 
                  key={index}
                  className="summary-card relative flex-shrink-0 flex flex-col items-start gap-[20px] snap-center
                    xl:w-[640px] xl:h-[436px] md:w-[500px] w-[calc(100vw-40px)]"
                >
                  <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden">
                    <img src={card.src} alt="" className="w-full h-full object-cover"/>
                  </div>
                  {/* 설명 문구 (패딩 비율 20% 적용) */}
                  <div className="w-full h-[56px] flex items-start xl:pl-[16px] xl:pr-[128px] xl:py-[4px] md:px-[12px] px-[8px] gap-[4px]">
                    <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] xl:text-[16px] xl:leading-[24px] text-[14px]">
                      {/* 강조 조건부 처리 */}
                      {index === 0 && <><span className="text-[#171717] font-bold">비전공자의 시선.</span> 일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.</>}
                      {index === 1 && <><span className="text-[#171717] font-bold">디자인과 개발의 융합.</span> 상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.</>}
                      {index === 2 && <><span className="text-[#171717] font-bold">풀스택 빌더를 향한 몰입.</span> 기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.</>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 버튼 영역 */}
        <div className="w-full max-w-[1200px] flex justify-end xl:justify-end md:justify-center justify-center">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            {/* 왼쪽 버튼 */}
            <button 
              onClick={() => handleScroll("left")}
              className={`relative w-[44px] h-[44px] bg-[#F5F5F7] rounded-full flex items-center justify-center active:scale-95 transition-all
                ${canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!canScrollLeft}
            >
              <span className="text-[#A1A1A1]">←</span>
            </button>
            {/* 오른쪽 버튼 */}
            <button 
              onClick={() => handleScroll("right")}
              className={`relative w-[44px] h-[44px] bg-[#E5E5E5] rounded-full flex items-center justify-center active:scale-95 transition-all
                ${canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!canScrollRight}
            >
              <span className="text-[#737373]">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}