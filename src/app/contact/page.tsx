import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <div className={poppins.className}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 mt-4 mx-auto max-w-4xl px-4 md:px-20">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-16">
          <div className="px-4 lg:px-12">
            <div className="flex items-start gap-4 mb-8">
              <Image
                src="/contact/location.png"
                width={22}
                height={28}
                alt="icon"
              />
              <div>
                <h2 className="font-medium text-xl md:text-2xl">Address</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-8">
              <Image
                src="/contact/phone.png"
                width={24}
                height={30}
                alt="icon"
              />
              <div>
                <h2 className="font-medium text-xl md:text-2xl">Phone</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Mobile: +(+84) 546-6789
                  <br />
                  Hotline: +(+84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src="/contact/clock.png"
                width={22}
                height={28}
                alt="icon"
              />
              <div>
                <h2 className="font-medium text-xl md:text-2xl">Working Time</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6 px-4">
            <div>
              <label className="block text-sm md:text-base font-medium">
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="mt-1 block w-full py-4 px-5 border border-[#9F9F9F] rounded-md shadow-sm focus:border-[#029FAE] focus:ring-[#029FAE]"
              />
            </div>
            <div>
              <label className="block text-sm md:text-base font-medium">
                Email address
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="mt-1 block w-full py-4 px-5 border border-[#9F9F9F] rounded-md shadow-sm focus:border-[#029FAE] focus:ring-[#029FAE]"
              />
            </div>
            <div>
              <label className="block text-sm md:text-base font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="mt-1 block w-full py-4 px-5 border border-[#9F9F9F] rounded-md shadow-sm focus:border-[#029FAE] focus:ring-[#029FAE]"
              />
            </div>
            <div>
              <label className="block text-sm md:text-base font-medium">
                Message
              </label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                rows={4}
                className="mt-1 block w-full py-4 px-5 border border-[#9F9F9F] rounded-md shadow-sm focus:border-[#029FAE] focus:ring-[#029FAE]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-60 bg-[#029FAE] text-white py-4 rounded-md hover:bg-[#027d8a] transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="mt-16 bg-gray-100 py-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/contact/trophy.png"
                width={60}
                height={60}
                alt="icon"
              />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl">
                  High Quality
                </h3>
                <p className="text-gray-500 text-sm md:text-xl">
                  crafted from top materials
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/contact/check.png"
                width={60}
                height={60}
                alt="icon"
              />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl">
                  Warranty Protection
                </h3>
                <p className="text-gray-500 text-sm md:text-xl">Over 2 years</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/contact/vector.png"
                width={60}
                height={60}
                alt="icon"
              />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl">24 / 7 Support</h3>
                <p className="text-gray-500 text-sm md:text-xl">
                  Dedicated support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
