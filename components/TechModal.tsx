"use client";

import React from "react";

// 🛠 1. 경로 설정 및 파일 확장자 공통 관리
const ICON_BASE_PATH = "/asset/techModal/";
const FILE_EXT = ".png";

// 🛠 2. 데이터 구조 단순화 (파일명만 입력)
const MAIN_STACKS_DATA = [
  { id: "java", name: "Java", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "java" },
  { id: "intellij", name: "Intelije IDE", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "intelije" },
  { id: "vscode", name: "Visual Studio Code", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "vscode" },
  { id: "github", name: "GitHub", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "github" },
  { id: "figma", name: "Figma", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "figma" },
  { id: "photoshop", name: "Photoshop", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "ps" },
  { id: "illustrator", name: "Illustrator", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "ai" },
  { id: "lightroom", name: "Lightroom Classic", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "lightroom" },
  { id: "lottie", name: "Lottie", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "lottie" },
  { id: "notion", name: "Notion", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "notion" },
  { id: "slack", name: "Slack", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "slack" },
];

const LEARNING_STACKS_DATA = [
  { id: "js", name: "Javascript", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "js" },
  { id: "react", name: "React", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "react" },
  { id: "flutter", name: "Flutter", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "flutter" },
  { id: "supabase", name: "Supabase", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "supabase" },
  { id: "html", name: "HTML", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "html" },
  { id: "css", name: "CSS", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "css" },
  { id: "jira", name: "Jira", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", fileName: "jira" },
];

// 🛠 3. 카드 컴포넌트: 모든 해상도에서 이미지 왼쪽 정렬 및 68px 꽉 채움
function StackCard({ stack }: { stack: typeof MAIN_STACKS_DATA[0] }) {
  // 경로 결합 로직
  const imageUrl = `${ICON_BASE_PATH}${stack.fileName}${FILE_EXT}`;

  return (
    <div className="flex flex-col justify-between items-start p-[32px] md:p-[24px] xl:p-[32px] bg-[#F5F5F7] rounded-[24px] xl:h-[240px] md:h-[240px] h-[230px] w-full transition-all hover:-translate-y-1 cursor-pointer group/card">
      <div className="w-[68px] h-[68px] bg-white rounded-[17px] border border-[#EBEBEB]  flex items-center justify-center overflow-hidden shrink-0">
        <img 
          src={imageUrl} 
          alt={stack.name} 
          className="w-full h-full object-cover block" 
        />
      </div>
      
      <div className="flex flex-col gap-[12px] w-full">
        <h3 className="font-wanted font-bold text-[20px] text-[#171717]">{stack.name}</h3>
        <p className="font-wanted text-[16px] text-[#737373] break-keep leading-[24px]">
          {stack.desc}
        </p>
      </div>
    </div>
  );
}

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechModal({ isOpen, onClose }: TechModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/30 backdrop-blur-[2px] pt-[80px]"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[1440px] h-full bg-white rounded-t-[24px] overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto scrollbar-hide px-[20px] md:px-[60px] xl:px-[80px] py-[64px]">
          
          <section className="flex flex-col items-center gap-[48px] mb-[120px]">
            <h2 className="font-wanted font-bold xl:text-[24px] xl:leading-[32px] md:text-[24px] md:leading-[32px] text-[18px] leading-[26px] text-[#171717] text-center whitespace-pre-wrap">
              상상을 실체로.<br />아이디어를 실체로 만드는 기술적 역량.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
              {MAIN_STACKS_DATA.map((s) => (
                <StackCard key={s.id} stack={s} />
              ))}
            </div>
          </section>

          <section className="flex flex-col items-center gap-[48px] pb-[100px]">
            <h2 className="font-wanted font-bold xl:text-[24px] xl:leading-[32px] md:text-[24px] md:leading-[32px] text-[18px] leading-[26px] text-[#171717] text-center whitespace-pre-wrap">
              멈추지 않는 배움.<br />더 많은 상상을 빌딩하기 위해 배울 리스트입니다.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
              {LEARNING_STACKS_DATA.map((s) => (
                <StackCard key={s.id} stack={s} />
              ))}
            </div>
          </section>
        </div>

        {/* 닫기 버튼 */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-20">
          <button 
            onClick={onClose}
            className="group/close w-[56px] h-[56px] bg-white/50 backdrop-blur-[10px] rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <img 
              src="/asset/icons/operation.svg" 
              alt="close icon" 
              className="w-[32px] h-[32px] transition-transform duration-300 ease-in-out group-hover/close:rotate-90" 
            />
          </button>
        </div>
      </div>
    </div>
  );
}