# iFOOD Map

사람들과 맛집을 공유하는 사이트입니다.

## 목차

- [프로젝트 개요](#프로젝트-개요)
- [프로젝트 구조](#프로젝트-구조)
- [프로젝트 배포 링크](#배포-링크)
- [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)
- [문제와 해결 방법](#문제와-해결-방법)
  - [1번 문제: 카카오 지도 렌더링 관리](#1-카카오-지도-렌더링-관리)
  - [2번 문제: SSR 페이지와 &lt;Script/&gt; 컴포넌트의 사용으로 인한 렌더링 재발생](#2-ssr-페이지와-script-컴포넌트의-사용으로-인한-렌더링-재발생)
  - [3번 문제: React-query의 Hydrate-과정](#3-react-query의-hydrate-과정)
  - [4번 문제: 데이터 업데이트 후 지도에 반영되지 않는 현상](#4-데이터-업데이트-후-지도에-반영되지-않는-현상)
  - [5번 문제: Next-auth의 타입 에러](#5-next-auth의-타입-에러)
- [알려진 이슈와 추후 업데이트 목록](#알려진-이슈와-추후-업데이트-목록)

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

## 배포 링크

**[Vercel 배포 링크](https://ifood-map.vercel.app/)**

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

#### 2. **SSR 페이지와 `<Script/>` 컴포넌트의 사용으로 인한 렌더링 재발생**

상세 페이지에의 구성을 보면 해당 식당의 정보와 지도를 보여주게 된다.그래서 코드를 작성하기전 아래와 같이 구상하였다.

1. page.js에서 fetch를 통해 데이터를 호출(server component)한 후 데이터를 하위 컴포넌트에 전달
2. props를 바탕으로 페이지 렌더링

하지만 2번 과정에서 props로부터 받은 값을 바탕으로 지도를 제외한 데이터가 한번 보여진 후 `<Script/>`컴포넌트로 인해 다시 로딩이 걸린 다음 지도를 포함한 상세 페이지가 보여지는 현상이 발생하였습니다.

이를 해결하기 위해서 서버컴포넌트가 아닌 클라이언트 컴포넌트로 변경하였습니다.
그로인해 렌더링이 두번 반복되는 것은 사라졌지만 서버 컴포넌트에서 클라이언트 컴포넌트로 변경하였기에 초기 렌더링이 늦어져 사용자의 경험이 감소하는 문제가 생기게 되었습니다.

그래서 이를 해결하기 위해 스켈레톤 UI(로딩 스피너)를 보여줌으로 사용자의 경험을 개선하였고, 추후에 Partial Rendering을 통해 지도만 다시 렌더링하게 변경해보고자 합니다.

#### 3. **React-query의 Hydrate 과정**

react-query와 Next.js에서 모두 캐싱 기능을 제공하는데 이 둘은 차이점도 존재한다. 그래서 대부분의 사람들이 Next.js 에서 굳이 React-query를 사용해야 하나라는 의문점도 갖고 있었고, 나 또한 이를 진행하면서 큰 고민이 있었지만 react-query는 캐싱 데이터를 바탕으로 여러가지 유용한 기능들을 제공하기 때문에 나는 같이 사용하는 것으로 정하였습니다.

- 현재 상태
  - 수정 페이지는 상세 페이지에서만 접근이 가능하다.
  - 상세 페이지에 방문하였다면 해당 데이터는 react-query를 통해 캐싱이 되게 된다.
  - 수정 페이지에 방문한다면 캐싱된 데이터를 기반으로 Form을 채워준다.

저는 현재 상태를 고려하여 서버 사이드 렌더링을 통해 사용자에게 만들어진 페이지를 제공하고 싶었으며, react-query로 캐싱된 데이터가 있기 때문에 캐싱된 데이터를 하위 컴포넌트에 전달하고 싶었습니다.

이때 SSR페이지와 캐싱 기능을 구현할 때 중요한 것은 Hydrate과정이 중요한데, 만약 해당 과정이 이루어지지 않으면 데이터가 동기화가 되지 않아 예기치 못한 동작이 발생하게 됩니다.

그렇기에 싱글톤 패턴을 유지한 상태로 프리 패칭한 데이터를 hydrate하는 과정이 필수로 포함되어야 했습니다.

그렇기에 서버 컴포넌트에서 Hydrate를 진행하기 위해 react-query의 공식문서를 참고하여 아래의 코드처럼 Hydrate를 진행하였습니다.

1.  QueryClient(쿼리클라이언트)를 싱글톤 인스턴스로 생성해줍니다. 이를 통해 여러 사용자들간의 요청이 굥유되지 않게 됩니다.
    <details>
    <summary><b>코드 확인하기</b></summary>

    ```tsx
    // app/getQueryClient.tsx
    import { QueryClient } from "@tanstack/react-query";
    import { cache } from "react";

    const getQueryClient = cache(() => new QueryClient());
    export default getQueryClient;
    ```

    </details>

2.  서버 컴포넌트에서 데이터를 `prefetchQuery`와 `dehydrate` 과정을 거친 후 이를 `<HydrationBoundary>`의 state에 전달함으로 써 중첩된 컴포넌트에서 프리패칭된 데이터에 접근하고 이를 사용할 수 있게 된다.

    <details>
     <summary><b>코드 확인하기</b></summary>

    ```tsx
    // app/stores/(detail)/[slug]/edit/page.tsx
    import getQueryClient from "@/app/\_lib/getQueryClient";
    import { getStoreData } from "@/app/\_lib/getStoreData";
    import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
    import React from "react";
    import EditFormBox from "../../../\_components/EditFormBox";

    const EditPage = async ({ params }: { params: { slug: string } }) => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
    queryKey: ["store", params.slug],
    queryFn: async () => {
    const response = await getStoreData(params.slug);
    return response;
    },
    staleTime: 60 _ 1000 _ 5,
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

    </details>

이렇게 Hydrate가 진행된 컴포넌트의 하위 컴포넌트에서는 props를 통해 데이터를 전달하거나 initialData를 선언하지 않아도, 서버 컴포넌트에서 미리 캐싱한 데이터에 접근하여 캐싱 데이터를 사용할 수 있게 되었습니다.

참고 문서: [Using the app Directory in Next.js 13](https://tanstack.com/query/v4/docs/react/guides/ssr#using-the-app-directory-in-nextjs-13)

#### 4. **데이터 업데이트 후 지도에 반영되지 않는 현상**

수정 페이지에서 데이터를 수정한 후 react-query로 업데이트를 한 후 상세 페이지로 이동하게 되는데 이때 지도가 업데이트가 되지 않는 오류가 발생했습니다.

개발을 하기 전 전체적인 로직을 구상해보았습니다.

- **구상**
  1. 상세 페이지로 들어오게 된다면 해당 식당의 데이터는 react-query로 인하여 캐싱이 된다.
  2. 상세 페이지에서 수정 페이지로 이동하게 된다면 캐싱된 데이터를 사용하여 Form을 미리 채워놓는다.
  3. 데이터 수정을 완료하면 react-query는 기존 캐싱된 값을 업데이트 된 값으로 다시 새로 캐싱한다.
  4. 상세 페이지로 이동하면 새롭게 업데이트된 캐싱 값을 바탕으로 페이지를 렌더링한다.

위 로직을 바탕으로 개발을 진행하였고, 발생한 문제는 아래와 같았습니다.

1. **캐싱된 값이 변하지 않는 현상**
   `useMutate`를 통해 데이터를 업데이트하였으며, Supabase에서도 업데이트가 되었지만 클라이언트 단에서 캐싱값이 업데이트가 되지 않았습니다.

해당 문제는 react-query를 처음 사용했기에 발생하는 문제였습니다.
발생한 이유는 아래와 같았습니다.

1. `useQuery`로 데이터 값을 가져온다. 이때 stale Time은 5분으로 설정한다.
2. `useMutate`로 데이터를 업데이트하고 상세페이지로 넘어가게 된다. 이때 캐싱값은 업데이트 되지 않는다.
3. `useQuery`는 stale Time이 아직 남아있기 때문에 기존의 캐싱된 값을 가져온다.

이 처럼 업데이트 후 캐싱값이 변해야 한다면 `useQueryClient`를 통해 캐시 값을 업데이트를 해줘야 했습니다.

2. **캐싱된 값은 변하지만 지도에서 예기치 않은 동작이 발생**

위 문제를 해결하고 상세 페이지로 가게 되면 지도를 제외한 모든 정보는 업데이트가 되지만 지도의 경우에는 이전 주소와 현재 주소에 마커가 찍히는 현상이 발생했습니다.

그래서 이를 해결하기 위해 지도를 보여주는 관리하는 `Map.tsx`파일에 어떤 위도와 경도가 들어오는지 확인해보았지만 관심사가 너무 많아 정확한 원인을 찾는데 어려움이 있었다.
하지만 한가지 알아낸 것은 `afterInteractive`함수가 등록되고, 이후에 렌더링이 실행될 때 업데이트되기 전 값이 보여졌고, 이후에 업데이트 된 값이 출력되었다. 이로보았을 때 위도와 경도값이 다른 렌더링이 두번 등록되어서 발생한 문제라고 생각하였습니다.

이를 해결하기 위해서 코드를 수정하여야 했지만 하나의 함수에 관심사가 다른 비동기 로직을 모두 넣다보니 예기치 못하게 비동기 로직이 꼬이게 되어 문제가 발생했던 것이였습니다.

그래서 저는 함수의 관심사를 최대한 분리하기 위해 다시 코드를 작성했습니다.

- **수정 이전**
  - `Map.tsx`: 함수가 호출된 시점에서 `zustand`로 관리되는 위도와 경도 값을 가져온다.
  - `FormBox.tsx`,`useAddStore.ts`: 추가와 수정 함수를 모두 관리
- **수정 이후**
  - `Map.tsx`: 전달 값을 바탕으로 지도만 렌더링한다.
  - `EditFormBox.tsx`: 수정을 하기위해 캐싱된 값으로부터 받아오고, mutate함수를 가지고 있다. 그리고 이를 `FormBox.tsx`에 전달해준다.
  - `AddFormBox.tsx`: 추가를 위한 mutate함수를 가지고 있다. 그리고 이를 `FormBox.tsx`에 전달해준다.
  - `FormBox.tsx`: Form 데이터를 렌더링해주는데 `props`로부터 Form 데이터를 받는다면 이를 바탕으로 내부 폼을 채워준다.
  - `useStoreForm.ts`: 파라미터로부터 받은 mutate 함수를 실행만 시켜준다.

이렇게 하나의 파일(함수가)이 하나의 목적만 갖게 나눈 후에 파일을 실행하니 발생했던 문제는 사라지게 되었고, 추후에 추가 혹은 변경되어야 하는 코드가 있다면 파일 전체를 다 수정하는 것이 아닌 실제 해당 관심사를 가지는 파일만 변경하면 `props`를 받아서 실행되는 함수(파일)들은 수정하지 않아도 동일하게 동작하기 때문에 유지보수 측면에서도 많이 좋아졌습니다.

#### 5. **Next-auth의 타입 에러**

로그인과 로그아웃을 위해 Next-auth를 사용하였고, 클라이언트 단에서 이를 사용하기 위해 공식문서를 참고하여 Session에 Token값을 저장해 Session을 확장시키려고 하였으나 타입에러가 발생하였습니다.

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

하지만 공식문서와 다르게 `Session`의 타입에서 `accessToken`을 지원하지 않아 타입오류 발생하였고, 타입을 역으로 추적해서 지원하는 타입을 확인해보았습니다.

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

그래서 저는 제공되는 Session타입을 원본은 유지한 채로 확장하기로 하였습니다.

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

하지만 두번째 문제가 발생하였는데 확장된 session을 확인하기 위해 저장된 값을 확인하고자 하였으나 타입이 정확하게 매핑되지 않아 확인하고 싶은 값이 뜨지 않았습니다.

저는 이번에는 `JWT` 타입에서 문제가 발생하였을 것이라고 예상했고, 타입을 역추적하여 JWT의 타입을 확인해보았습니다.

```ts
export interface DefaultJWT extends Record<string, unknown> {
  name?: string | null;
  email?: string | null;
  picture?: string | null;
  sub?: string;
}
```

기본적으로 선언된 타입은 Supabase에서 제공되는 JWT와 다르게 부족한것이 많았기에 추후에 JWT를 사용할 일이 발생하면 옳바르게 JWT를 사용하기 위해서 추가적으로 타입을 확장하고자 하였습니다.

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

  **해결방안**: 카카오 API의 클러스터링 기술을 사용하여 지도에 보여지는 데이터만 받아오는 것을 구상하고 있습니다.

- **UI/UX 개선**

  팝업, 메뉴등이 나타나거나 사라질 때 애니메이션을 추가할 예졍입니다.

  또한 서버의 응답이 필요한 동작의 경우에는 현재 나타낼 수 있는 toast 메시지를 추가할 예정입니다.
