"use client";

import React, { useRef } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName("snap-item");
      if (cards.length === 0) return;
      
      const moveDistance = (cards[0] as HTMLElement).offsetWidth + 20;
      container.scrollBy({
        left: direction === "left" ? -moveDistance : moveDistance,
        behavior: "smooth",
      });
    }
  };

  const assetPath = "/asset/aboutMe/";
  const cardData = [
    { id: 1, highlight: "비전공자의 시선.", desc: "일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.", src: `${assetPath}aboutMe1.png` },
    { id: 2, highlight: "디자인과 개발의 융합.", desc: "상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.", src: `${assetPath}aboutMe2.png` },
    { id: 3, highlight: "풀스택 빌더를 향한 몰입.", desc: "기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.", src: `${assetPath}aboutMe3.png` }
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center xl:h-[782px] xl:py-[80px] md:h-auto h-auto md:py-[60px] py-[40px] overflow-hidden">
      
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

      {/* 1. 타이틀 영역: 1600px 중앙 고정 및 패딩 80px */}
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] mb-[40px]">
        <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
          배우고 또 배우고. 만들고 또 만들고.
        </h2>
      </div>

      {/* 2. 스크롤 영역: 잘림 방지를 위해 w-full 사용 (오류 유발 calc 제거) */}
      <div 
        ref={scrollRef} 
        className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-container overflow-y-visible"
      >
        <div className="flex flex-row gap-[20px] pb-10 min-w-max">
          
          {/* 🛠 왼쪽 정렬 가이드용 여백 DIV (calc 대신 사용) 🛠
              - 1600px 초과 시 자동으로 늘어나며 타이틀 시작점과 카드를 정렬해줍니다.
          */}
          <div className="flex-shrink-0 hidden xl:block w-[calc(50vw-720px)]" 
               style={{ width: "calc(50vw - 720px)" }} />
          
          {/* 모바일/태블릿용 기본 왼쪽 패딩 */}
          <div className="flex-shrink-0 xl:hidden w-[20px] md:w-[40px]" />

          {cardData.map((card) => (
            <div 
              key={card.id}
              className="summary-card snap-item relative flex-shrink-0 flex flex-col items-start gap-[20px] cursor-pointer xl:w-[640px] md:w-[500px] w-[300px]"
            >
              <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden shadow-sm">
                <img src={card.src} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex flex-col items-start xl:pl-[16px] xl:pr-[128px] gap-[4px]">
                <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] break-keep xl:text-[16px] xl:leading-[24px] text-[14px]">
                  <span className="text-[#171717] font-bold">{card.highlight}</span> {card.desc}
                </p>
              </div>
            </div>
          ))}

          {/* 오른쪽 끝 여백 (잘림 방지) */}
          <div className="flex-shrink-0 w-[80px]" />
        </div>
      </div>

      {/* 3. 버튼 영역: 다시 1600px 중앙 가이드 안으로 */}
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] mt-[24px]">
        <div className="w-full flex justify-end">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            <button onClick={() => handleScroll("left")} className="w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all">
              <img src="/asset/aboutMe/leftArrow.svg" alt="prev" className="w-[28px] h-[28px]" />
            </button>
            <button onClick={() => handleScroll("right")} className="w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all">
              <img src="/asset/aboutMe/rightArrow.svg" alt="next" className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}