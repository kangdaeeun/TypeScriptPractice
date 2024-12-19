"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 여기 주소 이름은 route.ts 파일의 경로다
    const getPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json(); // 제이슨 언어를 자스 언어로
      console.log(data);
    };
    getPosts();
  }, []);

  const addPost = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        name: "예병수",
        age: 20,
        job: "개발 튜터",
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      안녕 <button onClick={addPost}>추가</button>
    </div>
  );
}
