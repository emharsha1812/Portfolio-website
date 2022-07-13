import Image from "next/image";
import Link from "next/link";
import heroimage from "../public/heroImage.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="hero  bg-base-150">
        <div className="hero-content h-screen w-screen flex-col lg:flex-row-reverse">
          <Image
            src={heroimage}
            height={400}
            width={400}
            className=""
            alt="Hero Image"
          />
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                  },
                },
              }}
            >
              <h1 className="text-2xl font-bold md:text-5xl">
                Welcome to my{" "}
                <span className="underline decoration-wavy decoration-fuchsia-500 ">
                  Personal
                </span>{" "}
                Portfolio
              </h1>
            </motion.div>
            <p className="py-6 text-xl font-medium ">
              <p>⚡ Electrical Engineer studying at NIT Hamirpur</p>
              <p>👨‍💻 Full-Stack Web Developer</p>
              <p>🗒️ Part-time Blogger</p>
              <p>🖥️ Competitive Programming Enthusiast</p>
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <Link href="/about">
              <button className="btn btn-outline btn-secondary !text-lg !normal-case ">
                Know More!
              </button>
            </Link>
            {/* <button className="btn glass !normal-case !mx-4 !mb-2 !text-lg">
              Contact Me
            </button> */}
            <Link href="/contact">
              <button className="btn btn-outline btn-success !mx-6 !mb-2 !normal-case !text-lg">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
