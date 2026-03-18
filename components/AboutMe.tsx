"use client";

import React, { useRef } from "react";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 중앙 정렬 스크롤 로직
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
        
        // 범위 제한
        if (scrollTo < 0) scrollTo = 0;
        if (scrollTo > maxScroll) scrollTo = maxScroll;

        container.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  };

  const assetPath = "/asset/aboutMe/";

  const cardData = [
    { 
      title: "비전공자의 시선. 일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.",
      src: `${assetPath}aboutMe1.png`
    },
    { 
      title: "디자인과 개발의 융합. 상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.",
      src: `${assetPath}aboutMe2.png`
    },
    { 
      title: "풀스택 빌더를 향한 몰입. 기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.",
      src: `${assetPath}aboutMe3.png`
    }
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center transition-all duration-300 xl:h-[782px] xl:py-[80px] md:h-auto h-auto md:py-[60px] py-[40px] overflow-visible">
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="relative w-full max-w-[1600px] h-full mx-auto flex flex-col xl:items-end items-center px-[20px] md:px-[40px] gap-[64px] overflow-visible">
        
        <div className="w-full xl:max-w-[1200px] flex flex-col gap-[40px] overflow-visible">
          <div className="w-full flex justify-start">
            <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
              배우고 또 배우고. 만들고 또 만들고.
            </h2>
          </div>

          <div 
            ref={scrollRef} 
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth overflow-y-visible"
          >
            <div className="flex flex-row gap-[20px] xl:w-[1960px] md:w-max w-max pb-10">
              {cardData.map((card, index) => (
                <div 
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className="summary-card relative flex-shrink-0 flex flex-col items-start gap-[10px] md:gap-[20px] cursor-pointer
                    xl:w-[640px] xl:h-[436px] md:w-[500px] w-[calc(100vw-40px)]" // 모바일에서 화면 꽉 차게 (좌우 여백 20px씩 제외)
                >
                  <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden shadow-sm">
                    <img src={card.src} alt="" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* 🛠 수정된 텍스트 영역 (Frame 144) 🛠 */}
                  <div className="w-full flex items-start 
                    /* PC: pr-128 (요청 20%적용) */ xl:pl-[16px] xl:pr-[128px] xl:py-[4px]
                    /* Tablet: px-12 */ md:px-[12px] 
                    /* Mobile: px-0 (너비 최대한 확보) */ px-0 gap-[4px]
                    /* 모바일에서 텍스트가 잘리지 않도록 높이값 자동 조정 */ h-auto min-h-[56px] md:h-[56px]">
                    
                    <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] break-keep xl:text-[16px] xl:leading-[24px] md:text-[16px] md:leading-[24px] text-[14px] leading-[20px]">
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

        {/* 네비게이션 버튼: 항상 #EEEEF2 배경색 유지 */}
        <div className="w-full max-w-[1200px] flex justify-end xl:justify-end md:justify-center justify-center">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            <button 
              onClick={() => scrollToCard(0)}
              className="relative w-[44px] h-[44px] bg-[#EEEEF2] rounded-full flex items-center justify-center active:scale-95 transition-all"
            >
              <img src="/asset/aboutMe/leftArrow.svg" alt="prev" className="w-[28px] h-[28px]" />
            </button>
            <button 
              onClick={() => scrollToCard(2)}
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