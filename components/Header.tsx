import Image from "next/image";
import Form from "next/form";
import React from "react";
import logo from "@/images/logo.png";
import menusvg from "@/images/menu.svg";
import Container from "./Container";

const Header = () => {
  return (
    <header className="w-full bg-darkBlue py-4 border-b border-b-darkBlue">
      <Container className="flex items-center justify-between gap-5">
        <Image src={logo} alt="logo" className="w-40" priority></Image>
        <Image src={menusvg} alt="logo" className="w-8" priority></Image>
        <Form action="/search" className="flex-1">
          <input
            type="text"
            name="query"
            placeholder="Tìm kiếm sản phẩm"
            className="w-full border boder-gay-400 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-none"
          />
        </Form>        
        <div>tabs</div>
      </Container>
    </header>
  );
};

export default Header;
