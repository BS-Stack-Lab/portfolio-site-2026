"use client";

import React, { useRef } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName("summary-card");
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        const containerWidth = container.offsetWidth;
        const cardWidth = targetCard.offsetWidth;
        const cardLeft = targetCard.offsetLeft;

        let scrollTo = cardLeft - (containerWidth / 2 - cardWidth / 2);
        const maxScroll = container.scrollWidth - containerWidth;
        
        if (scrollTo < 0) scrollTo = 0;
        if (scrollTo > maxScroll) scrollTo = maxScroll;

        container.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  };

  const assetPath = "/asset/aboutMe/";

  const cardData = [
    { 
      highlight: "비전공자의 시선.",
      desc: "일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.",
      src: `${assetPath}aboutMe1.png`
    },
    { 
      highlight: "디자인과 개발의 융합.",
      desc: "상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.",
      src: `${assetPath}aboutMe2.png`
    },
    { 
      highlight: "풀스택 빌더를 향한 몰입.",
      desc: "기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.",
      src: `${assetPath}aboutMe3.png`
    }
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center transition-all duration-300 xl:h-[782px] xl:py-[80px] md:h-auto h-auto md:py-[60px] py-[40px] overflow-visible">
      
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
  
      {/* 1. 타이틀 영역: 1600px 고정 및 중앙 정렬 */}
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] mb-[40px]">
        <div className="w-full flex justify-start">
          <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
            배우고 또 배우고. 만들고 또 만들고.
          </h2>
        </div>
      </div>
  
      {/* 2. 스크롤 영역: 전체 너비를 다 쓰지만 내부 여백으로 1600px 라인을 잡음 */}
      <div 
        ref={scrollRef} 
        className="w-full overflow-x-auto scrollbar-hide scroll-smooth overflow-y-visible snap-container"
      >
        {/* 중요: 아래 div의 mx-auto와 max-w-[1600px]가 핵심입니다.
            1600px이 넘어가면 이 div가 중앙에 놓이게 됩니다.
            다만, 카드가 오른쪽 끝까지 보이게 하려면 이 div에 overflow-visible이 필요합니다.
        */}
        <div className="flex flex-row gap-[20px] pb-10 min-w-max px-[20px] md:px-[40px] xl:px-[80px] max-w-[1600px] mx-auto overflow-visible">
          {cardData.map((card, index) => (
            <div 
              key={index}
              onClick={() => scrollToCard(index)}
              className={`summary-card snap-item relative flex-shrink-0 flex flex-col items-start gap-[10px] md:gap-[20px] cursor-pointer 
                xl:w-[640px] xl:h-[436px] md:w-[500px] w-[calc(100vw-40px)]`}
            >
              <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden shadow-sm">
                <img src={card.src} alt="" className="w-full h-full object-cover" />
              </div>
              
              <div className="w-full flex items-start xl:pl-[16px] xl:pr-[128px] xl:py-[4px] md:px-[12px] px-0 h-auto min-h-[56px] md:h-[56px]">
                <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] break-keep md:text-[16px] md:leading-[24px] text-[14px] leading-[20px]">
                  <span className="text-[#171717] font-bold">{card.highlight}</span>{" "}
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* 3. 버튼 영역: 1600px 고정 및 중앙 정렬 */}
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] mt-[24px]">
        <div className="w-full flex justify-end xl:justify-end md:justify-center justify-center">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            <button onClick={() => scrollToCard(0)} className="relative w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all">
              <img src="/asset/aboutMe/leftArrow.svg" alt="prev" className="w-[28px] h-[28px]" />
            </button>
            <button onClick={() => scrollToCard(2)} className="relative w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all">
              <img src="/asset/aboutMe/rightArrow.svg" alt="next" className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}