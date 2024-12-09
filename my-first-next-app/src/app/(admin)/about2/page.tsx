import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="">
      <div>
        <a href={"/about"}>go about</a>
      </div>
      <div>
        <Link href={"/"}>go home</Link>
      </div>
    </div>
  );
};

export default AboutPage;
