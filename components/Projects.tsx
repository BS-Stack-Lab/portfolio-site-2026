"use client";

import React from "react";

// 🛠 1. 경로 및 설정 관리
const PROJECT_ICON_PATH = "/asset/icons/";
const PROJECT_IMAGE_PATH = "/asset/projects/";
const IMAGE_EXT = ".png";

// 🛠 2. 데이터: 총 3개로 구성
const PROJECTS_DATA = [
  { 
    id: 1, 
    fileName: "project1", 
    title: "감각을 깨우는 학습.", 
    desc: "직관적인 퀴즈 인터페이스를 통해 복잡한 UX 디자인 원칙을 재미있게 습득하도록 돕습니다.", 
    link: "#" 
  },
  { 
    id: 2, 
    fileName: "project2", 
    title: "텍스트로 빌딩하는 세계.", 
    desc: "화려한 그래픽 대신 견고한 로직과 몰입감 넘치는 서사로 사용자만의 시나리오를 만들어냅니다.", 
    link: "#" 
  },
  { 
    id: 3, 
    fileName: "project3", 
    title: "감각적인 브랜딩.", 
    desc: "macOS의 미학을 웹으로 옮겨와 빌더로서의 정체성을 시각화했습니다. 세밀한 인터랙션과 완성도 높은 디자인을 통해 기획부터 개발까지 아우르는 풀스택 역량을 증명합니다.", 
    link: "#" 
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center xl:py-[140px] md:py-[100px] py-[80px] overflow-hidden">
      
      {/* 컨텐츠 중앙 정렬 가이드 (최대 1600px) */}
      <div className="w-full max-w-[1600px] flex flex-col px-[20px] md:px-[40px] xl:px-[80px]">
        
        {/* 섹션 타이틀 (AboutMe 스타일 유지) */}
        <div className="md:w-[80%] w-full flex justify-start mb-[48px] md:mb-[60px] xl:mb-[80px]">
          <h2 className="font-wanted font-bold tracking-[-0.12px] xl:text-[40px] xl:leading-[52px] md:text-[32px] md:leading-[42px] text-[24px] text-[#171717]">
            상상이 실체가 되는 순간.
          </h2>
        </div>

        {/* 프로젝트 카드 그리드 (3개 고정 레이아웃) */}
        {/* xl에서는 3열, md에서는 2열, 모바일은 1열로 유동적 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[40px] w-full">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 하단 "프로젝트 더보기" 버튼 */}
        <div className="w-full flex justify-center mt-[60px] md:mt-[80px] xl:mt-[100px]">
          <button className="group flex flex-row items-center justify-between pl-[24px] pr-[10px] w-[194px] h-[56px] bg-[#EEEEF2] rounded-full transition-all duration-300 hover:bg-[#E5E5E5] active:scale-95 hover:shadow-lg">
            <span className="font-wanted font-bold text-[#171717] text-[16px] leading-[24px] tracking-[0.057px]">
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

// 🛠 프로젝트 카드 컴포넌트
function ProjectCard({ project }: { project: typeof PROJECTS_DATA[0] }) {
  const imageUrl = `${PROJECT_IMAGE_PATH}${project.fileName}${IMAGE_EXT}`;

  return (
    <div className="relative w-full rounded-[24px] overflow-hidden group border border-[#EEEEF2] transition-all duration-500 hover:shadow-xl">
      
      {/* 배경 이미지 영역 (꽉 차게 설정) */}
      <div className="relative w-full aspect-[4/5] md:aspect-[3/4] xl:aspect-[10/13]">
        <img 
          src={imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        {/* 하단 가독성을 위한 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
      </div>

      {/* 텍스트 컨텐츠 (이미지 하단에 겹침) */}
      <div className="absolute bottom-0 left-0 w-full p-[24px] md:p-[32px] flex flex-col gap-[12px] text-white">
        <h3 className="font-wanted font-bold text-[20px] md:text-[24px] leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="font-wanted font-normal text-[#D1D1D6] text-[14px] md:text-[16px] leading-relaxed break-keep line-clamp-2">
          {project.desc}
        </p>
      </div>

      {/* 전체 클릭 영역 */}
      <a href={project.link} className="absolute inset-0 z-10" />
    </div>
  );
}