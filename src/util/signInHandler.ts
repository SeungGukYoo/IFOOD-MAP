import { signIn } from "next-auth/react";
type Provider = "google" | "kakao" | "naver";
function signInHandler(provider: Provider) {
  return signIn(provider, { callbackUrl: "/" });
}

export default signInHandler;
