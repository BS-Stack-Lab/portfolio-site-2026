"use client";

import React from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 🛠 프로젝트 데이터 (피그마 이미지 참고)
const PROJECTS_LIST = [
  {
    id: 1,
    title: "포트폴리오 사이트 개발.",
    desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.",
    techs: ["react.svg", "vscode.svg", "firebase.svg", "figma.svg", "ps.svg"],
    type: "개인 프로젝트",
    period: "26.03.08 ~ 03.16"
  },
  // 동일한 데이터 구조로 9개 구성 (반복 렌더링을 위해 예시 데이터만 나열)
  ...Array(8).fill(null).map((_, i) => ({
    id: i + 2,
    title: "포트폴리오 사이트 개발.",
    desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.",
    techs: ["react.svg", "vscode.svg", "firebase.svg", "figma.svg", "ps.svg"],
    type: "개인 프로젝트",
    period: "26.03.08 ~ 03.16"
  }))
];

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-end justify-center bg-black/30 backdrop-blur-[2px] pt-[80px]"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[1440px] h-full bg-white rounded-t-[24px] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 상단 헤더 (그라데이션 배경 포함) */}
        <div className="absolute top-0 left-0 right-0 z-20 h-[144px] flex items-center justify-center bg-gradient-to-b from-white via-white/80 to-transparent pt-[48px] pb-[32px]">
          <h2 className="font-wanted font-bold text-[24px] leading-[32px] text-[#171717] text-center whitespace-pre-wrap">
            실체가 된 프로젝트.<br />아이디어가 구현되는 순간을 만나보세요.
          </h2>
        </div>

        {/* 중앙 스크롤 컨텐츠 영역 */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-[20px] md:px-[60px] xl:px-[80px] pt-[160px] pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
            {PROJECTS_LIST.map((project) => (
              <ProjectDetailCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* 하단 닫기 버튼 (operation.svg 사용) */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-30">
          <button 
            onClick={onClose}
            className="group w-[56px] h-[56px] bg-white/50 backdrop-blur-[10px] rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <img 
              src="/asset/icons/operation.svg" 
              alt="close" 
              className="w-[32px] h-[32px] transition-transform duration-500 group-hover:rotate-90" 
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// 🛠 프로젝트 상세 카드 컴포넌트
function ProjectDetailCard({ project }: { project: any }) {
  return (
    <div className="flex flex-col justify-between items-start p-[32px] md:p-[24px] xl:p-[32px] bg-[#F5F5F7] rounded-[24px] h-[300px] w-full">
      
      {/* 텍스트 영역 (상단) */}
      <div className="flex flex-col gap-[12px] w-full">
        <h3 className="font-wanted font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.12px]">
          {project.title}
        </h3>
        <p className="font-wanted font-normal text-[16px] leading-[24px] text-[#737373] tracking-[0.057px]">
          {project.desc}
        </p>
      </div>

      {/* 하단 메타 데이터 영역 */}
      <div className="flex flex-col gap-[12px] w-full">
        {/* 테크 아이콘 리스트 */}
        <div className="flex flex-row items-center gap-[8px]">
          {project.techs.map((icon: string, idx: number) => (
            <img 
              key={idx} 
              src={`/asset/icons/${icon}`} 
              className="w-[20px] h-[20px] object-contain" 
              alt="tech icon" 
            />
          ))}
        </div>

        {/* 구분 및 날짜 */}
        <div className="flex flex-row justify-between items-center w-full">
          <span className="font-wanted font-normal text-[14px] text-[#737373] tracking-[0.145px]">
            {project.type}
          </span>
          <span className="font-wanted font-normal text-[14px] text-[#737373] tracking-[0.145px] text-right">
            {project.period}
          </span>
        </div>
      </div>
    </div>
  );
}