"use client";

import React from "react";

// 🛠 1. 데이터 정의 (상세 내용 details 추가)
const PROJECTS_LIST = [
  {
    id: 1,
    title: "포트폴리오 사이트 개발.",
    desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.",
    details: [
      "1. 제미나이를 활용한 코드 작성",
      "2. 파이어베이스를 활용한 서버",
      "3. 피그마를 활용한 UI 디자인"
    ],
    techs: ["react.png", "vscode.png", "jemini.png", "figma.png", "lottie.png"],
    type: "개인 프로젝트",
    period: "26.03.12 ~ 03.18"
  },
];

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 🛠 2. 메인 컴포넌트 (이 부분이 누락되면 import 시 에러가 발생합니다)
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
        {/* 상단 헤더 */}
        <div className="absolute top-0 left-0 right-0 z-30 h-[144px] flex items-center justify-center bg-gradient-to-b from-white via-white/90 to-transparent pt-[48px] pb-[32px]">
          <h2 className="font-wanted font-bold text-[24px] leading-[32px] text-[#171717] text-center whitespace-pre-wrap">
            실체가 된 프로젝트.<br />아이디어가 구현되는 순간을 만나보세요.
          </h2>
        </div>

        {/* 중앙 컨텐츠 스크롤 영역 */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-[20px] md:px-[60px] xl:px-[80px] pt-[160px] pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
            {PROJECTS_LIST.map((project) => (
              <ProjectDetailCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* 하단 닫기 버튼 */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-40">
          <button 
            onClick={onClose}
            className="group/close w-[56px] h-[56px] bg-white/50 backdrop-blur-[10px] rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <img 
              src="/asset/icons/operation.svg" 
              alt="close" 
              className="w-[32px] h-[32px] transition-transform duration-500 ease-in-out group-hover/close:rotate-90" 
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// 🛠 3. 개별 카드 컴포넌트 (호버 효과 적용)
function ProjectDetailCard({ project }: { project: any }) {
  return (
    <div className="group relative flex flex-col justify-between items-start p-[32px] md:p-[24px] xl:p-[32px] bg-[#F5F5F7] rounded-[24px] h-[300px] w-full overflow-hidden transition-all duration-300">
      
      {/* 기본 텍스트 영역 (평상시 노출) */}
      <div className="flex flex-col gap-[12px] w-full transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-wanted font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.12px]">
          {project.title}
        </h3>
        <p className="font-wanted font-normal text-[16px] leading-[24px] text-[#737373] tracking-[0.057px]">
          {project.desc}
        </p>
      </div>

      {/* 호버 시 나타나는 상세 내용 영역 */}
      <div className="absolute inset-0 z-10 flex flex-col items-start p-[32px] md:p-[24px] xl:p-[32px] 
        bg-white/60 backdrop-blur-[6px] 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
        
        <div className="flex flex-col gap-[12px] w-full h-full">
          <h3 className="font-wanted font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.12px] mb-[4px]">
            상세 내용.
          </h3>
          <ul className="flex flex-col gap-[8px]">
            {project.details?.map((detail: string, index: number) => (
              <li key={index} className="font-wanted font-medium text-[14px] leading-[20px] text-[#737373] tracking-[0.145px]">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 하단 메타 데이터 (아이콘, 날짜) */}
      <div className="relative z-20 flex flex-col gap-[12px] w-full">
        <div className="flex flex-row items-center gap-[8px]">
          {project.techs.map((icon: string, idx: number) => (
            <img 
              key={idx} 
              src={`/asset/projectModal/${icon}`} 
              className="w-[20px] h-[20px] object-contain" 
              alt="tech icon" 
            />
          ))}
        </div>

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