/* eslint-disable react/no-unescaped-entities */
import userData from "@constants/userData";
import JS from "../public/techstack/javascript.png";
import TS from "../public/techstack/typescript.png";
import Cplusplus from "../public/techstack/c++.png";
import Ruby from "../public/techstack/ruby.png";

import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <div className="max-w-6xl mx-auto h-48">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            About Me.
          </h1>
        </div>
        <div className=" -mt-10">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p
              className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
              style={{ lineHeight: "3rem" }}
            >
              {userData.about.title}. Check out my{" "}
              <div className="indicator">
                <span className="indicator-item badge badge-success !text-white bg-cyan-500">
                  Click Me
                </span>
                <Link href="/stats">
                  {/* <a
                  className="bg-red-500 rounded-md px-2 py-1 text-white"
                  href={userData.about.currentProjectUrl}
                > */}
                  {/* {userData.about.currentProject} ✈️ */}
                  {/* </a> */}
                  <a>
                    <span className=" underline decoration-wavy decoration-cyan-500   underline-offset-4 px-2 text-white">
                      Statistics
                    </span>
                  </a>
                </Link>
              </div>
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            {/* Social Buttons */}
            <div className="inline-flex flex-col">
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Contact
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  For any sort help / enquiry, shoot a{" "}
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    mail
                  </a>{" "}
                  and I'll get back. I swear.
                </p>
              </div>
              <div className="mt-8">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Job Opportunities
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  I'm looking for a job currently, If you see me as a good fit,
                  check my{" "}
                  <a
                    href={userData.resumeUrl}
                    target="__blank"
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    CV
                  </a>{" "}
                  and I'd love to work for you.
                </p>
              </div>
              {/* Social Links */}
              <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Social Links
              </h1>
              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center ">
                  <a
                    href={userData.socialLinks.leetcode}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Leetcode
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.codechef}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      CodeChef
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.github}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      GitHub
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.linkedin}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      LinkedIn
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.instagram}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                      Instagram
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              {userData.about.description?.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                >
                  {desc}
                </p>
              ))}

              <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                Tech Stack
              </h1>
              <div className="flex flex-row flex-wrap mt-8 gap-x-8">
                {/* Images */}
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src={JS}
                  alt="JS"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src={TS}
                  alt="JS"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src={Cplusplus}
                  alt="JS"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src={Ruby}
                  alt="JS"
                  height={80}
                  width={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
