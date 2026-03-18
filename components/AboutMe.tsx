"use client";

import React, { useRef } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 버튼 클릭 시 한 칸씩 이동하는 로직
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
          /* 첫 카드가 타이틀 시작 라인에 맞게 왼쪽 정렬 스냅 */
          .snap-item:first-child { scroll-snap-align: start; }
          .snap-item:last-child { scroll-snap-align: end; }
        }
      `}</style>

      {/* 🛠 1. 메인 가이드 컨테이너 (1600px 제한 및 중앙 정렬) */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-[64px] px-[20px] md:px-[40px] xl:px-[80px] overflow-visible">
        
        {/* 타이틀 영역 */}
        <div className="w-full flex justify-start">
          <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
            배우고 또 배우고. 만들고 또 만들고.
          </h2>
        </div>

        {/* 🛠 2. 스크롤 컨테이너 (부모의 px-80 여백을 유지하면서 가로로 확장) */}
        <div className="w-full overflow-visible">
          <div 
            ref={scrollRef} 
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-container overflow-y-visible"
          >
            {/* 카드 트랙: min-w-max로 자식 너비 보존 */}
            <div className="flex flex-row gap-[20px] pb-10 min-w-max">
              {cardData.map((card) => (
                <div 
                  key={card.id}
                  className="summary-card snap-item relative flex-shrink-0 flex flex-col items-start gap-[20px] cursor-pointer xl:w-[640px] md:w-[500px] w-[300px]"
                >
                  {/* 이미지 영역 (PNG 적용) */}
                  <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden shadow-sm">
                    <img src={card.src} alt="" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* 설명 문구 */}
                  <div className="w-full flex flex-col items-start xl:pl-[16px] xl:pr-[128px] gap-[4px]">
                    <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] break-keep xl:text-[16px] xl:leading-[24px] text-[14px]">
                      <span className="text-[#171717] font-bold">{card.highlight}</span> {card.desc}
                    </p>
                  </div>
                </div>
              ))}
              {/* 오른쪽 여백 확보용 더미 div (선택 사항) */}
              <div className="w-[1px] h-full flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="w-full flex justify-end">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            <button 
              onClick={() => handleScroll("left")}
              className="w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all"
            >
              <img src="/asset/aboutMe/leftArrow.svg" alt="prev" className="w-[28px] h-[28px]" />
            </button>
            <button 
              onClick={() => handleScroll("right")}
              className="w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all"
            >
              <img src="/asset/aboutMe/rightArrow.svg" alt="next" className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}