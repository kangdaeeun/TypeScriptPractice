import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>This is Contact Page</h1>
      <p>Hello Next</p>
      <Link href={"/"}>go home</Link>
    </div>
  );
};

export default ContactPage;
