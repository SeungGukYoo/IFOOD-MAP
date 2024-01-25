# iFOOD Map (맛집 지도 공유 사이트)

<img src="https://github.com/SeungGukYoo/IFOOD-MAP/assets/119836116/45655bdc-1188-49b1-b1a0-4132074b67d8" width='200'>

iFOOD는 지도를 통해서 주변 맛집을 쉽게 찾고, 다른 사람들과 맛집을 공유할 수 있는 프로젝트입니다.

## 목차

- [프로젝트 개요](#프로젝트-개요)
- [사용 기술](#사용-기술)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)
- [고민한 문제와 해결 방법](#고민한-문제와-해결-방법)
  - [1번 문제: 카카오 지도 렌더링 관리](#1-카카오-지도-렌더링-관리)
  - [2번 문제: SSR 페이지와 &lt;Script/&gt; 컴포넌트의 사용으로 인한 렌더링 재발생](#2-ssr-페이지와-script-컴포넌트의-사용으로-인한-렌더링-재발생)
  - [3번 문제: React-query의 Hydrate-과정](#3-react-query의-hydrate-과정)
  - [4번 문제: 데이터 업데이트 후 지도에 반영되지 않는 현상](#4-데이터-업데이트-후-지도에-반영되지-않는-현상)
  - [5번 문제: Next-auth의 타입 에러](#5-next-auth의-타입-에러)
- [알려진 이슈와 추후 업데이트 목록](#알려진-이슈와-추후-업데이트-목록)

## 프로젝트 개요

해당 프로젝트는 사용자가 지도를 통해 주변 맛집을 찾고, 맛집을 등록하여 여러 사람들과 맛집을 공유하는 웹 사이트입니다.

### 제작 기간

- 초기 버젼: 2023년 12월 ~ 2024년 1월

- 업데이트 및 리팩토링: 2024년 1월 ~ 현재

### 배포 링크

**[Vercel 배포 링크](https://ifood-map.vercel.app/)**

### 프로젝트 목표

- 평소 사용해보고 싶었던 API 사용
  - Daum Post
  - Geolocation
- 평소 사용해보고 싶었던 라이브러리 사용
  - Zustand
  - Supabase
- 역량 향상
  - React-Query
  - Next.js

## 사용 기술

- **Language**

  ![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

- **Frontend Frameworks**

  ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

- **CSS Framework**

  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

- **Backend Databases**

  ![Supabase](https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white) ![Prisma](https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

- **State Management**

  ![React Query](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
  ![Zustand](https://img.shields.io/badge/Zustand%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

- **Authentication**

  ![NextAuth](https://img.shields.io/badge/Nextauth-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

- **Libraries**

  ![React Icons](https://img.shields.io/badge/reacticons%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Kakao Map](https://img.shields.io/badge/kakaomap-FFCD00?style=for-the-badge&logo=kakao&logoColor=black)
  ![reacthookform](https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)

- **Deployment and Hosting**

  ![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

- **Code Formatting and Linting**

  ![Prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)
  ![ESLint](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## 주요 기능

#### **Common**

- Next-Auth의 토큰의 유무에 따른 페이지 간 접근 관리(Middleware 사용)
- `<Script>` 컴포넌트를 사용하여 스크립트 코드 최적화
- `<Script>` 컴포넌트 렌더링 관리(**afterInteractive**, **onReady**)
- React-query의 `useQuery`와 `useMutate` 함수를 사용하여 CRUD 구성
- Supabase를 사용하여 식당, 찜한 식당, 댓글, 유저 정보 관리
- Prisma를 사용하여 Supabase 데이터 필터링

#### **메인 페이지(경로: / )**

- SSR을 통한 렌더링(Cache 미사용, 12버전: getServerSideProps)
- 카카오 지도에 식당의 위치 마커로 표시
- 식당 클릭 시 상세 페이지로 이동 확인을 위한 팝업 기능 구현
- Geolocation API를 사용하여 현재 위치 이동 기능 구현

#### **식당 목록 페이지(경로: /stores )**

- Zustand를 사용하여 필터링 쿼리 관리
- React-Query를 사용하여 무한 스크롤 구현
- 전역으로 관리되는 필터링 데이터 변경 시 필터링 조건에 맞는 데이터 재호출
- 디바운싱 기능이 적용된 검색창 구현

#### **식당 상세 페이지(경로: /stores/:slug )**

- React-Query를 사용하여 데이터 호출 및 캐싱
- 로그인한 상태인 경우에는 댓글 입력창 활성화
- 댓글 기능 구현
- 댓글 삭제 및 수정 기능 구현
- 현재 식당의 위도/경도를 바탕으로 지도 생성
- 찜한 상태에 따른 찜 버튼 UI 스타일 변경
- 작성자의 경우 수정 및 삭제 버튼 활성화

#### **수정 페이지 (경로: /stores/:slug/edit )**

- 캐싱 된 데이터를 바탕으로 Form 구성
- React-Hook-Form을 사용한 Form 관리
- Daum Post를 사용하여 실제 주소 사용

#### **추가 페이지 (경로: /stores/new)**

- 수정 페이지의 Form과 동일

#### **찜한 식당 페이지 (경로: /user/likes)**

- SSR+React-Qeury를 통한 렌더링(Cache 사용)
- 목록 아이템 클릭 시 해당 식당의 상세 페이지로 이동

#### **나의 정보 페이지 (경로: /user/mypage)**

- Image 컴포넌트를 통한 프로필 이미지 최적화

#### **로그인 페이지 (경로: /user/login)**

- Next-Auth를 통한 로그인/로그아웃 관리
- 토큰(세션) 유무에 따른 로그인(또는 로그아웃+나의 정보) 버튼 활성화

## 프로젝트 구조

<details>
<summary><b>프로젝트 구조 확인하기</b></summary>

```bash
src/
├── app
│   ├── _components
│   │   ├── AuthNavigationLinksBox.tsx
│   │   ├── ErrorBox.tsx
│   │   ├── LoadingCard.tsx
│   │   ├── LoadingPing.tsx
│   │   ├── LoadingSpiner.tsx
│   │   ├── LocationButton.tsx
│   │   ├── MapLoadingSpiner.tsx
│   │   ├── MobileNavbar.tsx
│   │   ├── Navbar.tsx
│   │   └── PageNavigation.tsx
│   ├── _lib
│   │   ├── deleteCommentData.ts
│   │   ├── deleteLikeData.ts
│   │   ├── deleteStoreData.ts
│   │   ├── getLikesData.ts
│   │   ├── getQueryClient.ts
│   │   ├── getStoreData.ts
│   │   ├── getStorePageData.ts
│   │   ├── getStoresData.ts
│   │   ├── setCommentData.ts
│   │   ├── setLikeData.ts
│   │   └── setStoreData.ts
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── comment
│   │   │   └── route.ts
│   │   ├── like
│   │   │   └── route.ts
│   │   ├── store
│   │   │   └── route.ts
│   │   ├── stores
│   │   │   └── route.ts
│   │   └── user
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── provider.tsx
│   ├── stores
│   │   ├── (detail)
│   │   │   └── [slug]
│   │   │       ├── edit
│   │   │       │   └── page.tsx
│   │   │       ├── layout.tsx
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   ├── (stores)
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── _components
│   │   │   ├── AddFormBox.tsx
│   │   │   ├── CommentBox.tsx
│   │   │   ├── CommentInput.tsx
│   │   │   ├── CommentInputBox.tsx
│   │   │   ├── EditFormBox.tsx
│   │   │   ├── FormBox.tsx
│   │   │   ├── LikeButtonBox.tsx
│   │   │   ├── LikesStoreList.tsx
│   │   │   ├── Map.tsx
│   │   │   ├── StoreBox.tsx
│   │   │   ├── StoreDetailBox.tsx
│   │   │   ├── StoreListBox.tsx
│   │   │   ├── StoresList.tsx
│   │   │   └── StoresSearchBox.tsx
│   │   └── new
│   │       └── page.tsx
│   └── user
│       ├── _components
│       │   └── MyPageBox.tsx
│       ├── likes
│       │   ├── layout.tsx
│       │   ├── loading.tsx
│       │   └── page.tsx
│       ├── login
│       │   └── page.tsx
│       └── mypage
│           ├── layout.tsx
│           ├── loading.tsx
│           └── page.tsx
├── data
│   ├── defaultFormData.ts
│   └── district.ts
├── hooks
│   ├── useAddComment.ts
│   ├── useAddressStore.tsx
│   ├── useCommentEditStore.ts
│   ├── useCommentMutation.ts
│   ├── useDeleteComment.ts
│   ├── useDeleteStore.ts
│   ├── useEditComment.ts
│   ├── useGlobalLoadingStore.ts
│   ├── useKakaoClientStore.tsx
│   ├── useLikeStore.ts
│   ├── useLocationStore.tsx
│   ├── useMap.tsx
│   ├── useMapSetting.tsx
│   ├── useMapStore.ts
│   ├── useMoveCurrentLocation.ts
│   ├── useNavigationBar.tsx
│   ├── usePopupControl.ts
│   ├── usePopupStore.tsx
│   ├── usePostcode.tsx
│   ├── useResponsiveToggle.ts
│   ├── useSearchStore.tsx
│   ├── useStoreBox.tsx
│   ├── useStoreForm.tsx
│   └── useStoresList.tsx
├── middleware.ts
└── util
    ├── auth.ts
    ├── debounceHandler.ts
    ├── kakaoClient.ts
    ├── kakaoMapClient.ts
    ├── markerHandler.ts
    ├── prismaClient.ts
    └── signInHandler.ts
```

</details>

## 프로젝트 설치 및 실행

### 로컬 환경 설치 및 실행

1.  프로젝트 설치

    ```bash
    yarn install
    ```

2.  환경 변수 파일 추가

    [카카오](https://next-auth.js.org/providers/kakao)와 [네이버](https://next-auth.js.org/providers/naver), [구글](https://next-auth.js.org/providers/google)의 auth 설정이 추가적으로 필요합니다.

    링크를 클릭하여 문서를 확인한 후 추가적인 환경 설정을 완료해 주세요

    ```none
    <!-- Kakao Map  -->
    NEXT_PUBLIC_KAKAO_KEY=
    NEXT_PUBLIC_KAKAO_CLIENT_KEY=
    NEXT_PUBLIC_KAKAO_RESTAPI_KEY=
    <!-- Google Client -->
    NEXT_PUBLIC_GOOGLE_CLIENT_ID=
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=
    <!-- Naver -->
    NEXT_PUBLIC_NAVER_CLIENT_ID=
    <!-- Next-Auth -->
    NEXT_PUBLIC_API_URL=http://localhost:3000
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=
    <!-- Supabse -->
    DATABASE_URL=
    ```

3.  실행

    ```bash
    yarn dev

    <!-- or -->

    yarn build && yarn start
    ```

## 고민한 문제와 해결 방법

프로젝트를 진행하면서 발생했었던 문제와 해결한 방법입니다.

### 1. **카카오 지도 렌더링 관리**

리액트에서 카카오 지도를 사용할 때는 `index.html`에 스크립트 코드를 삽입하여 실행하였는데, Next.js의 경우에는 `<Script>`컴포넌트를 사용하여 렌더링 함으로 써 스크립트 코드를 최적화하여 사용할 수 있습니다.

그로 인하여 `<Script>`컴포넌트의 추가적인 옵션을 통해서 적절한 렌더링 시점을 관리해 줘야 합니다.

- **lazyOnload vs <u>afterInteractive</u>**

  우선 두 전략의 차이점은 페이지의 모든 리소스를 가져온 후에 스크립트를 실행할 것인지 혹은 서버와 클라이언트 간의 Hydration이 완료된 후에 실행할 것인지의 차이점이다.

  - [afterInteractive 옵션에서 호출 시점](https://github.com/SeungGukYoo/IFOOD-MAP/assets/119836116/7c22b2c6-8439-4ed3-b732-c59b7b996522) : 0.376s
  - [lazyOnload 옵션에서 호출 시점](https://github.com/SeungGukYoo/IFOOD-MAP/assets/119836116/b2af876b-67db-40be-acac-a30eeb5eb7fb) : 3.43s

  lazyOnload는 afterInteractive보다 약 3초 늦게 실행되는 것을 확인할 수 있습니다. 이처럼 lazyOnload의 경우에는 우선순위가 낮은 스크립트를 호출할 때 사용하는 것을 권장하고 있습니다.

  하지만 지도를 호출하기 위한 스크립트이 경우에는 우선순위가 높은 스크립트이기 때문에 lazyOnload보다는 afterInteractive를 통해서 스크립트 코드를 호출해야 하는 것이 옳다고 생각하기 때문에 <u>**afterInteractive를 사용**</u>하여 스크립트 코드를 실행하였습니다.

- **onLoad vs <u>onReady</u>**

  이 두 옵션은 스크립트 코드가 로딩될 때와 준비가 되었을 때의 시점에 코드를 실행하는 옵션입니다.
  순서는 onLoad가 먼저 실행되고, 이후에 onReady가 실행되게 되는데 이 둘의 가장 큰 차이점은 **한번 실행**하느냐 **마운트 될 때마다** 실행하느냐의 차이점입니다.

  그래서 onLoad로 실행한 경우에는 처음에는 정상적으로 동작을 하게 되지만 다시 마운트(예시: 페이지를 이동했을 경우)를 하는 경우에는 스크립트가 호출되지 않아 지도가 보이지 않게 됩니다.

  그렇기에 매번 보여야 하는 지도의 스크립트의 경우에는 onLoad 속성을 사용하는 것이 아닌 onReady를 통해서 스크립트를 호출함으로 마운트가 될 때마다 새로운 지도를 계속해서 호출하고 사용하는 것이 동작을 올바르게 하기 때문에 <u>**onReady 옵션을 사용**</u>하였습니다.

이처럼 스크립트를 실행할 때 `<Sciprt/>` 그냥 사용하는 것이 아닌 옵션을 적절하게 넣음으로 써 원하는 동작을 하고, 렌더링 또한 관리함으로 써 성능상에서도 최적화를 할 수 있게 되었습니다.

### 2. **SSR 페이지와 `<Script/>` 컴포넌트의 사용으로 인한 렌더링 재발생**

상세 페이지에의 구성을 보면 해당 식당의 정보와 지도를 보여주게 됩니다. 그래서 코드를 작성하기 전 아래와 같이 구상하였습니다.

1. page.js에서 fetch를 통해 데이터를 호출(server component) 한 후 데이터를 하위 컴포넌트에 전달
2. props를 바탕으로 페이지를 렌더링

하지만 2번 과정에서 props로부터 받은 값을 바탕으로 지도를 제외한 Form이 렌더링이 되고, `<Script/>`컴포넌트가 호출하는 함수로 인하여 지도가 포함된 페이지를 다시 한번 렌더링을 하였습니다.

이는 Server Side에서 미리 데이터를 받아 폼을 채워 렌더링을 하고, 이후에 Client Side에서 지도의 `<Script/>` 컴포넌트가 호출하는 함수로 인하여 다시 한번 렌더링을 하는 현상으로 확인했습니다.

이를 해결하기 위해서 SSR을 통해서 데이터를 가져와 사용하는 것이 아닌 CSR에서 데이터를 가져오고 이를 사용하여 Form을 채우는 형식으로 변경하였습니다.

그로 인해 렌더링이 두 번 반복되는 것은 사라졌지만 SSR에서 CSR로 변경하였기에 초기 렌더링이 늦어져 사용자가 사용하는데 불편함이 있을 수 있다고 생각했습니다.

그래서 이를 해결하기 위해 스켈레톤 UI(로딩 스피너)를 보여주므로 사용자의 불편을 조금이나마 개선하려고 하였으며, 추후에는 Partial Rendering을 통해 Form의 경우에는 SSR로 렌더링을 진행하고, 지도만 렌더링을 할 수 있게 변경해 보고자 합니다.

### 3. **React-query의 Hydration 과정**

캐싱 기능을 사용할 때 가장 중요한 것은 싱글톤 패턴을 유지하여 사용자 간 요청과 응답이 공유되지 않게 하는 것이 중요하며, 서버에서 받은 값은 Hydration 과정을 거쳐 클라이언트와 동기화를 맞춰주어야 한다고 알고 있습니다.

그래서 SSR 페이지의 경우에는 Hydration 과정이 필수로 존재해야 합니다.

찜한 식당 페이지의 경우에는 SSR을 통해서 렌더링을 하며, 식당을 클릭했을 때 해당 식당의 데이터를 react-query를 통해 캐싱하고자 하였습니다.

이때 SSR 페이지와 캐싱 기능을 구현할 때 중요한 것은 Hydration 과정이 중요한데, 만약 해당 과정이 이루어지지 않으면 데이터가 동기화가 되지 않아 예기치 못한 동작이 발생하게 됩니다.

그렇기에 서버 컴포넌트에서 Hydration를 진행하기 위해 react-query의 공식 문서를 참고하여 아래의 코드처럼 Hydration를 진행하였습니다.

1. QueryClient를 싱글톤 인스턴스로 생성해 줍니다. 이를 통해 여러 사용자들 간의 요청과 응답이 공유되지 않게 됩니다.
   <details>
   <summary><b>코드 확인하기</b></summary>

   ```tsx
   // src/app/getQueryClient.tsx
   import { QueryClient } from "@tanstack/react-query";
   import { cache } from "react";

   const getQueryClient = cache(() => new QueryClient());
   export default getQueryClient;
   ```

   </details>

2. 서버 컴포넌트에서 데이터를 `prefetchQuery`와 `dehydrate` 과정을 거친 후 이를 `<HydrationBoundary>`의 state에 전달함으로 써 중첩된 컴포넌트에서 프리패칭된 데이터에 접근하고 이를 사용할 수 있게 된다.

   <details>
    <summary><b>코드 확인하기</b></summary>

   ```tsx
   // src/app/user/likes/page.tsx
   import { getLikesData } from "@/app/_lib/getLikesData";
   import getQueryClient from "@/app/_lib/getQueryClient";
   import LikesStoreList from "@/app/stores/_components/LikesStoreList";
   import { auth } from "@/util/auth";
   import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
   import React from "react";

   const LikesPage = async () => {
     const authInfo = await auth();
     const queryClient = getQueryClient();
     await queryClient.prefetchQuery({
       queryKey: ["stores", "likes", authInfo?.user.access_token?.sub],
       queryFn: () => getLikesData(authInfo?.user.access_token?.sub!),
     });
     const dehydrateState = dehydrate(queryClient);

     return (
       <HydrationBoundary state={dehydrateState}>
         <LikesStoreList id={authInfo?.user.access_token?.sub!} />
       </HydrationBoundary>
     );
   };

   export default LikesPage;
   ```

   </details>

이렇게 Hydration이 진행된 컴포넌트의 하위 컴포넌트에서는 props를 통해 데이터를 전달하거나 initialData를 선언하지 않아도, 프리패칭된 데이터에 접근하여 데이터를 사용할 수 있습니다.

참고 문서: [Using the app Directory in Next.js 13](https://tanstack.com/query/v4/docs/react/guides/ssr#using-the-app-directory-in-nextjs-13)

### 4. **데이터 업데이트 후 지도에 반영되지 않는 현상**

수정 페이지에서 데이터를 수정한 후 react-query로 업데이트를 한 후 상세 페이지로 이동하게 되는데 이때 지도가 업데이트가 되지 않는 오류가 발생했습니다.

코드를 작성하기 전 전체적인 로직을 구상해 보았습니다.

- **구상**
  1. 상세 페이지로 들어오게 된다면 해당 식당의 데이터는 react-query로 인하여 캐싱이 된다.
  2. 상세 페이지에서 수정 페이지로 이동하게 된다면 캐싱 된 데이터를 사용하여 Form을 미리 채워놓는다.
  3. 데이터 수정을 완료하면 react-query는 기존 캐싱 된 값을 업데이트된 값으로 다시 새로 캐싱 한다.
  4. 상세 페이지로 이동하면 새롭게 업데이트된 캐싱 값을 바탕으로 페이지를 렌더링 한다.

위 로직을 바탕으로 개발을 진행하였고, 발생한 문제는 아래와 같았습니다.

- **캐싱된 값이 변하지 않는 현상**

  `useMutate`를 통해 데이터를 업데이트하였으며, Supabase에서도 업데이트가 되었지만 클라이언트 단에서 캐싱 값이 업데이트가 되지 않음

해당 문제는 react-query를 처음 사용했기에 발생하는 문제였으며, 발생한 이유는 아래와 같았습니다.

1. `useQuery`로 데이터 값을 가져온다. 이때 stale Time은 5분으로 설정한다.
2. `useMutate`로 데이터를 업데이트하고 상세페이지로 넘어가게 된다. 이때 캐싱 값은 업데이트되지 않는다.
3. `useQuery`는 stale Time이 아직 남아있기 때문에 기존의 캐싱 된 값을 가져온다.

이처럼 `useMuate`로 데이터를 업데이트 후 캐싱 값이 변해야 한다면 `useQueryClient`를 통해 캐시 값을 수동으로 업데이트를 해줘야 했습니다.

그래서 이를 위해서 react-query에서도 `invalidateQueries`이라는 메서드를 지원하는데, 해당 메서드는 캐싱 값을 수동으로 업데이트할 수 있는 메서드입니다.

그렇기에 `useMuate`로 데이터를 업데이트를 하였다면 `useQueryClient`의 `invalidateQueries` 메서드로 캐시 값을 업데이트하는 과정을 거침으로 써 캐싱 된 값이 변하면서 이전에 값이 변하지 않는 현상도 해결할 수 있었습니다.

- **캐싱 된 값은 변하지만 지도에서 예기치 않은 동작이 발생**

위 문제를 해결하고 상세 페이지로 가게 되면 지도를 제외한 모든 정보는 업데이트가 되지만 지도의 경우에는 이전 주소와 현재 주소에 마커가 찍히는 현상이 발생했습니다.

그래서 이를 해결하기 위해 지도를 보여주는 관리하는 `Map.tsx`파일에 어떤 위도와 경도가 들어오는지 확인해 보았지만 하나의 함수에서 많은 관심사를 다뤄 정확한 원인을 찾는데 어려움이 있었습니다.

하지만 한 가지 알아낸 것은 `onReady`에서 지도를 생성하는 함수를 호출하고, 이후에 렌더링이 될 때 업데이트가 되기 전의 값을 바탕으로 마커가 보이고, 이후에 업데이트된 값을 바탕으로 또 다른 마커를 보여줬습니다.

이로 보았을 때 업데이트되기 전 값을 바탕으로 비동기 함수가 등록이 되고, 업데이트된 후의 값을 바탕으로 비동기 함수가 추가로 등록이 되어 예기치 않게 동작을 했던 것이라고 판단하여 이를 해결하고자 하였습니다.

해결하기 위해서 코드를 수정하여야 했지만 하나의 함수에 관심사가 다른 비동기 로직을 모두 넣다 보니 수정도 어렵고 정확한 원인을 찾아내는 것이 어려워 관심사를 최대한 분리해 보고자 하였습니다.

- **수정 이전**
  - `Map.tsx`: 지도를 생성하는 함수를 호출한다.
  - `useMap.tsx`: 함수가 호출된 시점에서 `zustand`로 관리되는 위도와 경도 값을 바탕으로 지도를 생성한다.
  - `FormBox.tsx`, `useAddStore.ts`: 추가와 수정을 위한 함수를 모두 관리한다. (하나의 파일에 관심사가 너무 많이 존재한다.)
- **수정 이후**
  - `Map.tsx`: 지도를 생성하는 함수를 호출하는데 이때 생성할 지도에 대한 정보를 전달한다.
  - `useMap.tsx`: 전달받은 값을 바탕으로 지도를 생성한다.
  - `EditFormBox.tsx`: 수정을 하기 위해 캐싱된 값으로부터 식당 데이터를 받아오고, mutate함수를 가지고 있다. 그리고 이를 `FormBox.tsx`에 전달해준다.
  - `AddFormBox.tsx`: 추가를 위한 mutate함수를 가지고 있다. 그리고 이를 `FormBox.tsx`에 전달해준다.
  - `FormBox.tsx`: `props`로부터 Form 데이터를 바탕으로 Form 데이터를 렌더링해준다.
  - `useStoreForm.ts`: `props`로부터 받은 mutate 함수를 실행만 시켜준다.

이렇게 하나의 파일(함수가)이 하나의 목적만 갖게 나눈 후에 파일을 수정하였더니
발생했던 문제는 사라지게 되었고, 추후에 추가 혹은 변경되어야 하는 코드가 있다면 파일 전체를 다 수정하는 것이 아닌 실제 해당 관심사를 가지는 파일만 변경하면 `props`를 받아서 실행되는 함수(파일)들은 수정하지 않아도 동일하게 동작하기 때문에 유지 보수 측면에서도 많이 개선되었습니다.

### 5. **Next-auth의 타입 에러**

로그인과 로그아웃을 위해 Next-auth를 사용하였고, 클라이언트 단에서 이를 사용하기 위해 공식 문서를 참고하여 Session에 Token 값을 저장해 Session을 확장시키려고 하였으나 타입 에러가 발생하였습니다.

 <details>
    <summary><b>코드 확인하기</b></summary>

```ts
callbacks: {
    async session({ session, token }) {
    session.user.access_token = token;
    return session
  }
}
```

[출처:Session Callback](https://next-auth.js.org/configuration/callbacks#session-callback)

</details>

하지만 공식 문서와 다르게 `Session`의 타입에서 `accessToken`을 지원하지 않아 타입 오류 발생하였고, 타입을 역으로 추적해서 지원하는 타입을 확인해 보았습니다.

<details>

<summary><b>타입 확인하기</b></summary>

```ts
export interface DefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: ISODateString;
}
```

</details>

그래서 저는 제공되는 Session 타입을 원본은 유지한 채로 확장하기로 하였습니다.

<details>
<summary><b>첫번째 수정코드 확인하기</b></summary>

```ts
// types/next-auth.d.ts
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      access_token?: JWT;
    } & DefaultSession["user"];
  }
}
```

</details>

이렇게 수정을 하고 Next-auth의 Session callback에 `access_token`을 추가하여 `session`을 확장시킬 수 있었습니다.

하지만 두 번째 문제가 발생하였는데 확장된 session을 확인하기 위해 코드를 쳐보았지만 원하고자 하는 키값이 추천되지 않아서 타입에 문제가 있다고 판단했습니다.

확장은 제대로 되었지만 `JWT` 타입에서 제대로 추천되지 않는 문제가 발생하였을 것이라고 생각했고, `JWT`타입을 역추적하여 타입을 확인해 보았습니다.

```ts
export interface DefaultJWT extends Record<string, unknown> {
  name?: string | null;
  email?: string | null;
  picture?: string | null;
  sub?: string;
}
```

기본적으로 선언된 타입은 Supabase에서 제공되는 JWT와 다르게 부족한 것이 많았기에 추후에 JWT를 사용할 일이 발생하면 올바르게 JWT를 사용하기 위해서 추가적으로 타입을 확장하고자 하였습니다.

<details>
<summary><b>두번째 수정 코드 확인하기</b></summary>

```ts
// types/next-auth.d.ts
import { DefaultSession, Session } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    refreshTokenExpires?: number;
    accessTokenExpires?: number;
    refreshToken?: string;
    token: string;
    exp?: number;
    iat?: number;
    jti?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      access_token?: JWT;
    } & DefaultSession["user"];
  }
}
```

</details>

이렇게 타입을 확장시킴으로 써 개발과정에서 발생하는 타입 에러를 해결하고, 추후에 session을 사용할 때 잘못된 값을 사용하는 것을 방지하여 에기치 못한 에러를 방지할 수 있었습니다.

## 알려진 이슈와 추후 업데이트 목록

배포를 하고, 사용하면서 발생하는 문제와 추후 업데이트할 목록입니다.

### Issues

- **지도에서 찜하기를 한 후 다른 식당을 눌렀을 경우 UI 오류**

  지도 페이지('/')에서 식당을 클릭한 후 찜하기(찜 해제)를 한 후 다른 식당을 바로 누르는 경우에 이전 찜 상태의 UI가 현재 식당의 UI에 반영되는 문제가 있습니다.

- **session이 네트워크 창에 노출되는 현상**

  로그인 과정에서 서버로부터 세션을 받게 되는데 세션에 토큰을 넣어 확장한 탓에 네트워크 창에 토큰에 대한 값이 노출되는 문제가 있습니다.

### Update

- **LightHouse 점수**

  서버로부터 받은 약 1000개의 데이터를 지도에 모두 보여주기 때문에 초기 로딩이 느리고, LightHouse 또한 낮은 점수가 나오고 있습니다.

  **해결 방안**: 카카오 API의 클러스터링 기술을 사용하여 지도에 보이는 데이터만 받아오는 것을 구상하고 있습니다.

- **UI/UX 개선**

  팝업, 메뉴 등이 나타나거나 사라질 때 애니메이션을 추가할 예정입니다.

  또한 서버의 응답이 필요한 동작의 경우에는 현재 나타낼 수 있는 toast 메시지를 추가할 예정입니다.
