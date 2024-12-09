import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-8 m-4">안녕하세요. NextJs 입니다</div>
      <div>
        <Link href={"/about"}>go about</Link>
      </div>
      <div>
        <Link href={"/business"}>go business</Link>
      </div>
      <div>
        <Link href={"/contact"}>go contact</Link>
      </div>
      <div>
        <Link href={"/blog/1"}>go blog</Link>
      </div>
    </div>
  );
}
