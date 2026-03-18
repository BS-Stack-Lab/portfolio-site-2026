"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import ArrowLeft from "@/public/asset/aboutMe/leftArrow.svg";
import ArrowRight from "@/public/asset/aboutMe/rightArrow.svg";

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // 버튼 활성화/비활성화 상태 관리
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 현재 스크롤 상태를 확인하여 버튼 스타일을 업데이트하는 함수
  const updateButtonStates = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
      // 1px 여유를 두어 정확도 향상
      setCanScrollLeft(scrollLeft > 1);
      // 현재 스크롤 + 보이는 너비가 전체 너비와 같으면 오른쪽 끝
      setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 1);
    }
  }, []);

  // 스크롤 이벤트 리스너 등록 및 초기화
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateButtonStates);
      // 초기 상태 확인
      updateButtonStates();
      // 창 크기 변경 시에도 확인
      window.addEventListener('resize', updateButtonStates);
      
      return () => {
        container.removeEventListener("scroll", updateButtonStates);
        window.removeEventListener('resize', updateButtonStates);
      };
    }
  }, [updateButtonStates]);

  // 핵심 로직: 지정된 카드를 화면 중앙(또는 최적의 위치)으로 이동
  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName("summary-card");
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        const containerWidth = container.offsetWidth;
        const cardWidth = targetCard.offsetWidth;
        const cardLeft = targetCard.offsetLeft;

        // 중앙 정렬 공식: 카드의 왼쪽 위치 - (화면 너비/2 - 카드 너비/2)
        let scrollTo = cardLeft - (containerWidth / 2 - cardWidth / 2);
        
        // 1, 3번 카드는 중앙 정렬 시 여백이 생기므로 컨테이너 끝에 붙도록 보정
        const totalScrollWidth = container.scrollWidth;
        const maxScroll = totalScrollWidth - containerWidth;
        
        if (scrollTo < 0) scrollTo = 0; // 왼쪽 끝
        if (scrollTo > maxScroll) scrollTo = maxScroll; // 오른쪽 끝

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  };

  const assetPath = "/asset/aboutMe/";

  const cardData = [
    { 
      title: "비전공자의 시선. 일상의 불편함을 그냥 지나치지 않고 서비스의 기회로 포착하여 사소한 문제들이 창의적인 기획의 시작이 되는 유연함을 보여줍니다.",
      src: `${assetPath}aboutMe1.jpg`
    },
    { 
      title: "디자인과 개발의 융합. 상상을 현실로 만들기 위해 AI를 파트너로 활용하며 학습의 곡선을 넓히고, 아이디어를 실체화하는 속도를 혁신적으로 높입니다.",
      src: `${assetPath}aboutMe2.jpg`
    },
    { 
      title: "풀스택 빌더를 향한 몰입. 기초를 단단히 다져내며 더 큰 가치를 꿈꾸고 사용자에게 완벽한 경험을 선사하기 위해 멈추지 않고 내일로 나아갑니다.",
      src: `${assetPath}aboutMe3.jpg`
    }
  ];

  // 버튼 스타일 바인딩 함수 (활성/비활성 색상 가이드 적용)
  const getButtonStyle = (isEnabled: boolean) => ({
    button: isEnabled ? "bg-[#E5E5E5] cursor-pointer active:scale-95" : "bg-[#F5F5F7] cursor-default",
    icon: isEnabled ? "stroke-[#737373]" : "stroke-[#A1A1A1]"
  });

  const leftBtnStyle = getButtonStyle(canScrollLeft);
  const rightBtnStyle = getButtonStyle(canScrollRight);

  return (
    <section className="relative w-full bg-white flex flex-col items-center transition-all duration-300 xl:h-[782px] xl:py-[80px] md:h-auto h-auto md:py-[60px] py-[40px] overflow-visible">
      
      {/* 글로벌 CSS: 스크롤바 숨김 처리 */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="relative w-full max-w-[1600px] h-full mx-auto flex flex-col xl:items-end items-center px-[20px] md:px-[40px] gap-[64px] overflow-visible">
        
        {/* 상단 텍스트 및 카드 영역 */}
        <div className="w-full xl:max-w-[1200px] flex flex-col gap-[40px] overflow-visible">
          
          {/* 타이틀 */}
          <div className="w-full flex justify-start">
            <h2 className="font-wanted font-bold text-[#000000] tracking-[0.23px] xl:text-[28px] xl:leading-[38px] md:text-[24px] text-[20px]">
              배우고 또 배우고. 만들고 또 만들고.
            </h2>
          </div>

          {/* 카드 스크롤 영역 (스크롤바 숨김, 터치 스크롤 활성화) */}
          <div 
            ref={scrollRef} 
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth overflow-y-visible"
          >
            <div className="flex flex-row gap-[20px] xl:w-[1960px] md:w-max w-max pb-10">
              {cardData.map((card, index) => (
                <div 
                  key={index}
                  // 카드 클릭 시에도 해당 카드를 중앙으로 이동
                  onClick={() => scrollToCard(index)}
                  className="summary-card relative flex-shrink-0 flex flex-col items-start gap-[20px] cursor-pointer
                    xl:w-[640px] xl:h-[436px] md:w-[500px] w-[300px]"
                >
                  {/* 이미지 영역 */}
                  <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[24px] overflow-hidden shadow-sm">
                    <img src={card.src} alt="" className="w-full h-full object-cover"/>
                  </div>
                  {/* 텍스트 영역 (오른쪽 패딩 20% 적용) */}
                  <div className="w-full flex items-start xl:pl-[16px] xl:pr-[128px] xl:py-[4px] md:px-[12px] px-[8px] gap-[4px]">
                    <p className="font-wanted font-semibold text-[#737373] tracking-[0.057px] xl:text-[16px] xl:leading-[24px] text-[14px]">
                      {/* 강조 텍스트 조건부 처리 */}
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

        {/* 하단 네비게이션 버튼 영역 */}
        <div className="w-full max-w-[1200px] flex justify-end xl:justify-end md:justify-center justify-center">
          <div className="flex flex-row items-center gap-[20px] w-[108px] h-[44px]">
            {/* 왼쪽 버튼 */}
            <button 
              onClick={() => canScrollLeft && scrollToCard(0)} // 클릭 시 1번 카드로 (왼쪽 끝)
              disabled={!canScrollLeft}
              className={`relative w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all ${leftBtnStyle.button}`}
            >
              <ArrowLeft className={`w-[28px] h-[28px] ${leftBtnStyle.icon}`} />
            </button>
            {/* 오른쪽 버튼 */}
            <button 
              onClick={() => canScrollRight && scrollToCard(2)} // 클릭 시 3번 카드로 (오른쪽 끝)
              disabled={!canScrollRight}
              className={`relative w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all ${rightBtnStyle.button}`}
            >
              <ArrowRight className={`w-[28px] h-[28px] ${rightBtnStyle.icon}`} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}