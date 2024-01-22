# iFOOD Map

사람들과 맛집을 공유하는 사이트입니다.

## 목차

- [프로젝트 개요](#프로젝트-개요)
- [프로젝트 구조](#프로젝트-구조)
- [프로젝트 배포 링크](#배포-링크)
- [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)

## 프로젝트 개요

해당 프로젝트는 사용자가 지도를 통해 주변 맛집을 찾고, 맛집을 등록하여 여러 사용자간 맛집을 공유하는 프로젝트입니다.

### 제작 기간

- 초기 버젼: 2023년 12월 ~ 2024년 1월

- 업데이트 및 리팩토링: 2024년 1월 ~ 현재

### 프로젝트 목표

해당 프로젝트를 시작하게 된 계기는 평소에 사용해보고 싶었던 Daum Post를 사용하고, Next.js 역량 향상과 Supabase, React-query를 학습하고 사용하기 위해 시작하였습니다.

### 주요 기능

1. 로그인한 사용자에 한하여 식당을 찜하거나, 식당 게시글에 댓글 작성하여 사용자들간 소통을 할 수 있습니다.

2. React-query를 사용하여 CRUD를 구성하고, 무한 스크롤 기능을 구현하였습니다.

3. 카카오 지도를 통해 지도에 식당의 정보를 확인할 수 있습니다.

4. Daum Post를 사용하여 실제 주소를 검색하고, 이를 사용하여 카카오 지도에 식당의 위치를 표시하게 됩니다.

5. 네이버와 구글, 카카오 로그인을 지원하여 소셜 로그인을 통해 로그인을 할 수 있습니다.

### 사용 기술

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

<img src=""/>

## 프로젝트 구조

<details>
<summary>프로젝트 구조 확인하기</summary>

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

## 배포 링크

[Vercel 배포 링크](https://ifood-map.vercel.app/)

## 프로젝트 설치 및 실행

### 로컬 환경 설치 및 실행

1.  프로젝트 설치

    ```bash
    yarn install
    ```

2.  환경 변수 파일 추가

    [카카오](https://next-auth.js.org/providers/kakao)와 [네이버](https://next-auth.js.org/providers/naver), [구글](https://next-auth.js.org/providers/google)의 auth 설정이 추가적으로 필요합니다.
    해당 이름을 클릭하여 문서를 확인해 추가적인 설정을 완료해주세요

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
    ```

## 문제와 해결 방법

프로젝트를 진행하면서 발생했었던 문제와 해결한 방법입니다.

#### 1. **카카오 지도 렌더링 관리**

리액트에서 카카오 지도를 사용할 때는 `index.html`에 스크립트 코드를 삽입하여 실행하였는데, Next.js의 경우에는 `<Script>`컴포넌트를 통해서 렌더링 함으로 써 스크립트를 최적화하는데 도움이 된다. 그로인하여 `<Script>`컴포넌트의 추가적인 옵션을 통해서 렌더링 시점을 관리해줘야 한다.

- **lazyOnload vs afterInteractive**

  우선 두 전략의 차이점은 페이지의 모든 리소스를 가져온 후에 Script를 실행할 것인지 혹은 서버와 클라이언트간의 하이드레이션이 완료된 후에 실행할 것인지의 차이점이다.

  - [afterInteractive](https://github.com/SeungGukYoo/IFOOD-MAP/assets/119836116/7c22b2c6-8439-4ed3-b732-c59b7b996522)
  - [lazyOnload](https://github.com/SeungGukYoo/IFOOD-MAP/assets/119836116/b2af876b-67db-40be-acac-a30eeb5eb7fb)

  그렇기에 lazyOnload의 경우에는 우선 순위가 낮은 스크립트를 호출할 때 주로 사용된다.
  하지만 지도의 경우에는 우선순위가 높은 요소이기 때문에 lazyOnload보다는 기본 값인 afterInteractive에 실행하는 것이 옳다고 생각한다.

- **onLoad vs onReady**

  이 두 옵션은 Script 코드가 로딩될 때와 준비가 되었을 때의 시점에 코드를 실행하는 옵션이다.
  순서는 onLoad 후에 onReady인데 가장 큰 차이점으로는 **한번 실행**하느냐 **마운트 될 때**마다 실행하느냐의 차이점이 있다.

  Kakao 지도의 경우에는 `<div id="map"/>`이 생성된 후 해당 div에 지도를 넣어주는 방식으로 진행되는데 onLoad와 onRead로 작성했을 떄 처음 마운트 될때에는 모두 제대로 실행되지만 다시 마운트(예시: 페이지를 이동했을 경우)가 되었을 떄는 onLoad의 경우에는 지도를 가져오지 못하게 된다.

  그렇기에 지도를 통해 옳바른 동작을 하기 위해서는 onRead를 통해서 지도를 생성하는 함수를 호출해주면 된다.

script를 실행할 때 `<Sciprt/>`컴포넌트를 통해 렌더링 전략을 세운 뒤, 구현하고자 하는 동작에 맞게 옵션을 설정함으로 써 지도를 렌더링 할 때 성능을 개선하여 렌더링을 하였습니다.

#### 2. **SSR 페이지와 `<Script/>` 컴포넌트의 사용으로 인한 렌더링 관리**

상세 페이지에의 구성을 보면 해당 식당의 정보와 지도를 보여주게 된다.그래서 코드를 작성하기전 아래와 같이 구상하였다.

1. page.js에서 fetch를 통해 데이터를 호출(server component)한 후 데이터를 하위 컴포넌트에 전달
2. props를 바탕으로 페이지 렌더링

하지만 2번 과정에서 props로부터 받은 값을 바탕으로 지도를 제외한 데이터가 한번 보여진 후 `<Script/>`컴포넌트로 인해 다시 로딩이 걸린 다음 지도를 포함한 상세 페이지가 보여지는 현상이 발생하였습니다.

이를 해결하기 위해서 서버컴포넌트가 아닌 클라이언트 컴포넌트로 변경하였습니다.
그로인해 렌더링이 두번 반복되는 것은 사라졌지만 서버 컴포넌트에서 클라이언트 컴포넌트로 변경하였기에 초기 렌더링이 늦어져 사용자의 경험이 감소하는 문제가 생기게 되었습니다.

그래서 이를 해결하기 위해 스켈레톤 UI(로딩 스피너)를 보여줌으로 사용자의 경험을 개선하였고, 추후에 Partial Rendering을 통해 지도만 다시 렌더링하게 변경해보고자 합니다.

#### 3. **React-query의 Hydrate**

react-query와 Next.js에서 모두 캐싱 기능을 제공하는데 이 둘은 차이점도 존재한다. 그래서 대부분의 사람들이 Next.js 에서 굳이 React-query를 사용해야 하나라는 의문점도 갖고 있었고, 나 또한 이를 진행하면서 큰 고민이 있었지만 react-query는 캐싱 데이터를 바탕으로 여러가지 유용한 기능들을 제공하기 때문에 나는 같이 사용하는 것으로 정하였습니다.

- 현재 상태
  - 수정 페이지는 상세 페이지에서만 접근이 가능하다.
  - 상세 페이지에 방문하였다면 해당 데이터는 react-query를 통해 캐싱이 되게 된다.
  - 수정 페이지에 방문한다면 캐싱된 데이터를 기반으로 Form을 채워준다.

저는 현재 상태를 고려하여 서버 사이드 렌더링을 통해 사용자에게 만들어진 페이지를 제공하고 싶었으며, react-query로 캐싱된 데이터가 있기 때문에 캐싱된 데이터를 하위 컴포넌트에 전달하고 싶었습니다.

이때 SSR페이지와 캐싱 기능을 구현할 때 중요한 것은 Hydrate과정이 중요한데, 만약 해당 과정이 이루어지지 않으면 데이터가 동기화가 되지 않아 예기치 못한 동작이 발생하게 됩니다.

그렇기에 싱글톤 패턴을 유지한 상태로 프리 패칭한 데이터를 hydrate하는 과정이 필수로 포함되어야 했습니다.

그렇기에 서버 컴포넌트에서 Hydrate를 진행하기 위해 react-query의 공식문서를 참고하여 아래의 코드처럼 Hydrate를 진행하였습니다.

1. QueryClient(쿼리클라이언트)를 싱글톤 인스턴스로 생성해줍니다. 이를 통해 여러 사용자들간의 요청이 굥유되지 않게 됩니다.

   ```tsx
   // app/getQueryClient.tsx
   import { QueryClient } from "@tanstack/react-query";
   import { cache } from "react";

   const getQueryClient = cache(() => new QueryClient());
   export default getQueryClient;
   ```

2. 서버 컴포넌트에서 데이터를 `prefetchQuery`와 `dehydrate` 과정을 거친 후 이를 `<HydrationBoundary>`의 state에 전달함으로 써 중첩된 컴포넌트에서 프리패칭된 데이터에 접근하고 이를 사용할 수 있게 된다.

   ```tsx
   // app/stores/(detail)/[slug]/edit/page.tsx
   import getQueryClient from "@/app/_lib/getQueryClient";
   import { getStoreData } from "@/app/_lib/getStoreData";
   import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
   import React from "react";
   import EditFormBox from "../../../_components/EditFormBox";

   const EditPage = async ({ params }: { params: { slug: string } }) => {
     const queryClient = getQueryClient();
     await queryClient.prefetchQuery({
       queryKey: ["store", params.slug],
       queryFn: async () => {
         const response = await getStoreData(params.slug);
         return response;
       },
       staleTime: 60 * 1000 * 5,
     });
     const dehydratedState = dehydrate(queryClient);
     return (
       <>
         <HydrationBoundary state={dehydratedState}>
           <EditFormBox id={params.slug} />
         </HydrationBoundary>
       </>
     );
   };

   export default EditPage;
   ```

이렇게 Hydrate가 진행된 컴포넌트의 하위 컴포넌트에서는 props를 통해 데이터를 전달하거나 initialData를 선언하지 않아도, 서버 컴포넌트에서 미리 캐싱한 데이터에 접근하여 캐싱 데이터를 사용할 수 있게 되었습니다.

참고 문서: [Using the app Directory in Next.js 13](https://tanstack.com/query/v4/docs/react/guides/ssr#using-the-app-directory-in-nextjs-13)
