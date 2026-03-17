"use client";

import React, { useState, useRef } from "react";

export default function Summary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 핵심 로직: 인디케이터 클릭 및 카드 클릭 시 중앙 정렬 스크롤
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName("summary-card");
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        // 1. 컨테이너의 현재 스크롤 위치와 화면상의 위치 정보 획득
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetCard.getBoundingClientRect();

        // 2. 중앙 정렬 계산 (화면 1800px 이상에서도 정확함)
        // (현재 스크롤 위치) + (카드의 화면상 왼쪽 위치) - (컨테이너 왼쪽 위치) - (컨테이너 절반) + (카드 절반)
        const scrollTo = 
          container.scrollLeft + 
          (targetRect.left - containerRect.left) - 
          (containerRect.width / 2) + 
          (targetRect.width / 2);

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  };

  const assetPath = "/asset/summary/";

  const cardData = [
    { 
      title: "일단 도전, 시도로 풀어낸 한계.\n디자인을 넘어 실제 구현까지.\n멈추지 않고 나아가는 성장은 더욱 열정적.",
      images: [{ src: `${assetPath}first.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[390px] xl:w-[500px] md:left-auto md:right-[45%] md:translate-x-1/2 xl:left-auto xl:right-[35%] xl:translate-x-1/2 object-contain object-bottom scale-[1.02]" }]
    },
    { 
      title: "기획부터 디자인. 개발까지.\n폭넓은 경험은 더욱 환상적.",
      images: [{ src: `${assetPath}secend.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[560px] xl:w-[560px] object-contain object-bottom" }]
    },
    { 
      title: "일단 시작, 결과로 증명하는 가치.\n아이디어를 서비스로 빌딩하는 몰입.\n상상을 현실로 만드는 경험은 더욱 압도적.",
      images: [
        // 1. 모바일 전용 이미지 (768px 미만에서만 출력)
        { 
          src: `${assetPath}triMo.png`, 
          style: `
            bottom-0 left-1/2 -translate-x-1/2 
            w-[100%] md:hidden 
            object-contain object-bottom scale-[1.02]
          ` 
        },
        // 2. 태블릿 전용 이미지 (768px 이상 ~ 1280px 미만에서만 출력)
        { 
          src: `${assetPath}triTe.png`, 
          style: `
            bottom-0 left-1/2 -translate-x-1/2 
            hidden md:block xl:hidden 
            md:w-full md:max-w-none
            object-contain object-bottom scale-[1.05]
          ` 
        },
        // 3. 데스크톱 전용 이미지 (1280px 이상에서만 출력)
        { 
          src: `${assetPath}tri.png`, 
          style: `
            bottom-0 left-1/2 -translate-x-1/2 
            hidden xl:block xl:w-full 
            object-contain object-bottom scale-[1.02]
          ` 
        }
      ]
    }
  ];

  return (
    /* 영역 밖 카드가 보이도록 overflow-hidden 제거, 대신 가로 스크롤 방지를 위해 overflow-x-hidden만 부모에 적용 가능 */
    <section className="w-full bg-[#F5F5F7] flex flex-col items-center transition-all duration-300 xl:py-[154px] md:py-[100px] py-[60px] overflow-visible">
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 컨테이너 자체도 overflow-visible로 설정하여 카드가 잘리지 않게 함 */}
      <div className="w-full max-w-[1600px] flex flex-col gap-[56px] xl:gap-[64px] overflow-visible">
        
        {/* 헤더 */}
        <div className="w-full px-[20px] md:px-[32px] xl:px-[80px]">
          <h2 className="font-wanted font-bold text-[#000000] xl:text-[52px] md:text-[40px] text-[28px] tracking-[0.23px]">
            일단 핵심부터.
          </h2>
        </div>

        {/* 카드 스크롤 영역: overflow-x-auto는 유지하되 컨테이너 밖으로 내용이 보이게 함 */}
        <div 
          ref={scrollRef} 
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth overflow-y-visible"
        >
          <div className="flex flex-row gap-[20px] px-[20px] md:px-[32px] xl:px-[80px] pb-10 min-w-max">
            {cardData.map((card, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(index)}
                className={`summary-card relative flex-shrink-0 bg-white rounded-[18px] cursor-pointer transition-all duration-500 overflow-hidden
                  xl:w-[1080px] xl:h-[508px] 
                  md:w-[640px] md:h-[509px] 
                  w-[280px] h-[360px]
                  ${activeIndex === index ? "opacity-100" : "opacity-80 scale-[0.98]"}
                  /* 마지막 카드 오른쪽 여백 가이드 적용 */
                  ${index === 2 ? "mr-[20px] md:mr-[40px] xl:mr-[80px]" : ""}
                `}
              >
                {/* 텍스트 영역: 
                    1. md 이상(태블릿/데스크톱): 기존 정렬 유지
                    2. 모바일(기본): left-1/2, -translate-x-1/2, text-center로 중앙 정렬
                */}
                <div className={`absolute top-[30px] z-20 px-[30px] w-full
                  /* 모바일 중앙 정렬 설정 */
                  left-1/2 -translate-x-1/2 text-center px-[14px]
                  /* 태블릿 이상에서는 다시 원래 위치와 정렬로 복구 */
                  md:left-0 md:translate-x-0 
                  ${index === 1 ? "md:text-center" : index === 2 ? "md:text-right" : "md:text-left"}`}>
                  
                  <p className="font-wanted font-bold text-[#171717] xl:text-[18px] text-[16px] leading-[1.4] whitespace-pre-wrap">
                    {card.title}
                  </p>
                </div>

                {/* 이미지 */}
                {card.images.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img.src}
                    alt=""
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
                // 인디케이터 클릭 시 카드 클릭과 동일한 핸들러 호출
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