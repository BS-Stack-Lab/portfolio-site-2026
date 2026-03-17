"use client";

import React, { useState, useRef } from "react";

export default function Summary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 카드/인디케이터 클릭 시 스크롤 및 상태 변경 함수
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 360 : window.innerWidth < 1280 ? 509 : 1080;
      scrollRef.current.scrollTo({ left: index * (cardWidth + 20), behavior: "smooth" });
    }
  };

  // 이미지 경로 변수 설정 (중복 방지 및 유지보수 용이)
  const assetPath = "/asset/summary/";

  const cardData = [
    { 
      title: "일단 도전, 시도로 풀어낸 한계.\n디자인을 넘어 실제 구현까지.\n멈추지 않고 나아가는 성장은 더욱 열정적.",
      // 카드 1의 이미지: 아이폰 16 목업 (자유 배치)
      images: [
        { 
          src: `${assetPath}first.png`,
          style: "bottom-[-120px] xl:bottom-[-200px] right-[-50px] xl:right-[-100px] w-[90%] xl:w-[680px] rotate-[10deg]"
        },
      ]
    },
    { 
      title: "기획부터 디자인. 개발까지.\n폭넓은 경험은 더욱 환상적.",
      // 카드 2의 이미지: 카메라 목업 (중앙 배치)
      images: [
        { 
          src: `${assetPath}secend.png`,
          style: "top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[60%] xl:w-[450px]" 
        },
      ]
    },
    { 
      title: "일단 시작, 결과로 증명하는 가치.\n아이디어를 서비스로 빌딩하는 몰입.\n상상을 현실로 만드는 경험은 더욱 압도적.",
      // 카드 3의 이미지: 푸른색 그래디언트 (배경 꽉 채움)
      images: [
        { 
          src: `${assetPath}tri.png`,
          style: "inset-0 w-full h-full object-cover scale-[1.02] blur-[0.1px]" 
        },
      ]
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
          <div className="flex flex-row gap-[20px] px-[20px] md:px-[32px] xl:px-[80px] pb-10">
            {cardData.map((card, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(index)}
                // 카드 사이즈 정의 (PC, Tablet, Mobile 분리)
                className={`relative flex-shrink-0 bg-white rounded-[18px] shadow-sm cursor-pointer transition-all duration-500 overflow-hidden
                  xl:w-[1080px] xl:h-[508px] 
                  md:w-[509px] md:h-[640px] 
                  w-[360px] h-[280px]
                  ${activeIndex === index ? "ring-2 ring-blue-500/10" : "opacity-90"}`}
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