"use client";

import React from "react";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechModal({ isOpen, onClose }: TechModalProps) {
  if (!isOpen) return null;

  // 🛠 경로 끝에 '/'가 붙어있는지 확인하세요.
  const assetPath = "/asset/techModal/";

  const mainStacks = [
    { id: "java", name: "Java", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "java.png" },
    { id: "intellij", name: "Intelije IDE", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "intelije.png" },
    { id: "vscode", name: "Visual Studio Code", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "vscode.png" },
    { id: "github", name: "GitHub", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "github.png" },
    { id: "figma", name: "Figma", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "figma.png" },
    { id: "photoshop", name: "Photoshop", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "ps.png" },
    { id: "illustrator", name: "Illustrator", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "ai.png" },
    { id: "lightroom", name: "Lightroom Classic", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "lightroom.png" },
    { id: "lottie", name: "Lottie", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "lottie.png" },
    { id: "notion", name: "Notion", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "notion.png" },
    { id: "slack", name: "Slack", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "slack.png" },
  ];

  const learningStacks = [
    { id: "js", name: "Javascript", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "js.png" },
    { id: "react", name: "React", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "react.png" },
    { id: "flutter", name: "Flutter", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "flutter.png" },
    { id: "supabase", name: "Supabase", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "supabase.png" },
    { id: "html", name: "HTML", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "html.png" },
    { id: "css", name: "CSS", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "css.png" },
    { id: "jira", name: "Jira", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "jira.png" },
  ];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/30 backdrop-blur-[2px] pt-[80px]"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[1440px] h-full bg-white rounded-t-[24px] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto scrollbar-hide px-[20px] md:px-[60px] xl:px-[80px] py-[64px]">
          
          {/* 섹션 1: 상단 기술 역량 */}
          <div className="flex flex-col items-center gap-[48px] mb-[120px]">
            <h2 className="font-wanted font-bold text-[24px] leading-[32px] text-[#171717] text-center whitespace-pre-wrap">
              상상을 실체로.<br />아이디어를 실체로 만드는 기술적 역량.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
              {mainStacks.map((s) => (
                <StackCard key={s.id} stack={s} assetPath={assetPath} />
              ))}
            </div>
          </div>

          {/* 섹션 2: 하단 배울 리스트 */}
          <div className="flex flex-col items-center gap-[48px] pb-[100px]">
            <h2 className="font-wanted font-bold text-[24px] leading-[32px] text-[#171717] text-center whitespace-pre-wrap">
              멈추지 않는 배움.<br />더 많은 상상을 빌딩하기 위해 배울 리스트입니다.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
              {learningStacks.map((s) => (
                <StackCard key={s.id} stack={s} assetPath={assetPath} />
              ))}
            </div>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2">
          <button 
            onClick={onClose}
            className="w-[56px] h-[56px] bg-white/50 backdrop-blur-[10px] rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:scale-110 transition-all active:scale-95"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 8L24 24M24 8L8 24" stroke="#2A2A37" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// 🛠 아이콘 노출을 위해 수정한 개별 카드 컴포넌트 🛠
function StackCard({ stack, assetPath }: { stack: any, assetPath: string }) {
  return (
    // 1. 부모 카드의 h-[240px] 고정 및 패딩 조정 (p-[32px] md:p-[24px])
    <div className="flex flex-col justify-between items-start p-[32px] md:p-[24px] xl:p-[32px] bg-[#F5F5F7] rounded-[24px] h-[240px] w-full">
      
      {/* 2. 아이콘 컨테이너 수정 (핵심) */}
      <div className="
        w-[68px] h-[68px] 
        bg-white rounded-[17px] 
        border border-[#EBEBEB] 
        shadow-sm 
        flex items-center justify-center 
        overflow-hidden 
        /* 모바일 중앙 정렬을 위해 mx-auto, md 이상에서 왼쪽 정렬을 위해 md:mx-0 */
        mx-auto md:mx-0
      ">
        <img 
          src={`${assetPath}${stack.icon}`} 
          alt={stack.name} 
          // 3. 이미지 자체의 크기를 w-full h-full로 가득 채우고 object-cover 적용
          className="w-full h-full object-cover"
        />
      </div>

      {/* 4. 텍스트 영역 */}
      <div className="flex flex-col gap-[12px] w-full">
        <h3 className="font-wanted font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.12px]">
          {stack.name}
        </h3>
        <p className="font-wanted font-normal text-[16px] leading-[24px] text-[#737373] tracking-[0.057px] break-keep">
          {stack.desc}
        </p>
      </div>
    </div>
  );
}