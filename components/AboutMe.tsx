"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 스크롤 상태 업데이트 (1600px 안의 여백을 고려한 스마트 체크)
  const updateButtonStates = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
      const pcPadding = 80; // 데스크톱 xl 기준 좌우 패딩

      // PC에서는 좌측 여백(80px)을 고려하여 스크롤 여부 판단
      if (window.innerWidth >= 1280) {
        setCanScrollLeft(scrollLeft > pcPadding + 10);
        // 전체 너비 - (현재스크롤 + 보이는너비)가 우측 여백(80px)보다 크면 스크롤 가능
        setCanScrollRight(scrollWidth - (scrollLeft + offsetWidth) > pcPadding + 10);
      } else {
        // 모바일/태블릿은 기본 로직 적용
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 10);
      }
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

  // 🛠 데스크톱 영역(1600px) 안에서 작동하는 스마트 스크롤 로직 🛠
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const pcPadding = 80; // 데스크톱 xl 기준 좌우 패딩

      // 현재 보이는 영역에 있는 카드들을 가져옴
      const cards = container.getElementsByClassName("summary-card");
      if (cards.length === 0) return;

      const cardWidth = (cards[0] as HTMLElement).offsetWidth;
      const gap = 20;
      const moveDistance = cardWidth + gap; // 카드 한 장 + 간격만큼 이동

      let targetScroll = direction === "left" 
        ? scrollLeft - moveDistance 
        : scrollLeft + moveDistance;

      // 🛠 데스크톱(1600px) 고정 영역 안에서의 범위 제한 🛠
      if (window.innerWidth >= 1280) {
        // PC 영역 안에서의 최대 스크롤 가능 수치 계산
        // 전체너비 - 보이는너비 - 우측패딩(80px)
        const maxPCScroll = container.scrollWidth - containerWidth - pcPadding;
        
        // 왼쪽으로 갈 때, 첫 카드가 80px 라인에 오게 함
        if (targetScroll < pcPadding) targetScroll = pcPadding;
        // 오른쪽으로 갈 때, 마지막 카드의 우측이 80px 라인 안에 오게 함
        if (targetScroll > maxPCScroll) targetScroll = maxPCScroll;
      }

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const assetPath = "/asset/aboutMe/";

  const cardData = [
    { highlight: "비전공자의 시선.", desc: "일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.", src: `${assetPath}about_01.png` },
    { highlight: "디자인과 개발의 융합.", desc: "상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.", src: `${assetPath}about_02.png` },
    { highlight: "풀스택 빌더를 향한 몰입.", desc: "기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.", src: `${assetPath}about_03.png` }
  ];

  return (
    // 최외곽 section (배경, 높이 등)
    <section className="relative w-full bg-white flex flex-col items-center overflow-hidden transition-all duration-300 xl:h-[782px] xl:py-[80px] md:h-auto h-auto md:py-[60px] py-[40px]">
      
      {/* 글로벌 CSS: 스크롤바 숨김 처리 */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 🛠 1. 최외곽 영역 컨테이너: 1600px 초과 시 중앙 정렬 🛠
          - mx-auto와 max-w-[1600px]가 1600이하 유동/1600초과 고정을 담당
      */}
      <div className="relative w-full max-w-[1600px] mx-auto h-full flex flex-col gap-[64px] overflow-visible px-[20px] md:px-[40px] xl:px-[80px]">
        
        {/* 🛠 2. 내부 정렬 컨테이너: 타이틀과 스크롤바의 왼쪽 라인을 맞춤 (max-w-[1200px]) 🛠 */}
        <div className="w-full flex flex-col gap-[40px] overflow-visible">
          
          {/* 타이틀 (완벽한 왼쪽 정렬) */}
          <div className="w-full flex justify-start">
            <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
              배우고 또 배우고. 만들고 또 만들고.
            </h2>
          </div>

          {/* 🛠 3. 스크롤 영역: 부모의 px-[80px] 안에서 작동 🛠
              - snap-x mandatory: 터치 스크롤 시 스냅 기능
          */}
          <div 
            ref={scrollRef} 
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth overflow-y-visible snap-x mandatory"
          >
            {/* 🛠 4. 카드 트랙: gap-[20px] 유지 및 양옆 80px 패딩을 내부 수치로 녹여냄 🛠 */}
            <div className="flex flex-row gap-[20px] pb-10 min-w-max overflow-visible">
              {cardData.map((card, index) => (
                <div 
                  key={index}
                  className="summary-card snap-center relative flex-shrink-0 flex flex-col items-start gap-[20px] cursor-pointer
                    xl:w-[640px] xl:h-[436px] md:w-[500px] w-[calc(100vw-40px)]"
                >
                  <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden shadow-sm">
                    <img src={card.src} alt="" className="w-full h-full object-cover"/>
                  </div>
                  {/* 설명 문구 */}
                  <div className="w-full flex items-start xl:pl-[16px] xl:pr-[128px] xl:py-[4px] md:px-[12px] px-[8px] gap-[4px]">
                    <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] xl:text-[16px] xl:leading-[24px] text-[14px]">
                      <span className="text-[#171717] font-bold">{card.highlight}</span> {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 버튼 영역 */}
        <div className="w-full flex justify-end xl:justify-end md:justify-center justify-center mt-[-20px]">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            <button 
              onClick={() => handleScroll("left")}
              className={`relative w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all bg-[#F5F5F7]`}
            >
              <span className="text-[#A1A1A1]">←</span>
            </button>
            <button 
              onClick={() => handleScroll("right")}
              className={`relative w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all bg-[#E5E5E5]`}
            >
              <span className="text-[#737373]">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}