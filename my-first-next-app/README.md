## Getting Started

npx create-next-app@14
14version 으로 시작

yarn 사용


## 4가지 주요 렌더링 기법
# CSR(Client Side Rendering)
특징
순수 React 사용했을 때 100%
브라우저에서 JavaScript를 이용해 동적으로 페이지를 렌더링하는 방식
렌더링의 주체: 클라이언트

# SSR(Server Side Rendering)
특징
ssg, isr처럼 렌더링 주체가 서버
클라이언트의 요청 시 렌더링

# SSG(Static Site Generation)
특징
서버에서 페이지를 렌더링하여 클라이언트에게 HTML을 전달하는 방식
최초 빌드 시에만 생성이 됨
사전에 미리 정적 페이지를 여러 개 만들어놓음 > 클라이언트가 홈페이지 요청을 하면, 서버에서는 이미 만들어져있는 사이트를 바로 제공 > 클라이언트는 표기만 함

# ISR(Incremental Static Regeneration)
특징
SSG처럼 정적 페이지를 제공
설정한 주기만큼 페이지를 계속 생성(ex: 주기가 10분이라면 10분마다 데이터베이스 또는 외부 영향 때문에 변경된 사항을 반영하는 역할)
정적 페이지를 먼저 보여주고, 필요에 따라 서버에서 페이지를 재생성하는 방식