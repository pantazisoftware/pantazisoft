import Clear from "@/components/clear";
import { Button } from "@/components/ui/button";
import {
  ChartSpline,
  Handshake,
  MousePointerClick,
  ChevronDown,
  Mouse,
  SwatchBook,
  Sparkles,
  FolderRoot,
  Users,
  MessageSquareCode,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function aboutUs() {
  return (
    <div>
      <div className="relative min-h-screen">
        <Image
          src="/intro6.jpg"
          alt="Hero Image"
          layout="fill"
          className="opacity-50"
          objectFit="cover"
        />
        <div className="absolute top-36 left-0 right-0">
          <div className="container mx-auto">
            <h1 className="text-7xl font-medium">Who we are?</h1>
            <p className="text-2xl font-medium text-zinc-500 max-w-2xl mt-10">
              We specialize in crafting custom web applications, dynamic
              websites, e-commerce platforms, and efficient data management
              solutions.
            </p>
            <p className="text-2xl font-medium text-zinc-500 max-w-2xl mt-6">
              <span className="underline text-black underline-offset-4 underline-thickness-2">
                Our mission is to empower businesses with innovative, tailored
                digital solutions that drive growth
              </span>
              , enhance user experiences, and streamline operations.
            </p>
            <Button variant={"default"} size={"cta"} className="mt-10">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center motion-preset-slide-up">
          <div className="inline-flex space-x-4 mb-4 text-sm items-center text-zinc-500 text-center bg-white shadow p-4 rounded-full">
            <Mouse className="h-6 w-6" />
            <span className="font-medium">Scroll down</span>
          </div>
        </div>
      </div>
      <div className="bg-black py-24" id="mission">
        <div className="container mx-auto py-24 overflow-hidden">
          <h4 className="text-7xl font-normal text-white">Our Mission</h4>
          <p className=" font-medium text-zinc-200 text-2xl mt-6 max-w-3xl">
            We are committed to{" "}
            <span className="underline underline-offset-4">
              delivering exceptional digital solutions that drive growth
            </span>
            , enhance user experiences, and streamline operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-6 lg:gap-12 mt-24">
            <div className="col-span-5 bg-zinc-900 p-8">
              <ChartSpline className="text-white" size={96} />
              <h4 className="font-medium text-4xl text-white mt-4">Growth</h4>
              <p className="text-zinc-400 text-xl mt-2">
                We help businesses grow by creating innovative digital solutions
                that drive results.
              </p>
            </div>
            <div className="col-span-3 bg-zinc-900 p-8">
              <MousePointerClick className="text-white" size={96} />
              <h4 className="font-medium text-4xl text-white mt-4">
                User Experiences
              </h4>
              <p className="text-zinc-400 text-xl mt-2">
                We design and develop user-centric digital experiences that
                engage and delight users.
              </p>
            </div>
            <div className="col-span-3 bg-zinc-900 p-8">
              <Handshake className="text-white" size={96} />
              <h4 className="font-medium text-4xl text-white mt-4">
                Streamline Operations
              </h4>
              <p className="text-zinc-400 text-xl mt-2">
                We optimize business processes by developing efficient digital
                solutions that streamline operations.
              </p>
            </div>
            <div className="col-span-5 bg-zinc-900 p-8">
              <SwatchBook className="text-white" size={96} />
              <h4 className="font-medium text-4xl text-white mt-4">
                Unique Design
              </h4>
              <p className="text-zinc-400 text-xl mt-2">
                We craft custom digital solutions tailored to meet the unique
                needs of each business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24" id="numbers">
        <div className="container mx-auto py-24 overflow-hidden">
          <h4 className="text-7xl font-normal text-black text-center">
            Numbers
          </h4>
          <p className="font-medium text-zinc-500 text-2xl mt-6 text-center mx-auto max-w-3xl">
            We have successfully completed over 20 projects, serving more than
            10 clients worldwide. Our team consists of 5+ skilled professionals
            world-wide dedicated to delivering top-notch digital solutions. We
            pride ourselves on maintaining a 98% client satisfaction rate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 mt-24">
            <div className="col-span-4 bg-zinc-200 p-8 group">
              <div className="group-hover:-translate-y-4 transition-transform">
                <Sparkles className="text-black" size={96} />
                <h4 className="font-medium text-2xl text-black mt-4">
                  Client Satisfaction
                </h4>
                <p className="text-zinc-500 text-xl mt-2">
                  We pride ourselves on maintaining a 98% client satisfaction
                  rate.
                </p>
              </div>
            </div>
            <div className="col-span-4 bg-zinc-200 group p-8">
              <div className="group-hover:-translate-y-4 transition-transform">
                <FolderRoot className="text-black" size={96} />
                <h4 className="font-medium text-2xl text-black mt-4">
                  Projects
                </h4>
                <p className="text-zinc-500 text-xl mt-2">
                  We have successfully completed over 20 projects.
                </p>
              </div>
            </div>
            <div className="col-span-4 bg-zinc-200 p-8 group">
              <div className="group-hover:-translate-y-4 transition-transform">
                <Users className="text-black" size={96} />
                <h4 className="font-medium text-2xl text-black mt-4">
                  Developers World-Wide
                </h4>
                <p className="text-zinc-500 text-xl mt-2">
                  We optimize business processes by developing efficient digital
                  solutions that streamline operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Clear />
    </div>
  );
}
