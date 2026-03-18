"use client";

import React from "react";

// 🛠 1. 아이콘 기본 경로 설정
const ICON_BASE_PATH = "/asset/icons/";

const VALUE_CARDS = [
  {
    id: 1,
    iconName: "value1.svg",
    title: "타협 없는 안전의 시작.",
    desc: "카카오 테크 부트캠프에서 다질 깊이 있는 기술적 토대를 바탕으로, 사용자 정보를 보호하는 견고한 성벽을 세우려 합니다. 어떤 아이디어든 가장 안전한 환경에서 실체화될 수 있도록, 보안을 설계의 시작이자 끝으로 삼겠습니다.",
  },
  {
    id: 2,
    iconName: "value2.svg",
    title: "지속 가능한 성장의 뿌리.",
    desc: "단지 작동하는 코드를 넘어 동료들과 함께 읽고 성장할 수 있는 유연한 구조를 지향합니다. 깨끗한 설계와 명확한 네이밍 원칙을 체득하여 시간이 흘러도 변함없이 단단하게 작동하는 서비스의 근간을 만들겠습니다.",
  },
  {
    id: 3,
    iconName: "value3.svg",
    title: "모두를 향한 기술의 확장.",
    desc: "배움의 끝에서 제가 마주할 기술이 장벽 없이 모두에게 닿기를 바랍니다. 표준을 준수하는 정교한 설계를 통해 어떤 사용자도 소외되지 않는 보편적이고 평등한 경험을 완성하는 빌더로 거듭나겠습니다.",
  },
];

export default function ValueFooter() {
  return (
    <footer className="w-full bg-[#F5F5F7] flex flex-col items-center pt-[140px] pb-[80px] px-[20px] md:px-[40px] xl:px-[80px]">
      <div className="w-full max-w-[1280px] flex flex-col gap-[100px] md:gap-[140px] xl:gap-[280px]">
        
        {/* 상단 타이틀 섹션 */}
        <div className="flex flex-col items-start gap-[24px] md:gap-[32px] w-full">
          <span className="font-wanted font-bold text-[20px] md:text-[24px] leading-tight text-[#171717] tracking-[-0.23px]">
            핵심 가치.
          </span>
          <h2 className="font-wanted font-bold text-[36px] md:text-[56px] xl:text-[80px] leading-[1.1] tracking-[0.23px] bg-gradient-to-r from-[#449EFF] via-[#A4D0FF] to-[#BDDDFF] bg-clip-text text-transparent break-keep">
            기준을 세우고.<br />내일을 빌딩하다.
          </h2>
        </div>

        {/* 🛠 중앙 카드 섹션: 반응형 정렬 수정 🛠 */}
        {/* 모바일/태블릿(xl 미만): flex-col (세로 나열) */}
        {/* 데스크톱(xl 이상): grid-cols-3 (가로 3열) */}
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[20px] w-full">
          {VALUE_CARDS.map((card) => (
            <div 
              key={card.id}
              className="flex flex-col items-start p-[32px] md:p-[40px] xl:p-[32px] gap-[16px] w-full min-h-[346px] bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* 아이콘 이미지 */}
              <div className="w-[56px] h-[56px] flex items-center justify-center overflow-hidden">
                <img 
                  src={`${ICON_BASE_PATH}${card.iconName}`} 
                  alt={card.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-[20px] md:gap-[24px] w-full">
                <h3 className="font-wanted font-bold text-[24px] md:text-[28px] leading-tight text-[#171717] tracking-[0.23px] break-keep">
                  {card.title}
                </h3>
                <p className="font-wanted font-semibold text-[15px] md:text-[16px] leading-[1.6] text-[#737373] tracking-[0.057px] break-keep">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 카피라이트 */}
        <div className="w-full border-t border-[#EBEBEB] pt-[40px] flex justify-center">
          <p className="font-wanted font-semibold text-[12px] md:text-[14px] leading-relaxed text-[#A1A1A1] tracking-[0.145px] text-center break-keep opacity-80">
            이 사이트는 포트폴리오 전용으로 제작되었으며, 상업적 목적이 없는 비영리 사이트임을 명시합니다.
          </p>
        </div>
      </div>
    </footer>
  );
}