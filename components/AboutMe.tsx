"use client";

import React, { useRef } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName("snap-item");
      if (cards.length === 0) return;
      
      // 카드 너비 + 간격(20px)만큼 이동
      const moveDistance = (cards[0] as HTMLElement).offsetWidth + 20;
      container.scrollBy({
        left: direction === "left" ? -moveDistance : moveDistance,
        behavior: "smooth",
      });
    }
  };

  const assetPath = "/asset/aboutMe/";
  const cardData = [
    { id: 1, highlight: "비전공자의 시선.", desc: "일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.", src: `${assetPath}aboutMe1.jpg` },
    { id: 2, highlight: "디자인과 개발의 융합.", desc: "상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.", src: `${assetPath}aboutMe2.jpg` },
    { id: 3, highlight: "풀스택 빌더를 향한 몰입.", desc: "기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.", src: `${assetPath}aboutMe3.jpg` }
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center xl:h-[782px] xl:py-[80px] md:h-auto h-auto md:py-[60px] py-[40px] overflow-visible">
      
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

      {/* 1. 전체 영역을 감싸는 컨테이너 (중앙 정렬 및 1600px 제한) */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-[64px] px-[20px] md:px-[40px] xl:px-[80px] overflow-visible">
        
        {/* 타이틀 영역: 컨테이너의 왼쪽 끝에 정렬됨 */}
        <div className="w-full flex justify-start overflow-visible">
          <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
            배우고 또 배우고. 만들고 또 만들고.
          </h2>
        </div>

        {/* 2. 스크롤 영역: 
            부모의 max-w를 넘어서 브라우저 끝까지 보이기 위해 overflow-visible 설정 
        */}
        <div className="w-full overflow-visible">
          <div 
            ref={scrollRef} 
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-container overflow-y-visible"
          >
            {/* 중요: min-w-max를 사용하여 자식 카드들이 찌그러지지 않게 하고,
              부모 너비를 초과하여 옆으로 나열되게 합니다. 
            */}
            <div className="flex flex-row gap-[20px] pb-10 min-w-max overflow-visible">
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
            </div>
          </div>
        </div>

        {/* 버튼 영역: 1600px 라인 안에서 오른쪽 정렬 */}
        <div className="w-full flex justify-end overflow-visible">
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