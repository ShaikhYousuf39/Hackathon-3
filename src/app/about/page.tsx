import React from "react";
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


const AboutPage = () => {
    return (
        <div>
        <Header/>
        <div className="bg-white">
         <section className="flex justify-center items-center min-h-screen bg-white">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 max-w-6xl shadow-lg">
          <div className="bg-[#007580] p-8 md:p-12 text-white flex items-center">
            <div className="flex flex-col gap-24">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  About Us - Comforty
                </h2>
                <p className="text-sm md:text-base mb-6 leading-relaxed">
                  At Comforty, we believe that the right chair can transform
                  your space and elevate your comfort. Specializing in ergonomic
                  design, premium materials, and modern aesthetics, we craft
                  chairs that seamlessly blend style with functionality.
                </p>
              </div>
              <Link href="/products">
              <button className="bg-[#329098] w-44 text-white py-3 px-6 hover:bg-[#007690] transition">
                View collection
              </button>
              </Link>
            </div>
          </div>

          <div>
            <Image src="/about/1.png" alt="Chair" width={600} height={500} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#272343] mb-12">
            What Makes Our Brand Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm  text-[#007580]">
              <Image
                src="/about/icon1.png"
                width={24}
                height={24}
                alt="icon"
                className="my-4"
              />
              <h3 className="text-xl mb-2">Next day as standard</h3>
              <p>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-[#007580]">
              <Image
                src="/about/icon2.png"
                width={24}
                height={24}
                alt="icon"
                className="my-4"
              />
              <h3 className="text-xl mb-2">Made by true artisans</h3>
              <p>
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm  text-[#007580]">
              <Image
                src="/about/icon3.png"
                width={24}
                height={24}
                alt="icon"
                className="my-4"
              />
              <h3 className="text-xl mb-2">Unbeatable prices</h3>
              <p>
                For our materials and quality you wont find better prices
                anywhere
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-[#007580]">
              <Image
                src="/about/icon4.png"
                width={24}
                height={24}
                alt="icon"
                className="my-4"
              />
              <h3 className="text-xl mb-2">Recycled packaging</h3>
              <p>
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#272343] mb-8 text-left">
            Our Popular Products
          </h2>

          <div className="flex gap-5">
            <div>
              <div className="relative w-full">
                <Image
                  src="/about/chair1.png"
                  width={630}
                  height={375}
                  alt="The Poplar suede sofa"
                />
              </div>
              <h3 className="text-lg font-medium mt-4 text-[#2A254B]">
                The Poplar suede sofa
              </h3>
              <p className="text-sm text-[#2A254B]">$99.00</p>
            </div>

            <div>
              <div className="relative w-full">
                <Image
                  src="/about/chair2.png"
                  width={305}
                  height={375}
                  alt="The Dandy chair"
                />
              </div>
              <h3 className="text-lg font-medium mt-4 text-[#2A254B]">
                The Dandy chair
              </h3>
              <p className="text-sm text-[#2A254B]">$99.00</p>
            </div>

            <div>
              <div className="relative w-full">
                <Image
                  src="/about/chair3.png"
                  width={305}
                  height={375}
                  alt="The Dandy chair"
                />
              </div>
              <h3 className="text-lg font-medium mt-4 text-[#2A254B]">
                The Dandy chair
              </h3>
              <p className="text-sm text-[#2A254B]">$99.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
    );
};

export default AboutPage;
