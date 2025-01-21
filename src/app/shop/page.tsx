import Image from "next/image";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function ProductPage() {
  return (
    <div>
      <div className={`${inter.className} flex flex-col justify-center gap-9 my-24`}>
        <h1 className="flex justify-center text-3xl text-indigo-950 font-bold">
          Our Products
        </h1>
        <div className="flex flex-col justify-center gap-9">
          <div className="md:flex justify-center items-center gap-6">
            <div className="w-[312px]">
              <Image
                src="/chairs/1.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart2.png" width={44} height={44} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/chairs/2.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/chairs/3.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/chairs/4.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex justify-center items-center gap-6">
            <div className="w-[312px]">
              <Image
                src="/products/5.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart2.png" width={44} height={44} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/products/6.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/products/7.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/products/8.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex justify-center items-center gap-6">
            <div className="w-[312px]">
              <Image
                src="/products/9.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/products/10.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/products/11.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
            <div className="w-[312px]">
              <Image
                src="/products/12.png"
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={roboto.className} >
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Or Subscribe To The Newsletter
              </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:max-w-lg">
              <div className="flex items-end">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full p-2 mt-2 border-b-2 border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address..."
                />
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 border-b-2 border-black"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Follow Products And Discounts On Instagram
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/chairs/1.png"
                  alt="Image 1"
                  width={186}
                  height={186}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/chairs/2.png"
                  alt="Image 2"
                  width={186}
                  height={186}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/chairs/3.png"
                  alt="Image 3"
                  width={186}
                  height={186}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/chairs/4.png"
                  alt="Image 4"
                  width={186}
                  height={186}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/chairs/5.png"
                  alt="Image 5"
                  width={186}
                  height={186}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/chairs/6.png"
                  alt="Image 6"
                  width={186}
                  height={186}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
