"use client";

import React, { useRef } from "react";

// 설정 관리
const PROJECT_ICON_PATH = "/asset/icons/";
const PROJECT_IMAGE_PATH = "/asset/projects/";
const IMAGE_EXT = ".png";

const PROJECTS_DATA = [
  { id: 1, fileName: "project1", title: "감각을 깨우는 학습.", desc: "직관적인 퀴즈 인터페이스를 통해 복잡한 UX 디자인 원칙을 재미있게 습득하도록 돕습니다.", link: "#" },
  { id: 2, fileName: "project2", title: "텍스트로 빌딩하는 세계.", desc: "화려한 그래픽 대신 견고한 로직과 몰입감 넘치는 서사로 사용자만의 시나리오를 만들어냅니다.", link: "#" },
  { id: 3, fileName: "project3", title: "상상이 현실이 되는 공간.", desc: "가상 환경에서의 상호작용을 통해 아이디어를 실체화하고 검증할 수 있는 플랫폼을 구축합니다.", link: "#" },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-white flex flex-col items-center xl:py-[140px] md:py-[100px] py-[80px] overflow-hidden">
      
      <div className="w-full max-w-[1600px] flex flex-col px-[20px] md:px-[40px] xl:px-[80px]">
        
        {/* 섹션 타이틀 */}
        <div className="md:w-[80%] w-full flex justify-start mb-[48px] md:mb-[60px] xl:mb-[80px]">
          <h2 className="font-wanted font-bold tracking-[-0.12px] xl:text-[40px] xl:leading-[52px] md:text-[32px] md:leading-[42px] text-[24px] text-[#171717]">
            상상이 실체가 되는 순간.
          </h2>
        </div>

        {/* 🛠 가로 스크롤 컨테이너 🛠 */}
        <div 
          ref={scrollRef}
          className="
            flex flex-row w-full 
            /* 가로 스크롤 활성화 및 스크롤바 숨김 */
            overflow-x-auto scrollbar-hide 
            /* 한 카드씩 넘어가게 하는 Snap 설정 */
            snap-x snap-mandatory 
            /* 카드 사이 간격 */
            gap-[20px] xl:gap-[40px]
            /* 데스크톱(xl)에서는 스크롤 없이 3열 고정 (원하실 경우) */
            xl:grid xl:grid-cols-3 xl:overflow-visible
          "
        >
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id} 
              className="
                /* 모바일/태블릿에서 카드의 너비 결정 */
                min-w-[calc(100vw-40px)] md:min-w-[calc(50%-10px)] xl:min-w-0
                /* Snap 지점 설정 (시작점에 걸리도록) */
                snap-start
              "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* 하단 버튼 */}
        <div className="w-full flex justify-center mt-[60px] md:mt-[80px] xl:mt-[100px]">
          <button className="group flex flex-row items-center justify-between pl-[24px] pr-[10px] w-[194px] h-[56px] bg-[#EEEEF2] rounded-full transition-all hover:bg-[#E5E5E5] active:scale-95">
            <span className="font-wanted font-bold text-[#171717] text-[16px]">
              프로젝트 더보기
            </span>
            <div className="w-[36px] h-[36px] bg-[#0071E3] rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-90">
              <img src={`${PROJECT_ICON_PATH}plus.svg`} alt="plus" className="w-[20px] h-[20px]" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS_DATA[0] }) {
  const imageUrl = `${PROJECT_IMAGE_PATH}${project.fileName}${IMAGE_EXT}`;

  return (
    <div className="relative w-full rounded-[24px] overflow-hidden group border border-[#EEEEF2] transition-all duration-500 hover:shadow-xl">
      <div className="relative w-full aspect-[4/5] md:aspect-[3/4] xl:aspect-[10/13]">
        <img 
          src={imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-[24px] md:p-[32px] flex flex-col gap-[12px] text-white">
        <h3 className="font-wanted font-bold text-[18px] md:text-[22px] xl:text-[24px] leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="font-wanted font-normal text-[#D1D1D6] text-[13px] md:text-[15px] xl:text-[16px] leading-relaxed break-keep line-clamp-2">
          {project.desc}
        </p>
      </div>
      <a href={project.link} className="absolute inset-0 z-10" />
    </div>
  );
}