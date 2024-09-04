import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Book{id}</h1>;
}

/*
 *  [id].tsx VS [...id].tsx 파일명
 *
 *  1. [id].tsx - 단일 동적 경로일 경우
 *
 *  2. [...id].tsx - 동적 경로가 여러개 일 경우
 *    ex) /book/12/23/1
 *    => 이런 경우 "catch all segment" 라고 한다
 *
 *    하지만, 경로에 id 값을 작성하지 않은 경우 404 에러창이 뜬다.
 *    이를 해결하기 위해 대괄호[] 로 한 번 더 감싸주면
 *    값이 없는 경우, 한 개인 경우, 여러개인 경우 모두 대응 가능하다
 *    => 이 때는 optional catch all segment 라고 한다.
 */
