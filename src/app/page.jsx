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
      {/* <Navbar /> */}

      {/* hero section */}
      {/* <section className="hero-section background-image">
        <div className="container mx-auto">
          <div className="w-5/6 lg:w-2/3 md:w-3/4 sm:w-4/5 mx-auto pt-37.5 lg:pt-55.5 md:pt-62.5 sm:pt-50.5 lg:pb-12.5 md:pb-5 sm:pb-2.5 pb-0 h-full">
            <div className="flex flex-col text-center items-center">
              <div className="flex flex-col">
                <h1 className="text-white font-felix lg:leading-24.5 md:leading-21 sm:leading-17 leading-12">
                  FIND YOUR DREAM HOME TODAY
                </h1>
                <p className="font-medium text-white">
                  Explore the best properties in your city — for living,
                  investing, or vacation.
                </p>
              </div>
              <div className="py-12.5 inline-block">
                <a href="#" className="btn-primary text-white">
                  Book a Free Consultation
                </a>
              </div>
              <div className="w-5/6 lg:flex hidden flex-col items-start bg-blur pt-5 pr-7.5 pb-8.5 pl-7.5 rounded-[30px] gap-y-7.5">
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
      </section> */}

      {/* partner section */}
      {/* <section className="partner-section px-3 md:px-4 lg:px-5 py-100 lg:m-0 md:m-0 m-2.5">
        <div className="container mx-auto">
          <div className="flex xl:flex-row lg:flex-row flex-col lg:gap-5 md:gap-4 sm:gap-3.5 gap-3">
            <div className="lg:w-1/2 w-full flex flex-col">
              <div className="lg:mb-7.5 md:mb-6.5 sm:mb-5 mb-4">
                <h2 className="text-black lg:leading-17.5 md:leading-15 sm:leading-12 leading-9">
                  Your Trusted Partner in Real Estate
                </h2>
              </div>
              <Image
                src={"/images/image.png"}
                width={632}
                height={537}
                alt="image"
                unoptimized={true}
                className="w-full! h-full! object-cover rounded-[30px]"
              />
            </div>

            <div className="lg:w-1/2 w-full flex flex-col lg:gap-y-5 md:gap-y-4 sm:gap-y-3.5 gap-y-3 justify-between">
              <div className="flex lg:gap-5 md:gap-4 sm:gap:3.5 gap-3 lg:gap-y-0 md:gap-y-0">
                <div className="w-1/2 image-wrapper">
                  <Image
                    src={"/images/image (1).png"}
                    width={267}
                    height={364}
                    alt="image (1)"
                    unoptimized={true}
                    className="w-full! h-full! object-cover rounded-[30px]"
                  />
                </div>
                <div className="w-1/2 image-wrapper">
                  <Image
                    src={"/images/image (2).png"}
                    width={338}
                    height={364}
                    alt="image (2)"
                    unoptimized={true}
                    className="w-full! h-full! object-cover rounded-[30px]"
                  />
                </div>
              </div>
              <div>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h2 className="text-black lg:mt-5 md:mt-4 sm:mt-3.5 mt-3 lg:leading-17.5 md:leading-15 sm:leading-12 leading-9">
                  Over a Decade of Real Estate Excellence
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* properties section */}
      {/* <section className="properties-section">
        <div className="container mx-auto pb-100">
          <div className="text-center mb-5 lg:px-5 md:px-4 px-3">
            <h2 className="text-black lg:leading-17.5 md:leading-15 sm:leading-12 leading-9">
              Latest Properties on the Market
            </h2>
            <p className="font-felixtitling font-medium">
              Discover our most recent listings, updated in real-time to help
              you find your perfect home faster.
            </p>
          </div>

          <div className="flex slider-navigation gap-x-5 justify-center lg:mb-12.5 md:mb-9 sm:mb-7 mb-5 lg:px-5 md:px-4 px-3">
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

          <div className="slider flex lg:flex-row flex-col lg:gap-5 md:gap-4 sm:gap-3.5 gap-3 lg:px-0 md:px-0 px-2.5">
            <div className="xl:w-1/4  md:1/2  w-full flex-col relative">
              <div className="img-wrapper h-600 w-full">
                <Image
                  src={"/images/slide 3.png"}
                  width={330}
                  height={600}
                  alt="slide"
                  unoptimized={true}
                  className="w-full! h-full! object-cover rounded-[30px]"
                />
                <div className="flex flex-col gap-y-1.5 absolute bottom-0 slider-content lg:p-7 md:p-6 sm:p-5 p-4">
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
                  className="w-full! h-full! object-cover rounded-[30px]"
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
                  className="w-full! h-full! object-cover rounded-[30px]"
                />
                <div className="flex flex-col gap-y-1.5 bottom-0 absolute slider-content lg:p-7 md:p-6 sm:p-5 p-4">
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
      </section> */}

      {/* Trusted section */}
      <section className="trusted-section ">
        <div className="container mx-auto">
          <div className="text-center lg:mb-12.5 md:mb-9 sm:mb-7 mb-5 lg:px-5 md:px-4 px-3">
            <p className="font-felix text-black">Why Choose Us</p>
            <h2 className="text-black lg:mt-5 md:mt-4 sm:mt-3 lg:leading-17.5 md:leading-15 sm:leading-12 leading-9">
              Your Trusted Real Estate Partner
            </h2>
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-y-5 lg:px-5 md:px-4 px-3 h-screen">
            <div className="grid gap-4 grid-rows-[repeat(auto-fit,_minmax(200px,_1fr))]">
              <div className="flex sm:flex-row flex-col w-full card-wrapper justify-center lg:gap-5 md:gap-4 gap-2.5">
                <div className="card flex flex-col items-start bg-card rounded-[30px] justify-between bg-lightgray lg:p-7 md:p-6 sm:p-5 p-4">
                  <div className="bg-white rounded-full card-number">
                    <p className="font-medium text-black">1</p>
                  </div>
                  <div className="card-content">
                    <p className="text-black font-medium">
                      Verified Listings Only
                    </p>
                    <p className="mt-2 leading-32px fs-16 font-medium">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>

                <div className="card flex flex-col items-start bg-card rounded-[30px] justify-between bg-lightgray lg:p-7 md:p-6 sm:p-5 p-4">
                  <div className="bg-white rounded-full card-number">
                    <p className="font-medium text-black">2</p>
                  </div>
                  <div className="card-content">
                    <p className="text-black font-medium">
                      Transparent Pricing
                    </p>
                    <p className="mt-2 leading-32px fs-16 font-medium">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col w-full card-wrapper justify-center lg:gap-5 md:gap-4 gap-2.5">
                <div className="card flex flex-col items-start bg-card rounded-[30px] justify-between bg-lightgray lg:p-7 md:p-6 sm:p-5 p-4">
                  <div className="bg-white rounded-full card-number">
                    <p className="font-medium text-black">3</p>
                  </div>
                  <div className="card-content">
                    <p className="text-black font-medium">
                      Expert Local Agents
                    </p>
                    <p className="mt-2 leading-32px fs-16 font-medium">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>

                <div className="card flex flex-col items-start bg-card rounded-[30px] justify-between bg-lightgray lg:p-7 md:p-6 sm:p-5 p-4">
                  <div className="bg-white rounded-full card-number">
                    <p className="font-medium text-black">4</p>
                  </div>
                  <div className="card-content">
                    <p className="text-black font-medium">Full Legal Support</p>
                    <p className="mt-2 leading-32px fs-16 font-medium">
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
          <div className="text-center lg:mb-12.5 md:mb-9 sm:mb-7 mb-5 lg:px-5 md:px-4 px-3">
            <p className="font-felix text-black">Property Categories</p>
            <h2 className="text-black lg:mt-5 md:mt-4 sm:mt-3 lg:leading-17.5 md:leading-15 sm:leading-12 leading-9">
              Find by Property Type
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-5 md:gap-4 sm:gap-3.5 gap-3 lg:px-5 md:px-4 px-3">
            <div className="card flex flex-col category rounded-[35px] bg-lightgray">
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

              <div className="category-content lg:p-7.5 md:p-6.5 sm:p-5 p-4 text-black font-medium">
                <h3>Apartments</h3>
              </div>
            </div>

            <div className="card flex flex-col category rounded-[35px] bg-lightgray">
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
              <div className="category-content lg:p-7.5 md:p-6.5 sm:p-5 p-4 text-black font-medium">
                <h3>Commercial</h3>
              </div>
            </div>

            <div className="card flex flex-col category rounded-[35px] bg-lightgray">
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
              <div className="category-content lg:p-7.5 md:p-6.5 sm:p-5 p-4 text-black font-medium">
                <h3>Luxury Villas</h3>
              </div>
            </div>

            <div className="card flex flex-col category rounded-[35px] bg-lightgray">
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
              <div className="category-content lg:p-7.5 md:p-6.5 sm:p-5 p-4 text-black font-medium">
                <h3>Plots</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      {/* <section className="testimonial-section">
        <div className="container mx-auto">
          <div className="text-center lg:mb-12.5 md:mb-9 sm:mb-7 mb-5 lg:px-5 md:px-4 px-3">
            <p className="font-felix text-black">Testimonials</p>
            <h2 className=" text-black  lg:mt-5 md:mt-4 sm:mt-3 lg:leading-17.5 md:leading-15 sm:leading-12 leading-9">
              What Our Clients Say
            </h2>
          </div>
          <div className="testimonial-slider lg:mx-5 md:mx-4 mx-3">
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
                  spaceBetween: 15,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },
                // when window width is >= 1280px
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide className="p-0.5">
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] lg:p-7.5 md:p-6.5 sm:p-5 p-4">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <div className="testimonial-image-wraper h-full w-full">
                        <Image
                          src={"/images/Ellipse 8.png"}
                          width={100}
                          height={100}
                          alt="Ellipse"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <p className="text-black font-medium">Mary Arshani</p>
                      <p className="font-medium">CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="p-0.5">
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] xl:p-7.5 lg:p-6.5 md:p-6 sm:p-5.5 p-5">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <div className="testimonial-image-wraper h-full w-full">
                        <Image
                          src={"/images/Ellipse 9.png"}
                          width={100}
                          height={100}
                          alt="Ellipse"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <p className="text-black font-medium">John Arshani</p>
                      <p className="font-medium">Director</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="p-0.5">
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] xl:p-7.5 lg:p-6.5 md:p-6 sm:p-5.5 p-5">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <div className="testimonial-image-wraper h-full w-full">
                        <Image
                          src={"/images/Ellipse 10.png"}
                          width={100}
                          height={100}
                          alt="Ellipse"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <p className="text-black font-medium">Mary Arshani</p>
                      <p className="font-medium">Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="p-0.5">
                <div className="card flex flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] bg-lightgray rounded-[35px] xl:p-7.5 lg:p-6.5 md:p-6 sm:p-5.5 p-5">
                  <div className="mb-10.5">
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, adipiscing elit, Lorem ipsum
                      dolor sit amet, adipiscing elit, Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 items-center">
                    <div className="w-1/3 aspect-square">
                      <div className="testimonial-image-wraper h-full w-full">
                        <Image
                          src={"/images/Ellipse 8.png"}
                          width={100}
                          height={100}
                          alt="Ellipse"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <p className="text-black font-medium">Mary Arshani</p>
                      <p className="font-medium">Assistant</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section> */}

      {/* NewsLetter section */}
      {/* <section className="newsletter-section py-100">
        <div className="container mx-auto">
          <div className="flex flex-col lg:py-7.5 md:py-6.5 sm:py-5 py-4 bg-lightgray rounded-[30px] items-center justify-center lg:mx-5 md:mx-4 mx-3">
            <div className="flex flex-col lg:gap-y-5 md:gap-y-4 sm:gap-y-3.5 gap-y-3 lg:mb-12.5 md:mb-9 sm:mb-7 mb-5 lg:px-5 md:px-4 px-3 text-center">
              <p className="text-black font-felix">NEWSLETTER</p>
              <h2 className="text-black lg:leading-17.5 md:leading-15 sm:leading-12 leading-9">
                STAY AHEAD OF THE MARKET
              </h2>
              <p className="font-medium leading-4px">
                Subscribe to get the latest updates on new listings and market
                trends.
              </p>
            </div>

            <div className="newsletter-input-shadow flex flex-row lg:w-1/3 md:w-2/5 sm:w-1/2 justify-between bg-white rounded-full pt-1.5 pb-1.5 pl-7.5 pr-5">
              <input
                className="bg-white font-medium w-full"
                type="text"
                placeholder="Subscribe"
              />
              <div className="aspect-square bg-black p-5 rounded-full">
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
      </section> */}

      {/* Footer section */}
      {/* <footer className="footer-section">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col pb-100 gap-y-5 lg:mx-5 md:mx-4 mx-3">
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col justify-between md:items-start items-center h-full gap-y-3">
                <div className="footer-logo">
                  <h3 className="lg:leading-[120%] md:leading-[117%] sm:leading-[114%] leading-[110%] text-black font-medium font-felix">
                    <a href="#">HM PROPERTIES</a>
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
      </footer> */}
    </>
  );
}
