import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div>존재하지 않는 페이지입니다.</div>
      <div>
        <Link href={"/"}>go home</Link>
      </div>
    </>
  );
};

export default NotFound;
