"use client";

import React, { useRef } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. 빌드 에러 방지를 위해 이동 거리를 상수로 계산
  // 카드 너비(640px) + 간격(20px) = 660px
  const MOVE_STEP = 660; 

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = direction === "left" ? -MOVE_STEP : MOVE_STEP;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const assetPath = "/asset/aboutMe/";

  const cardData = [
    { 
      id: 1,
      highlight: "비전공자의 시선.", 
      desc: "일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.", 
      src: `${assetPath}about_01.png` 
    },
    { 
      id: 2,
      highlight: "디자인과 개발의 융합.", 
      desc: "상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.", 
      src: `${assetPath}about_02.png` 
    },
    { 
      id: 3,
      highlight: "풀스택 빌더를 향한 몰입.", 
      desc: "기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.", 
      src: `${assetPath}about_03.png` 
    }
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center transition-all duration-300 xl:h-[782px] xl:py-[80px] md:h-auto h-auto md:py-[60px] py-[40px] overflow-hidden">
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .snap-container { scroll-snap-type: x mandatory; }
        .snap-item { scroll-snap-align: center; }
        @media (min-width: 1280px) {
          .snap-item:first-child { scroll-snap-align: start; }
          .snap-item:last-child { scroll-snap-align: end; }
        }
      `}</style>

      {/* 1600px 중앙 정렬 컨테이너 */}
      <div className="relative w-full max-w-[1600px] mx-auto flex flex-col gap-[64px] px-[20px] md:px-[40px] xl:px-[80px]">
        
        {/* 타이틀 영역 */}
        <div className="w-full flex justify-start">
          <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
            배우고 또 배우고. 만들고 또 만들고.
          </h2>
        </div>

        {/* 카드 스크롤 트랙 */}
        <div 
          ref={scrollRef} 
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-container"
        >
          <div className="flex flex-row gap-[20px] pb-10 min-w-max">
            {cardData.map((card) => (
              <div 
                key={card.id}
                className="summary-card snap-item relative flex-shrink-0 flex flex-col items-start gap-[20px] cursor-pointer xl:w-[640px] md:w-[500px] w-[300px]"
              >
                <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden shadow-sm">
                  <img src={card.src} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* 텍스트 영역: 타이틀과 왼쪽 정렬을 맞추기 위해 내부 패딩 최적화 */}
                <div className="w-full flex flex-col items-start xl:pl-[16px] xl:pr-[128px] gap-[4px]">
                  <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] break-keep xl:text-[16px] xl:leading-[24px] text-[14px]">
                    <span className="text-[#171717] font-bold">{card.highlight}</span> {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 버튼 영역: 1600px 영역 안에서 오른쪽 정렬 */}
        <div className="w-full flex justify-end xl:justify-end md:justify-center justify-center">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            <button 
              onClick={() => handleScroll("left")}
              className="relative w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all"
            >
              <img src="/asset/aboutMe/leftArrow.svg" alt="prev" className="w-[28px] h-[28px]" />
            </button>
            <button 
              onClick={() => handleScroll("right")}
              className="relative w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all"
            >
              <img src="/asset/aboutMe/rightArrow.svg" alt="next" className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}