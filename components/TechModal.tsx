"use client";

import React from "react";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechModal({ isOpen, onClose }: TechModalProps) {
  if (!isOpen) return null;

  // 🛠 데이터 정의: 경로 해석 오류를 방지하기 위해 '/'로 시작하는 절대 경로를 사용합니다.
  // 사용님이 확인하신 소문자 파일명을 그대로 유지했습니다.
  const mainStacks = [
    { id: "java", name: "Java", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/java.png" },
    { id: "intellij", name: "Intelije IDE", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/intelije.png" },
    { id: "vscode", name: "Visual Studio Code", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/vscode.png" },
    { id: "github", name: "GitHub", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/github.png" },
    { id: "figma", name: "Figma", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/figma.png" },
    { id: "photoshop", name: "Photoshop", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/ps.png" },
    { id: "illustrator", name: "Illustrator", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/ai.png" },
    { id: "lightroom", name: "Lightroom Classic", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/lightroom.png" },
    { id: "lottie", name: "Lottie", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/lottie.png" },
    { id: "notion", name: "Notion", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/notion.png" },
    { id: "slack", name: "Slack", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/slack.png" },
  ];

  const learningStacks = [
    { id: "js", name: "Javascript", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/js.png" },
    { id: "react", name: "React", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/react.png" },
    { id: "flutter", name: "Flutter", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/flutter.png" },
    { id: "supabase", name: "Supabase", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/supabase.png" },
    { id: "html", name: "HTML", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/html.png" },
    { id: "css", name: "CSS", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/css.png" },
    { id: "jira", name: "Jira", desc: "애플스토어의 UI 스타일을 카피해서 포트폴리오 사이트 제작.", icon: "/asset/techModal/jira.png" },
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
                <StackCard key={s.id} stack={s} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-[48px] pb-[100px]">
            <h2 className="font-wanted font-bold text-[24px] text-[#171717] text-center">
              멈추지 않는 배움.<br />더 많은 상상을 빌딩하기 위해 배울 리스트입니다.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
              {learningStacks.map((s) => (
                <StackCard key={s.id} stack={s} />
              ))}
            </div>
          </div>
        </div>

        {/* 🛠 닫기 버튼: operation.svg 적용 및 호버 시 90도 회전 */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-20">
          <button 
            onClick={onClose}
            className="group w-[56px] h-[56px] bg-white/50 backdrop-blur-[10px] rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <img 
              src="/asset/icons/operation.svg" 
              alt="close" 
              className="w-[32px] h-[32px] transition-transform duration-500 ease-in-out group-hover:rotate-90" 
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function StackCard({ stack }: { stack: any }) {
  return (
    <div className="flex flex-col justify-between items-start p-[32px] md:p-[24px] xl:p-[32px] bg-[#F5F5F7] rounded-[24px] h-[240px] w-full">
      {/* 아이콘 컨테이너: 배경 흰색 및 중앙 정렬 */}
      <div className="w-[68px] h-[68px] bg-white rounded-[17px] border border-[#EBEBEB] shadow-sm flex items-center justify-center overflow-hidden mx-auto md:mx-0">
        <img 
          src={stack.icon} 
          alt={stack.name} 
          // object-contain으로 로고 모양 보존 및 여백(p-2) 추가
          className="w-full h-full object-contain p-2 block"
          onError={(e) => {
            // 이미지 로드 실패 시 콘솔에 로그를 남깁니다 (디버깅용)
            console.log(`${stack.name} 이미지 로드 실패: ${stack.icon}`);
          }}
        />
      </div>
      <div className="flex flex-col gap-[12px] w-full">
        <h3 className="font-wanted font-bold text-[20px] text-[#171717]">{stack.name}</h3>
        <p className="font-wanted text-[16px] text-[#737373] break-keep">{stack.desc}</p>
      </div>
    </div>
  );
}