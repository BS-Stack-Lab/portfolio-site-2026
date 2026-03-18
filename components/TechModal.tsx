"use client";

import React from "react";

// 🛠 Props 타입 정의: 이 부분이 없으면 임포트 시 오류가 날 수 있습니다.
interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechModal({ isOpen, onClose }: TechModalProps) {
  // 열림 상태가 아니면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  const assetPath = "/asset/techModal/";

  const mainStacks = [
    { id: "java", name: "Java", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "java.png" },
    { id: "intellij", name: "Intelije IDE", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "intellij.png" },
    { id: "vscode", name: "Visual Studio Code", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "vscode.png" },
    { id: "github", name: "GitHub", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "github.png" },
    { id: "figma", name: "Figma", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "figma.png" },
    { id: "photoshop", name: "Photoshop", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "photoshop.png" },
    { id: "illustrator", name: "Illustrator", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "illustrator.png" },
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
          
          <div className="flex flex-col items-center gap-[48px] mb-[120px]">
            <h2 className="font-wanted font-bold text-[24px] text-[#171717] text-center">
              상상을 실체로.<br />아이디어를 실체로 만드는 기술적 역량.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
              {mainStacks.map((s) => (
                <div key={s.id} className="flex flex-col justify-between p-[32px] bg-[#F5F5F7] rounded-[24px] h-[240px]">
                  <div className="w-[68px] h-[68px] bg-white rounded-[17px] border border-[#EBEBEB] overflow-hidden flex items-center justify-center">
                    <img src={`${assetPath}${s.icon}`} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="font-wanted font-bold text-[20px] text-[#171717]">{s.name}</h3>
                    <p className="font-wanted text-[16px] text-[#737373] break-keep">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-[48px] pb-[100px]">
            <h2 className="font-wanted font-bold text-[24px] text-[#171717] text-center">
              멈추지 않는 배움.<br />더 많은 상상을 빌딩하기 위해 배울 리스트입니다.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
              {learningStacks.map((s) => (
                <div key={s.id} className="flex flex-col justify-between p-[32px] bg-[#F5F5F7] rounded-[24px] h-[240px]">
                  <div className="w-[68px] h-[68px] bg-white rounded-[17px] border border-[#EBEBEB] overflow-hidden flex items-center justify-center">
                    <img src={`${assetPath}${s.icon}`} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="font-wanted font-bold text-[20px] text-[#171717]">{s.name}</h3>
                    <p className="font-wanted text-[16px] text-[#737373] break-keep">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2">
          <button 
            onClick={onClose}
            className="w-[56px] h-[56px] bg-white/50 backdrop-blur-[10px] rounded-full flex items-center justify-center border border-white/20 shadow-lg"
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