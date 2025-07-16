"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero section */}
      <section className="hero-section background-image ">
        <div className="container mx-auto">
          <div className="w-5/6 lg:w-2/3 md:w-3/4 sm:w-4/5 mx-auto pt-37.5 lg:pt-82.5 md:pt-62.5 sm:pt-50.5 lg:pb-12.5 md:pb-5 sm:pb-2.5 pb-0 h-full">
            <div className="flex flex-col text-center">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white felixtitling lg:leading-[140%] md:leading-[130%] sm:leading-[120%] leading-[110%]">
                  Find Your Dream Home Today
                </h1>
                <p className="font-medium text-white">
                  Explore the best properties in your city — for living,
                  investing, or vacation.
                </p>
              </div>

              <div className="py-12.5">
                <a href="#" className="btn-primary text-white">
                  Book a Free Consultation
                </a>
              </div>
              <div className="lg:flex hidden flex-col items-start bg-blur pt-5 pr-7.5 pb-8.5 pl-7.5 rounded-[30px] gap-y-7.5">
                <p className="font-medium text-white">Search For Property</p>
                <div className="flex flex-row w-full justify-between items-center">
                  <a
                    href="#"
                    className="flex gap-x-2.5 btn-secondary text-white items-center"
                  >
                    Location
                    <Image
                      src={"/images/location.png"}
                      width={24}
                      height={24}
                      alt="location"
                      unoptimized={true}
                      className="w-full! h-full! object-cover"
                    />
                  </a>

                  <a
                    href="#"
                    className="flex gap-x-2.5 btn-secondary text-white items-center"
                  >
                    Type
                    <Image
                      src={"/images/home-icon.png"}
                      width={24}
                      height={24}
                      alt="home"
                      unoptimized={true}
                      className="w-full! h-full! object-cover"
                    />
                  </a>

                  <a
                    href="#"
                    className="flex gap-x-2.5 btn-secondary text-white items-center"
                  >
                    Price
                    <Image
                      src={"/images/tag-right.png"}
                      width={24}
                      height={24}
                      alt="tag-right"
                      unoptimized={true}
                      className="w-full! h-full! object-cover"
                    />
                  </a>

                  <a
                    href="#"
                    className="flex bg-white gap-x-2.5 btn-secondary text-black items-center"
                  >
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* partner section */}
      <section className="partner-section px-3 md:px-4 lg:px-5 py-100 lg:m-0 md:m-0 m-2.5">
        <div className="container mx-auto">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-5">
            <div className="lg:w-1/2 w-full flex flex-col">
              <div className="mb-7.5">
                <h2 className="text-black lg:leading-[130%] md:leading-[120%] sm:leading-[115%] leading-[110%]">
                  Your Trusted Partner in Real Estate
                </h2>
              </div>
              <Image
                src={"/images/image.png"}
                width={632}
                height={537}
                alt="image"
                unoptimized={true}
                className="w-full! h-full! object-cover"
              />
            </div>

            <div className="lg:w-1/2 w-full flex flex-col gap-y-5 justify-between">
              <div className="flex gap-5 lg:gap-y-0 md:gap-y-0">
                <div className="image-wrapper">
                  <Image
                    src={"/images/image (1).png"}
                    width={267}
                    height={364}
                    alt="image (1)"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </div>
                <div className="image-wrapper">
                  <Image
                    src={"/images/image (2).png"}
                    width={338}
                    height={364}
                    alt="image (2)"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h2 className="text-black mt-5 lg:leading-[130%] md:leading-[120%] sm:leading-[115%] leading-[110%]">
                  Over a Decade of Real Estate Excellence
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* properties section */}
      <section className="properties-section">
        <div className="container mx-auto pb-100">
          <div className="text-center mb-5 lg:px-5 md:px-4 px-3">
            <h2 className="text-black mt-5 lg:leading-[140%] md:leading-[120%] sm:leading-[120%] leading-[120%]">
              Latest Properties on the Market
            </h2>
            <p className="felixtitling text-black">
              Discover our most recent listings, updated in real-time to help
              you find your perfect home faster.
            </p>
          </div>

          <div className="flex slider-navigation gap-x-5 justify-center mb-12.5 lg:px-5 md:px-4 px-3">
            <div className="left-navigation bg-lightgray p-5 rounded-full">
              <Image
                src={"/images/Arrow 2.png"}
                width={25}
                height={10}
                alt="Arrow"
                unoptimized={true}
                className="w-full! h-full! object-cover"
              />
            </div>
            <div className="right-navigation bg-black p-5 rounded-full">
              <Image
                src={"/images/Arrow 3.png"}
                width={25}
                height={10}
                alt="Arrow"
                unoptimized={true}
                className="w-full! h-full! object-cover"
              />
            </div>
          </div>

          <div className="slider flex lg:flex-row flex-col gap-5 lg:px-0 md:px-0 px-2.5">
            <div className="xl:w-1/4  md:1/2  w-full flex-col relative">
              <div className="img-wrapper h-600 w-full">
                <Image
                  src={"/images/slide 3.png"}
                  width={330}
                  height={600}
                  alt="slide"
                  unoptimized={true}
                  className="w-full! h-full! object-cover rounded-[35px]"
                />
                <div className="flex flex-col gap-y-1.5 absolute bottom-0 slider-content lg:p-5 p-7">
                  <p className="text-white font-semibold">Commerical Space</p>
                  <p className="fs-16 font-medium">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 xl:flex hidden flex-col relative">
              <div className="img-wrapper h-600 w-full">
                <Image
                  src={"/images/slide 2.png"}
                  width={580}
                  height={604}
                  alt="slide"
                  unoptimized={true}
                  className="w-full! h-full! object-cover rounded-[35px]"
                />
                <div className="flex flex-col gap-y-1.5 absolute bottom-0 slider-content-active">
                  <p className="text-white font-semibold">
                    Modern 3-Bedroom Villa in Downtown
                  </p>
                  <p className="fs-16 font-medium">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                  <div className="flex gap-y-1.5">
                    <span className="fs-16 font-medium">3 Bed |</span>
                    <span className="fs-16 font-medium">2 Baths |</span>
                    <span className="fs-16 font-medium">1,800 Sq Ft</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-1/4  md:1/2  w-full flex-col relative">
              <div className="img-wrapper h-600 w-full">
                <Image
                  src={"/images/slide 1.png"}
                  width={330}
                  height={600}
                  alt="slide"
                  unoptimized={true}
                  className="w-full! h-full! object-cover rounded-[35px]"
                />
                <div className="flex flex-col gap-y-1.5 bottom-0 absolute slider-content lg:p-5 p-7">
                  <p className="text-white font-semibold">
                    Interior Space and design
                  </p>
                  <p className="fs-16 font-medium">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted section */}
      <section className="trusted-section">
        <div className="container mx-auto">
          <div className="text-center mb-12.5 lg:px-5 md:px-4 px-3">
            <p className="felixtitling text-black">Why Choose Us</p>
            <h2 className="lg:leading-[130%] md:leading-[120%] sm:leading-[115%] leading-[110%] text-black mt-5">
              Your Trusted Real Estate Partner
            </h2>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-y-5 lg:px-5 md:px-4 px-3">
            <div className="lg:w-1/2 w-full flex flex-wrap justify-center lg:gap-y-5 md:gap-y-4 gap-y-2.5">
              <div className="flex sm:flex-row flex-col w-full card-wrapper justify-center lg:gap-5 md:gap-4 gap-2.5">
                <div className="card flex flex-col bg-card rounded-[30px] justify-center bg-lightgray lg:p-7 md:6 p-4">
                  <div className="card-number h-10 w-10 rounded-full font-medium text-black px-1.5 py-3.5">
                    <p>1</p>
                  </div>
                  <div className="card-content font-medium">
                    <p className="text-black">Verified Listings Only</p>
                    <p className="mt-2 leading-32px">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>

                <div className="card flex flex-col bg-card rounded-[30px] justify-center bg-lightgray lg:p-7 md:6 p-4">
                  <div className="card-number h-10 w-10 rounded-full font-medium text-black px-1.5 py-3.5">
                    <p>2</p>
                  </div>
                  <div className="card-content font-medium">
                    <p className="text-black">Transparent Pricing</p>
                    <p className="mt-2 leading-32px">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col w-full card-wrapper justify-center lg:gap-5 md:gap-4 gap-2.5">
                <div className="card flex flex-col bg-card rounded-[30px] justify-center bg-lightgray lg:p-7 md:6 p-4">
                  <div className="card-number h-10 w-10 rounded-full font-medium text-black px-1.5 py-3.5">
                    <p>3</p>
                  </div>
                  <div className="card-content font-medium">
                    <p className="text-black">Expert Local Agents</p>
                    <p className="mt-2 leading-32px">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>

                <div className="card flex flex-col bg-card rounded-[30px] justify-center bg-lightgray lg:p-7 md:6 p-4">
                  <div className="card-number h-10 w-10 rounded-full font-medium text-black px-1.5 py-3.5">
                    <p>4</p>
                  </div>
                  <div className="card-content font-medium">
                    <p className="text-black">Full Legal Support</p>
                    <p className="mt-2 leading-32px">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col">
              <div className="image-wrapper">
                <Image
                  src={"/images/image (6).png"}
                  width={630}
                  height={297}
                  alt="image (6)"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
              </div>
              <div className="image-wrapper">
                <Image
                  src={"/images/image (7).png"}
                  width={630}
                  height={213}
                  alt="image (7)"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category section */}
      <section className="category-section py-100">
        <div className="container mx-auto">
          <div className="text-center mb-12.5 lg:px-5 md:px-4 px-3">
            <p className="felixtitling text-black">Property Categories</p>
            <h2 className="lg:leading-[130%] md:leading-[120%] sm:leading-[115%] leading-[110%] text-black mt-5">
              Find by Property Type
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:px-5 md:px-4 px-3">
            <div className="card flex flex-col category round-[35px] bg-lightgray">
              <div className="img-wrapper w-full aspect-square">
                <Image
                  src={"/images/Frame 2087327455.png"}
                  width={305}
                  height={317}
                  alt="Frame"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
              </div>

              <div className="category-content py-7.5 pr-7.5 pl-5.5 text-black font-medium">
                <h3>Apartments</h3>
              </div>
            </div>

            <div className="card flex flex-col category round-[35px] bg-lightgray">
              <div className="img-wrapper w-full aspect-square">
                <Image
                  src={"/images/Frame 2087327455.png"}
                  width={305}
                  height={317}
                  alt="Frame"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
              </div>
              <div className="category-content py-7.5 pr-7.5 pl-5.5 text-black font-medium">
                <h3>Commercial</h3>
              </div>
            </div>

            <div className="card flex flex-col category round-[35px] bg-lightgray">
              <div className="img-wrapper w-full aspect-square">
                <Image
                  src={"/images/Frame 2087327455.png"}
                  width={305}
                  height={317}
                  alt="Frame"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
              </div>
              <div className="category-content py-7.5 pr-7.5 pl-5.5 text-black font-medium">
                <h3>Luxury Villas</h3>
              </div>
            </div>

            <div className="card flex flex-col category round-[35px] bg-lightgray">
              <div className="img-wrapper w-full aspect-square">
                <Image
                  src={"/images/Frame 2087327455.png"}
                  width={305}
                  height={317}
                  alt="Frame"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
              </div>
              <div className="category-content py-7.5 pr-7.5 pl-5.5 text-black font-medium">
                <h3>Plots</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="testimonial-section">
        <div className="container mx-auto">
          <div className="text-center mb-12.5">
            <p className="felixtitling text-black">Property Categories</p>
            <h2 className="lg:leading-[130%] md:leading-[120%] sm:leading-[115%] leading-[110%] text-black mt-5">
              Find by Property Type
            </h2>
          </div>
          <div className="slider lg:mx-5 md:mx-4 mx-3">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] p-7.5">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <Image
                        src={"/images/Ellipse 8.png"}
                        width={100}
                        height={100}
                        alt="Ellipse"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col">
                      <p className="text-black font-medium">Mary Arshani</p>
                      <p className="font-medium">CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] p-7.5">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <Image
                        src={"/images/Ellipse 9.png"}
                        width={100}
                        height={100}
                        alt="Ellipse"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col">
                      <p className="text-black font-medium">John Arshani</p>
                      <p className="font-medium">Director</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] p-7.5">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <Image
                        src={"/images/Ellipse 10.png"}
                        width={100}
                        height={100}
                        alt="Ellipse"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col">
                      <p className="text-black font-medium">Mary Arshani</p>
                      <p className="font-medium">Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] p-7.5">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <Image
                        src={"/images/Ellipse 8.png"}
                        width={100}
                        height={100}
                        alt="Ellipse"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col">
                      <p className="text-black font-medium">Mary Arshani</p>
                      <p className="font-medium">Assistant</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* NewsLetter section */}
      <section className="testimonial-section py-100">
        <div className="container mx-auto">
          <div className="flex flex-col py-7.5 bg-lightgray rounded-[30px] items-center text-center lg:mx-5 md:mx-4 mx-3">
            <div className="flex flex-col gap-y-5 mb-12.5 lg:px-5 md:px-4 px-3">
              <p className="text-black felixtitling">NEWSLETTER</p>
              <h2 className="text-black felixtitling">
                STAY AHEAD OF THE MARKET
              </h2>
              <p className="font-medium leading-4px">
                Subscribe to get the latest updates on new listings and market
                trends.
              </p>
            </div>

            <div className="flex bg-white rounded-full pt-1.5 pb-1.5 pl-7.5 pr-5">
              <input
                className="bg-white font-medium"
                type="text"
                placeholder="Subscribe"
              />
              <div className="aspect-square w-12.5 h-12.5 bg-black p-5 rounded-full">
                <a href="#">
                  <Image
                    src={"/images/Arrow 4.png"}
                    width={18}
                    height={18}
                    alt="Arrow"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="footer-section">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col pb-100 gap-y-5 lg:mx-5 md:mx-4 mx-3">
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col justify-between md:items-start items-center h-full">
                <div className="footer-logo">
                  <h3 className="text-black felixtitling">
                    <a href="#">HM Properties</a>
                  </h3>
                </div>
                <div className="social-icons flex gap-x-5">
                  <div className="aspect-square">
                    <a href="#">
                      <Image
                        src={"/images/Frame 48.png"}
                        width={80}
                        height={80}
                        alt="Frame"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </a>
                  </div>
                  <div className="aspect-square">
                    <a href="#">
                      <Image
                        src={"/images/Frame 49.png"}
                        width={80}
                        height={80}
                        alt="Frame"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </a>
                  </div>
                  <div className="aspect-square">
                    <a href="#">
                      <Image
                        src={"/images/Frame 50.png"}
                        width={80}
                        height={80}
                        alt="Frame"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex sm:flex-row flex-col justify-between">
              <div className="w-1/3 flex flex-col gap-y-[15px]">
                <a href="#" className="font-semibold text-black">
                  MAIN SITEMAP
                </a>
                <div className="flex flex-col gap-y-[7px]">
                  <a href="#" className="font-medium">
                    About
                  </a>
                  <a href="#" className="font-medium">
                    Product
                  </a>
                  <a href="#" className="font-medium">
                    Reviews
                  </a>
                  <a href="#" className="font-medium">
                    Contact
                  </a>
                </div>
              </div>

              <div className="w-1/3 flex flex-col gap-y-[15px]">
                <a href="#" className="font-semibold text-black">
                  Social{" "}
                </a>
                <div className="flex flex-col gap-y-[7px]">
                  <a href="#" className="font-medium">
                    Facebook
                  </a>
                  <a href="#" className="font-medium">
                    Instagram
                  </a>
                  <a href="#" className="font-medium">
                    Twitter
                  </a>
                </div>
              </div>

              <div className="w-1/3 flex flex-col gap-y-[15px]">
                <a href="#" className="font-semibold text-black">
                  Contact Us
                </a>
                <div className="flex flex-col gap-y-[7px]">
                  <a href="#" className="font-medium text-black">
                    Phone
                  </a>
                  <a href="#" className="font-medium">
                    (8625 890002)
                  </a>
                  <a href="#" className="font-medium text-black">
                    Location
                  </a>
                  <a href="#" className="font-medium leading-72px">
                    206 Mail Parking Nuoges. levollois-perret, france.
                  </a>
                  <a href="#" className="font-medium text-black">
                    Email
                  </a>
                  <a href="#" className="font-medium leading-8px">
                    Hello@PowerBounce.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
