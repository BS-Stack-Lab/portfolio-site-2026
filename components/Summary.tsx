"use client";

import React from "react";

export default function Summary() {
  return (
    <section className="w-full bg-[#F5F5F7] flex flex-col items-center overflow-hidden transition-all duration-300
      /* 데스크톱 */ xl:py-[154px] xl:h-[1030px]
      /* 태블릿 */ md:py-[100px] md:h-[900px]
      /* 모바일 */ py-[60px] h-auto">
      
      <div className="w-full max-w-[1600px] flex flex-col gap-[56px] xl:gap-[64px]">
        
        {/* 헤더 영역: "일단 핵심부터." */}
        <div className="w-full px-[20px] md:px-[32px] xl:px-[80px]">
          <h2 className="font-wanted font-bold text-[#000000]
            xl:text-[52px] xl:leading-[52px]
            md:text-[40px] md:leading-[40px]
            text-[32px] leading-[32px] tracking-[0.23px]">
            일단 핵심부터.
          </h2>
        </div>

        {/* 카드 스크롤 영역 */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex flex-row gap-[20px] px-[20px] md:px-[32px] xl:px-[80px] pb-10">
            
            {/* 카드 1: 내 정보 핵심 */}
            <div className="relative flex-shrink-0 bg-white rounded-[18px] overflow-hidden shadow-sm
              xl:w-[1080px] xl:h-[508px]
              md:w-[680px] md:h-[450px]
              w-[300px] h-[400px]">
              <div className="absolute left-[30px] top-[30px] z-10 max-w-[288px]">
                <p className="font-wanted font-bold text-[#171717] text-[18px] leading-[24px] tracking-[-0.1725px]">
                  일단 도전, 시도로 풀어낸 한계.<br/>
                  디자인을 넘어 실제 구현까지.<br/>
                  멈추지 않고 나아가는 성장은 더욱 열정적.
                </p>
              </div>
              {/* iPhone Mockup Placeholder (Desktop/Tablet) */}
              <div className="hidden md:block absolute right-[-50px] bottom-[-100px] w-[500px] h-[1000px] border-[7px] border-[#5465A5] rounded-[80px] bg-black opacity-90 rotate-[5deg]">
                 <div className="mt-5 mx-auto w-36 h-10 bg-black rounded-full" /> {/* Dynamic Island */}
              </div>
            </div>

            {/* 카드 2: 기술 핵심 */}
            <div className="relative flex-shrink-0 bg-white rounded-[18px] overflow-hidden shadow-sm
              xl:w-[1080px] xl:h-[508px]
              md:w-[680px] md:h-[450px]
              w-[300px] h-[400px]">
              <div className="absolute left-1/2 -translate-x-1/2 top-[30px] z-10 text-center w-full">
                <p className="font-wanted font-bold text-[#171717] text-[18px] leading-[24px] tracking-[-0.1725px]">
                  기획부터 디자인. 개발까지.<br/>
                  폭넓은 경험은 더욱 환상적.
                </p>
              </div>
              {/* Apple Logo Icon Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-40 h-40 bg-gradient-to-b from-[#7388E1] to-[#6C7FDB] rounded-full blur-2xl" />
              </div>
            </div>

            {/* 카드 3: 프로젝트 핵심 */}
            <div className="relative flex-shrink-0 bg-white rounded-[18px] overflow-hidden shadow-sm
              xl:w-[1080px] xl:h-[508px]
              md:w-[680px] md:h-[450px]
              w-[300px] h-[400px]">
              <div className="absolute right-[30px] top-[30px] z-10 text-right max-w-[288px]">
                <p className="font-wanted font-bold text-[#171717] text-[18px] leading-[24px] tracking-[-0.1725px]">
                  일단 시작, 결과로 증명하는 가치.<br/>
                  아이디어를 서비스로 빌딩하는 몰입.<br/>
                  상상을 현실로 만드는 경험은 더욱 압도적.
                </p>
              </div>
               {/* Project Mockup Group Placeholder */}
              <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#EBEBF0] to-transparent" />
            </div>

          </div>
        </div>

        {/* 인디케이터 (Pagination Dots) */}
        <div className="flex justify-center items-center gap-[16px]">
          <div className="bg-[#EBEBF0] px-[26px] py-[10px] rounded-full flex items-center gap-[16px] h-[56px]">
            <div className="w-[60px] h-[10px] bg-[#737373] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#737373] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#737373] rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}