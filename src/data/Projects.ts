export const data = [
  {
    title: "프로젝트 잼",
    description:
      "코딩 알려주는 누나 타입스크립트 스터디 중 팀 프로젝트 기간에 진행한 사이드 프로젝트 매칭 플랫폼 입니다.",
    projectType: "팀 프로젝트",
    role: "프론트엔드 개발 (프론트 4인 팀)",
    image: "projectJam",
    notion: "https://www.notion.so/22235a29aa8c80f0a7e7c25f669a9807",
    github: "https://github.com/czmcm5/project-jam",
    demo: "https://project-jam-gamma.vercel.app/",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Firebase",
    ],
    mainFeat: [
      "팀 리더로 회의 진행, 일정 산정, 발표 담당",
      "반응형 디자인으로 모든 디바이스 지원",
      "프로젝트 등록 및 모집 마감 기능",
      "좋아요 및 지원하기 기능을 통한 사용자 상호작용",
      "Private Route를 통한 인증 및 권한 기반 접근 제어 구현",
    ],
    techCallenge: ["zustand 상태 관리", "Firebase API"],
    performance: [
      "스터디 내 팀 프로젝트 1등",
      "외부 런칭 프로젝트 참여 제안 수신",
    ],
    troubleshooting: [
      {
        title: "좋아요 버튼 클릭 시 1초 지연 후 반영되는 현상",
        issue:
          "좋아요 버튼 클릭 시 데이터가 firebase에 저장되고 success를 반환하기까지의 시간만큼 UX적으로 딜레이가 생기는 문제.",
        solution:
          "버튼 클릭 후 응답이 오기 전에 미리 데이터를 업데이트 시켜 자연스러운 사용자 경험이 되도록 개선하며 낙관적 업데이트라는 개념에 대해 새롭게 알게 되었습니다.",
      },
      {
        title: "등록페이지의 입력 필드가 너무 많아 관리하기 어려웠던 문제",
        issue:
          "기획대로 구현하기 위해서 등록 페이지에 14개의 입력 필드를 넣어야 했는데, 컴포넌트가 너무 복잡해지고 가독성이 떨어져 관리가 힘들었던 문제.",
        solution: `1차적으로는 관심사 분리 원칙에 따라 사용자에게 보여줄 뷰 컴포넌트와 필드를 조작하는 로직을 담은 훅 컴포넌트로 나누었습니다.\n이후 2차적으로 각 14개의 필드들을 다시 4가지로 분류(기본 정보, 팀 구성, 프로젝트 계획, 모집 조건) 하여 총 4가지의 훅과 4가지의 뷰 컴포넌트로 쪼개어 단계별로 개발하였습니다. 이렇게 하니 한 파일이 담는 코드의 수가 줄고 가독성이 높아져 나중에 유지 보수하기가 훨씬 편해졌음을 체감하였습니다.`,
      },
      {
        title: "전역변수 참조 방식에 대한 고민",
        issue:
          "전역 변수를 사용하는 컴포넌트가 많아 직접 호출하면 하나의 페이지에 중복 호출이 될까싶어 이걸 props로 일일이 넘길지 아니면 그냥 각 컴포넌트에서 직접 호출해서 참조할지 고민.",
        solution:
          "Context API가 참조하는 모든 하위 컴포넌트를 리랜더링 하는 것과는 달리 Zustand는 구독 기반으로, 진짜 그 값을 사용하는 컴포넌트만 리랜더링을 일어나게 한다는 것을 새롭게 공부하게 되었습니다. 이렇게 Zustand가 전역 상태를 필요한 곳에서 자유롭게 가져다 쓰는 구조로 설계되어 있어 굳이 props로 전달하지 않아도 될 것 같다고 판단하여, 필요로 하는 컴포넌트에서 호출하여 직접 참조시키는 방법을 사용하기로 하였습니다.",
      },
    ],
  },
  {
    title: "Spotify 데모",
    description:
      "Spotify의 주요 기능을 클론하며, Spotify API를 활용해 음악 검색, 재생, 사용자 플레이리스트 등을 구현한 프로젝트입니다.",
    projectType: "개인",
    role: "프론트엔드 개발 (단독)",
    github: "https://github.com/czmcm5/spotify-deemo",
    demo: "https://spotify-deemo-dabin.netlify.app/",
    skills: ["React", "TypeScript", "netlify"],
    mainFeat: [
      "반응형 디자인으로 모든 디바이스 지원",
      "사이드 프로젝트 매칭 시스템",
      "프로젝트 좋아요, 지원 시스템",
    ],
  },
  {
    title: "React 페이먼츠",
    description: "React로 구축한 완전한 결제 시스템 라이브러리 입니다.",
    projectType: "개인",
    role: "프론트엔드 개발 (단독)",
    github: "https://github.com/czmcm5/react-payment",
    demo: "https://czmcm5.github.io/react-payment/",
    skills: ["React", "TypeScript", "Vite"],
    mainFeat: [
      "반응형 디자인으로 모든 디바이스 지원",
      "사이드 프로젝트 매칭 시스템",
      "프로젝트 좋아요, 지원 시스템",
    ],
  },
];
