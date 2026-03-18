"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Summary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 스크롤 시 현재 어떤 카드가 중앙에 있는지 감지 (인디케이터 연동)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6, // 카드가 60% 이상 보일 때 활성화
      }
    );

    const cards = document.querySelectorAll(".summary-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName("summary-card");
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetCard.getBoundingClientRect();

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
    { title: "일단 도전, 시도로 풀어낸 한계.\n디자인을 넘어 실제 구현까지.\n멈추지 않고 나아가는 성장은 더욱 열정적.", images: [{ src: `${assetPath}first.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[390px] xl:w-[500px] md:left-auto md:right-[45%] md:translate-x-1/2 xl:left-auto xl:right-[35%] xl:translate-x-1/2 object-contain object-bottom scale-[1.02]" }] },
    { title: "기획부터 디자인. 개발까지.\n폭넓은 경험은 더욱 환상적.", images: [{ src: `${assetPath}secend.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[560px] xl:w-[560px] object-contain object-bottom" }] },
    { title: "일단 시작, 결과로 증명하는 가치.\n아이디어를 서비스로 빌딩하는 몰입.\n상상을 현실로 만드는 경험은 더욱 압도적.", images: [{ src: `${assetPath}triMo.png`, style: "bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:hidden object-contain object-bottom scale-[1.02]" }, { src: `${assetPath}triTe.png`, style: "bottom-0 left-1/2 -translate-x-1/2 hidden md:block xl:hidden md:w-full md:max-w-none object-contain object-bottom scale-[1.05]" }, { src: `${assetPath}tri.png`, style: "bottom-0 left-1/2 -translate-x-1/2 hidden xl:block xl:w-full object-contain object-bottom scale-[1.02]" }] }
  ];

  return (
    <section className="w-full bg-[#F5F5F7] flex flex-col items-center transition-all duration-300 xl:py-[154px] md:py-[100px] py-[60px] overflow-visible">
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* 🛠 한 칸씩 스크롤되는 스냅 설정 */
        .snap-container {
          scroll-snap-type: x mandatory;
        }
        .snap-item {
          scroll-snap-align: center;
        }

        /* 🛠 데스크톱(1280px 이상)에서만 스크롤 막기 */
        @media (min-width: 1280px) {
          .no-scroll-pc {
            overflow-x: hidden !important;
            scroll-snap-type: none !important;
          }
        }
      `}</style>

      <div className="w-full max-w-[1600px] flex flex-col gap-[56px] xl:gap-[64px] overflow-visible">
        
        <div className="w-full px-[20px] md:px-[32px] xl:px-[80px]">
          <h2 className="font-wanted font-bold text-[#000000] xl:text-[52px] md:text-[40px] text-[28px] tracking-[0.23px]">
            일단 핵심부터.
          </h2>
        </div>

        {/* 🛠 no-scroll-pc와 snap-container 클래스 추가 */}
        <div 
          ref={scrollRef} 
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth overflow-y-visible snap-container no-scroll-pc"
        >
          <div className="flex flex-row gap-[20px] px-[16px] md:px-[32px] xl:px-[80px] pb-10 min-w-max">
            {cardData.map((card, index) => (
              <div 
                key={index}
                data-index={index}
                onClick={() => handleCardClick(index)}
                className={`summary-card snap-item relative flex-shrink-0 bg-white rounded-[18px] cursor-pointer transition-all duration-500 overflow-hidden
                  xl:w-[1080px] xl:h-[508px] 
                  md:w-[640px] md:h-[509px] 
                  w-[280px] h-[360px]
                  ${activeIndex === index ? "opacity-100" : "opacity-80 scale-[0.98]"}
                `}
              >
                <div className={`absolute top-[30px] z-20 px-[30px] w-full left-1/2 -translate-x-1/2 text-center px-[14px] md:left-0 md:translate-x-0 
                  ${index === 1 ? "md:text-center" : index === 2 ? "md:text-right" : "md:text-left"}`}>
                  <p className="font-wanted font-bold text-[#171717] xl:text-[18px] text-[16px] leading-[1.4] whitespace-pre-wrap">
                    {card.title}
                  </p>
                </div>

                {card.images.map((img, imgIdx) => (
                  <img key={imgIdx} src={img.src} alt="" className={`absolute pointer-events-none ${img.style}`} />
                ))}
              </div>
            ))}
            {/* 우측 끝 여백 확보용 (snap-align end 효과) */}
            <div className="w-[1px] md:w-[20px] xl:w-[80px] flex-shrink-0" />
          </div>
        </div>

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