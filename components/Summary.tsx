"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Summary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName("summary-card");
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        // 카드가 컨테이너(화면)의 중앙에 오도록 스크롤 위치 계산
        const containerWidth = container.offsetWidth;
        const cardWidth = targetCard.offsetWidth;
        const cardLeft = targetCard.offsetLeft;

        // 중앙 정렬 공식: 카드의 왼쪽 위치 - (화면 너비/2 - 카드 너비/2)
        const scrollTo = cardLeft - (containerWidth / 2 - cardWidth / 2);

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  };

  // 이미지 경로 변수 설정
  const assetPath = "/asset/summary/";

  const cardData = [
    { 
      title: "일단 도전, 시도로 풀어낸 한계.\n디자인을 넘어 실제 구현까지.\n멈추지 않고 나아가는 성장은 더욱 열정적.",
      images: [{ src: `${assetPath}first.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[120%] xl:w-[800px] object-contain object-bottom scale-[1.02]" }]
    },
    { 
      title: "기획부터 디자인. 개발까지.\n폭넓은 경험은 더욱 환상적.",
      images: [{ src: `${assetPath}secend.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[100%] xl:w-[700px] object-contain object-bottom" }]
    },
    { 
      title: "일단 시작, 결과로 증명하는 가치.\n아이디어를 서비스로 빌딩하는 몰입.\n상상을 현실로 만드는 경험은 더욱 압도적.",
      images: [{ src: `${assetPath}tri.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[120%] xl:w-[800px] object-contain object-bottom scale-[1.02]" }]
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F7] flex flex-col items-center overflow-hidden transition-all duration-300 xl:py-[154px] md:py-[100px] py-[60px]">
      
      {/* 글로벌 CSS: 스크롤바 숨김 */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="w-full max-w-[1600px] flex flex-col gap-[56px] xl:gap-[64px]">
        
        {/* 헤더 */}
        <div className="w-full px-[20px] md:px-[32px] xl:px-[80px]">
          <h2 className="font-wanted font-bold text-[#000000] xl:text-[52px] md:text-[40px] text-[32px] tracking-[0.23px]">
            일단 핵심부터.
          </h2>
        </div>

        {/* 카드 스크롤 영역 */}
        <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide scroll-smooth">
          {/* 3번째 카드 패딩 적용을 위한 컨테이너 px 설정 */}
          <div className="flex flex-row gap-[20px] px-[20px] md:px-[32px] xl:px-[80px] pb-10">
            {cardData.map((card, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(index)}
                // summary-card 클래스로 요소를 찾아 스크롤 위치 계산에 활용
                className={`summary-card relative flex-shrink-0 bg-white rounded-[18px] shadow-sm cursor-pointer transition-all duration-500 overflow-hidden
                  xl:w-[1080px] xl:h-[508px] 
                  md:w-[509px] md:h-[640px] 
                  w-[360px] h-[280px]
                  ${activeIndex === index ? "ring-2 ring-blue-500/10" : "opacity-90"}
                  ${index === 2 ? "mr-[16px] md:mr-[40px] xl:mr-[80px]" : ""} 
                `}
              >
                {/* 텍스트 영역 (Z-index 조정) */}
                <div className={`absolute top-[30px] left-0 right-0 z-20 px-[30px] 
                  ${index === 1 ? "text-center" : index === 2 ? "text-right" : "text-left"}`}>
                  <p className="font-wanted font-bold text-[#171717] xl:text-[18px] text-[16px] leading-[1.4] whitespace-pre-wrap">
                    {card.title}
                  </p>
                </div>

                {/* 이미지 맵핑 및 자유 배치 */}
                {card.images.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img.src}
                    alt={`decoration-${imgIdx}`}
                    // 각 이미지의 style 속성(가이드 수치)을 Tailwind 클래스로 적용
                    className={`absolute pointer-events-none ${img.style}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 인디케이터 (애니메이션 바) */}
        <div className="flex justify-center items-center">
          <div className="bg-[#EBEBF0] px-[26px] py-[10px] rounded-full flex items-center gap-[16px] h-[56px]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                onClick={() => handleCardClick(i)}
                className={`cursor-pointer rounded-full transition-all duration-500 ease-in-out
                  ${activeIndex === i 
                    ? "w-[60px] h-[10px] bg-[#737373]" 
                    : "w-[10px] h-[10px] bg-[#D1D1D6]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}