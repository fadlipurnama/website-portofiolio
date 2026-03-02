import React from "react";
import { SocialLinks } from "../molecules/SocialLinks";
import { NavGroup } from "../molecules/NavGroup";
import { Copyright } from "../atoms/Copyright";

function Footer() {
  return (
    <footer
      id="footer"
      aria-labelledby="tag-name-footer"
      className="py-24 w-full lg:p-20 bg-linear-to-br from-brand-gray2 to-brand-black"
    >
      <div className="flex flex-col lg:flex-row gap-10">
        <div className=" text-center lg:text-left flex flex-col gap-8">
          <h2 id="tag-name-footer" className="text-2xl font-bold">
            Muhammad Fadli Purnama
          </h2>
          <h3>Contact with us</h3>
          <SocialLinks
            gap="gap-3"
            className="mx-auto lg:mx-0"
            iconSize="size-8"
          />
          <div className="text-center lg:text-left ">
            <Copyright />
          </div>
        </div>
        <div className="flex flex-1 justify-center  lg:justify-end">
          <NavGroup variant="footer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
