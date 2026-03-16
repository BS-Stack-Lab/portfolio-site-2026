// src/constants/data.ts (예시 구조)
export const siteConfig = {
  name: "beomSeoPortfolio",
  domain: "beomseo.portfolio.kr",
  links: {
    portfolio: "#hero", // 포트폴리오(내부 섹션 이동)
    github: "https://github.com/BS-Stack-Lab",
    blog: "https://your-blog-link.com", // 블로그 주소
  },
  nav: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "mailto:your-email@example.com" },
  ],
  
  projects: [
    {
      title: "감각적인 브랜딩",
      description: "macOS의 미학을 웹으로 옮겨와 빌더로서의 정체성을 시각화했습니다. 세밀한 인터랙션과 완성도 높은 디자인을 통해 기획부터 개발까지 아우르는 풀스택 역량을 증명합니다.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Figma"],
    }
  ]
};