import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  ChartNoAxesGantt,
  ChevronDown,
  ChevronRightIcon,
  Phone,
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex justify-between items-center h-[100px] w-full text-lg bg-white shadow-sm fixed px-5 py-5 z-50">
        <Link href="/">
          {" "}
          <Image
            height={66}
            width={230}
            src="/images/logo.png"
            alt="LOGO"
            className="ml-28"
          />
        </Link>
        <div className="flex justify-center items-center gap-x-5 mr-28">
          <ul className="flex justify-center items-center gap-x-5 ">
            <Link href="/">
              {" "}
              <Button
                variant="secondary"
                className="hover:bg-opacity-[70%] bg-white text-2xl font-semibold hover:bg-[#e6f6f9] hover:text-[#04A6C8]"
              >
                Home
              </Button>
            </Link>
            {/* <Link href="/blog-view-2">
              {" "}
              <Button
                variant="secondary"
                className="hover:bg-opacity-[70%] bg-white hover:bg-[#e6f6f9] hover:text-[#04A6C8]"
              >
                Services
              </Button>
            </Link> */}
            <Menubar className="hidden md:flex border-none   flex-col justify-center items-center   ">
              <MenubarMenu>
                <MenubarTrigger className="[data-state=open]:bg-white flex justify-center items-center">
                  <Button
                    variant="secondary"
                    className="flex justify-center items-center  hover:bg-opacity-[70%] bg-white text-2xl font-semibold  hover:bg-[#e6f6f9] hover:text-[#04A6C8] focus:bg-white"
                  >
                    Services
                    <ChevronDown className="mt-2 w-10 h-10" />
                  </Button>
                </MenubarTrigger>
                <MenubarContent className="flex flex-wrap z-50 justify-between items-center  w-[60rem] mr-16 mt-4 px-10  h-auto ">
                  <Link
                    href="/general-virtual-assistants"
                    className="w-[47%] h-[124px]"
                  >
                    {" "}
                    <MenubarItem>
                      <div className="w-full hover:cursor-pointer  hover:bg-gray-50 flex justify-start gap-x-3 items-start rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                        <div className="h-[60px] w-[80px] flex justify-center items-center rounded-xl bg-[#FF440012] bg-opacity-[7%]">
                          <Image
                            src="/images/menu-icon/Mask group (2).png"
                            alt=""
                            width={40}
                            height={40}
                            quality={100}
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-1">
                          <h3 className="text-[18px] font-bold">
                            General Virtual Assistants
                          </h3>
                          <p className="text-sm">
                            Our rates are up to 80% lower than average US
                            outsourcing costs,
                          </p>
                        </div>
                      </div>
                    </MenubarItem>
                  </Link>
                  <Link
                    href="/real-estate-virtual-assistants"
                    className="w-[47%] h-[124px]"
                  >
                    {" "}
                    <MenubarItem>
                      <div className="w-full hover:cursor-pointer  hover:bg-gray-50 flex justify-start gap-x-3 items-start rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                        <div className="h-[60px] w-[80px] flex justify-center items-center rounded-xl bg-[#FF440012] bg-opacity-[7%]">
                          <Image
                            src="/images/menu-icon/Mask group (3).png"
                            alt=""
                            width={40}
                            height={40}
                            quality={100}
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-1">
                          <h3 className="text-[18px] font-bold">
                            Real Estate Virtual Assistants
                          </h3>
                          <p className="text-sm">
                            Our rates are up to 80% lower than average US
                            outsourcing costs,
                          </p>
                        </div>
                      </div>
                    </MenubarItem>
                  </Link>
                  <Link
                    className=" w-[47%] h-[124px]"
                    href="/marketing-virtual-assistants"
                  >
                    <MenubarItem>
                      <div className="w-full hover:cursor-pointer  hover:bg-gray-50 flex justify-start gap-x-3 items-start rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                        <div className="h-[60px] w-[80px] flex justify-center items-center rounded-xl bg-[#FF440012] bg-opacity-[7%]">
                          <Image
                            src="/images/menu-icon/Mask group (4).png"
                            alt=""
                            width={40}
                            height={40}
                            quality={100}
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-1">
                          <h3 className="text-[18px] font-bold">
                            Marketing Virtual Assistants
                          </h3>
                          <p className="text-sm">
                            Our rates are up to 80% lower than average US
                            outsourcing costs,
                          </p>
                        </div>
                      </div>
                    </MenubarItem>
                  </Link>
                  <Link
                    className="w-[47%] h-[124px]"
                    href="/customer-service-representative"
                  >
                    <MenubarItem>
                      <div className="w-full hover:cursor-pointer  hover:bg-gray-50 flex justify-start gap-x-3 items-start rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                        <div className="h-[60px] w-[80px] flex justify-center items-center rounded-xl bg-[#FF440012] bg-opacity-[7%]">
                          <Image
                            src="/images/menu-icon/Mask group (5).png"
                            alt=""
                            width={40}
                            height={40}
                            quality={100}
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-1">
                          <h3 className="text-[18px] font-bold">
                            Customer Service Representatives
                          </h3>
                          <p className="text-sm">
                            Our rates are up to 80% lower than average US
                            outsourcing costs,
                          </p>
                        </div>
                      </div>
                    </MenubarItem>
                  </Link>
                  <Link
                    className="w-[47%] h-[124px]"
                    href="/customer-service-representation"
                  >
                    <MenubarItem>
                      <div className="w-full hover:cursor-pointer  hover:bg-gray-50 flex justify-start gap-x-3 items-start rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                        <div className="h-[60px] w-[80px] flex justify-center items-center rounded-xl bg-[#FF440012] bg-opacity-[7%]">
                          <Image
                            src="/images/menu-icon/Mask group (6).png"
                            alt=""
                            width={40}
                            height={40}
                            quality={100}
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-1">
                          <h3 className="text-[18px] font-bold">
                            Master Service Agreement
                          </h3>
                          <p className="text-sm">
                            Our rates are up to 80% lower than average US
                            outsourcing costs,
                          </p>
                        </div>
                      </div>
                    </MenubarItem>
                  </Link>
                  <MenubarSeparator />{" "}
                  <div className="flex w-full h-full items-center ">
                    {" "}
                    <MenubarItem className="w-full">
                      <Link
                        href="/calculator"
                        className="w-full flex justify-start items-start "
                      >
                        {" "}
                        <div className="h-auto  flex  gap-x-3  rounded-xl  px-2 md:px-0 py-2 mt-5 md:mt-0 ">
                          <div className="w-[58px] h-[58px] flex justify-end items-start rounded-xl  pt-2">
                            <Phone fill="black" />
                            {/* <Image
                              src="/images/calender.png"
                              alt=""
                              width={40}
                              height={40}
                              quality={100}
                            /> */}
                          </div>
                          <div className="flex flex-col justify-start items-start gap-y-1">
                            <h3 className="text-lg font-bold">
                              Schedule A Call
                            </h3>
                            <p className="text-sm">
                              Book Anytime, Today, Or This Week
                            </p>
                          </div>
                        </div>
                      </Link>
                    </MenubarItem>
                    <div className="flex  ml-5 w-full justify-end items-end max-md:ml-0 max-md:w-full">
                      <button className="flex justify-center w-[50%] items-center gap-x-5 relative   gap-4 px-4 py-5  text-xl font-bold leading-none text-center text-white bg-cyan-500 rounded-3xl max-md:mt-10">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d0c822e6505921ac11785c04c137a1cf5006d1cc9ed5b25426c5401e90a5bd9?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                          alt=""
                          className="object-contain shrink-0 aspect-square w-[35px]"
                        />
                        <span className="grow shrink my-auto w-[196px]">
                          Book A call
                        </span>
                      </button>
                    </div>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <Link href="/blog-view-2">
              {" "}
              <Button
                variant="secondary"
                className="hover:bg-opacity-[70%] bg-white text-2xl font-semibold hover:bg-[#e6f6f9] hover:text-[#04A6C8]"
              >
                Resource
              </Button>
            </Link>
            <Link href="/blog-view-1">
              <Button
                variant="secondary"
                className="hover:bg-opacity-[70%] bg-white text-2xl font-semibold hover:bg-[#e6f6f9] hover:text-[#04A6C8]"
              >
                About Us
              </Button>
            </Link>
          </ul>
          <div className="flex justify-center items-center gap-x-2">
            <Button
              size="lg"
              className="bg-[#04A6C8] text-2xl font-semibold hover:bg-[#04A6C8] text-white rounded-lg px-5 py-5"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-center items-center relative bg-transparent w-full">
        <div className="md:hidden fixed top-5 left-0 right-0 flex justify-between items-center w-[90%] p-5 rounded-3xl mx-auto text-lg bg-white shadow-lg z-30">
          <Link href="/">
            {" "}
            <Image
              height={38}
              width={118}
              src="/images/Nav Image.png"
              alt="LOGO"
            />
          </Link>
          <Menubar className="border-none [data-state]:bg-white flex flex-col justify-center items-center  ">
            <MenubarMenu>
              <MenubarTrigger className="[data-state=open]:bg-white">
                {" "}
                <Button
                  variant="default"
                  className="bg-[#04A6C8] text-white rounded-lg px-5 py-2"
                >
                  <ChartNoAxesGantt className="size-[40px]" />
                </Button>
              </MenubarTrigger>
              <MenubarContent className=" z-50  w-[85vw]  mr-8 overflow-y-scroll h-[100vw] ">
                <Link href="/">
                  {" "}
                  <MenubarItem className="flex justify-between h-[52px] items-center w-full text-lg font-semibold">
                    Home <ChevronRightIcon className="size-5" />
                  </MenubarItem>
                </Link>
                <MenubarItem className="flex justify-between h-[52px] items-center w-full text-lg font-semibold">
                  Services <ChevronRightIcon className="size-5" />
                </MenubarItem>
                <Link href="/general-virtual-assistants">
                  {" "}
                  <MenubarItem>
                    <div className="w-full   flex justify-start gap-x-3 items-star rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                      <div className=" flex justify-center items-center rounded-xl bg-[#FF440012] bg-opacity-[7%]">
                        <Image
                          src="/images/menu-icon/Mask group (2).png"
                          alt=""
                          width={22}
                          height={22}
                          quality={100}
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-y-1">
                        <h3 className="text-sm font-semibold">
                          General Virtual Assistants
                        </h3>
                        <p className="text-xs">
                          Our rates are up to 80% lower than average US
                          outsourcing costs,
                        </p>
                      </div>
                    </div>
                  </MenubarItem>
                </Link>
                <Link href="/real-estate-virtual-assistants">
                  {" "}
                  <MenubarItem>
                    <div className="w-full   flex justify-center gap-x-3 items-center rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                      <div className=" flex justify-center items-center rounded-xl bg-[#F4EFFF]">
                        <Image
                          src="/images/menu-icon/Mask group (3).png"
                          alt=""
                          width={22}
                          height={22}
                          quality={100}
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-y-1">
                        <h3 className="text-sm font-semibold">
                          Real Estate Virtual Assistants
                        </h3>
                        <p className="text-xs">
                          Our rates are up to 80% lower than average US
                          outsourcing costs,
                        </p>
                      </div>
                    </div>
                  </MenubarItem>
                </Link>
                <Link href="/marketing-virtual-assistants">
                  <MenubarItem>
                    <div className="w-full   flex justify-center gap-x-3 items-center rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                      <div className="size-[50px] flex justify-center items-center rounded-xl bg-[#DCF9FF]">
                        <Image
                          src="/images/menu-icon/Mask group (4).png"
                          alt=""
                          width={22}
                          height={22}
                          quality={100}
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-y-1">
                        <h3 className="text-sm font-semibold">
                          Marketing Virtual Assistants
                        </h3>
                        <p className="text-xs">
                          Our rates are up to 80% lower than average US
                          outsourcing costs,
                        </p>
                      </div>
                    </div>
                  </MenubarItem>
                </Link>
                <Link href="/customer-service-representative">
                  <MenubarItem>
                    <div className="w-full   flex justify-center gap-x-3 items-center rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                      <div className="size-[50px] flex justify-center items-center rounded-xl bg-[#FFDFF5]">
                        <Image
                          src="/images/menu-icon/Mask group (5).png"
                          alt=""
                          width={22}
                          height={22}
                          quality={100}
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-y-1">
                        <h3 className="text-sm font-semibold">
                          Customer Service Representatives
                        </h3>
                        <p className="text-xs">
                          Our rates are up to 80% lower than average US
                          outsourcing costs,
                        </p>
                      </div>
                    </div>
                  </MenubarItem>
                </Link>
                <Link href="/customer-service-representation">
                  <MenubarItem>
                    <div className="w-full   flex justify-center gap-x-3 items-center rounded-xl  px-2  py-2 mt-5 md:mt-0 ">
                      <div className="size-[50px] flex justify-center items-center rounded-xl bg-[#E3FFD3]">
                        <Image
                          src="/images/menu-icon/Mask group (6).png"
                          alt=""
                          width={22}
                          height={22}
                          quality={100}
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-y-1">
                        <h3 className="text-sm font-semibold">
                          master service agreement
                        </h3>
                        <p className="text-xs">
                          Our rates are up to 80% lower than average US
                          outsourcing costs,
                        </p>
                      </div>
                    </div>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/blog-view-2">
                  {" "}
                  <MenubarItem className="text-lg font-semibold">
                    Resources
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/blog-view-1">
                  <MenubarItem className="text-lg font-semibold">
                    About Us
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/calculator">
                  {" "}
                  <MenubarItem>
                    <div className="w-full h-auto  flex justify-center gap-x-3 items-center rounded-xl  px-2 md:px-4 py-2 mt-5 md:mt-0 ">
                      <div className="w-[58px] h-[58px] flex justify-center items-center rounded-xl bg-[#04A6C8]">
                        <Image
                          src="/images/calender.png"
                          alt=""
                          width={40}
                          height={40}
                          quality={100}
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-y-1">
                        <h3 className="text-lg font-bold">Schedule A Call</h3>
                        <p className="text-sm">
                          Book Anytime, Today, Or This Week
                        </p>
                      </div>
                    </div>
                  </MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </>
  );
};

export default Navbar;
