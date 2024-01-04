"use client";
import ErrorBox from "@/app/_components/ErrorBox";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorBox text="예기치 못한 에러가 발생하였습니다.">
        <button onClick={() => reset()}>재시도</button>
      </ErrorBox>
    </>
  );
}
