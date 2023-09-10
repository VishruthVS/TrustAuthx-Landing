import React from "react";
import { ArrowIcon } from "./new";
import {
  PercentageSVG,
  PercentageSVGThird,
  PercentageSVGSecondTimeline,
} from "./components/Timeline/Components";
import { PercentageSVGSecond } from "./components/showcase/Components";
import { TimelineCard } from "./components/Timeline/TimelineCard";
import { Information } from "./components/Timeline/Information";
import Carousel from "./components/Timeline/CarouselSlider";

function timeline() {
  return (
    <>
      <div className="flex px-40">
        <div className="flex flex-col items-center justify-center">
          <img src="/timeline/first.svg" alt="" />

          <img src="/timeline/8-icon.svg" alt="" />

          <img src="/timeline/8.svg" alt="" />

          <img src="/timeline/7-icon.svg" alt="" />

          <img src="/timeline/7.svg" alt="" />

          <img src="/timeline/6-icon.svg" alt="" />

          <img src="/timeline/6.svg" alt="" />
        </div>

        <div className="mt-[750px]">
          <div className=" flex flex-col gap-9">
            <div className="text-4xl font-bold  text-black">Overview</div>

            <div className=" px-6">
              <span className="text-7xl font-bold  text-indigo-400">
                Embed security into the developer workflow.
                <br />
              </span>
              <span className="text-7xl font-bold  text-black">
                With GitHub, developers can secure their
                <br />
                code in minutes and organizations can
                <br />
                automatically comply with regulations.
              </span>
            </div>
          </div>

          <div className="ml-10 flex h-[70%] flex-1 justify-between ">
            <div className="mt-auto flex flex-col gap-[550px]">
              <Information
                buttonbg
                preHeader="Trim Costs, Boost Efficiency"
                buttonLink=""
                header="Save Time and Money with TrustAuthx 
                Auth-Lite"
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className=" mt-20 max-w-[600px] text-xl font-bold leading-7 text-neutral-600
"
                >
                  TrustAuthx not only simplifies your user, token and session
                  management but also trims your expenses significantly. Say
                  goodbye to costly alternatives that can set you back. With
                  AuthLite, you'll save valuable time and also enjoy over 65% in
                  savings. It's a win-win for your efficiency and your budget.
                </div>
              </Information>

              <Information
                buttonbg
                preHeader="Trim Costs, Boost Efficiency"
                buttonLink=""
                header="Save Time and Money with TrustAuthx 
                Auth-Lite"
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className=" mt-20 max-w-[600px] text-xl font-bold leading-7 text-neutral-600
"
                >
                  TrustAuthx not only simplifies your user, token and session
                  management but also trims your expenses significantly. Say
                  goodbye to costly alternatives that can set you back. With
                  AuthLite, you'll save valuable time and also enjoy over 65% in
                  savings. It's a win-win for your efficiency and your budget.
                </div>
              </Information>
            </div>

            <div className=" mt-44 flex flex-col gap-[300px] ">
              <TimelineCard
                footerButtonText="See Pricing"
                header={"Reduce Auth Development Time &"}
                footerLink={""}
                footerText="TrustAuthx Auth-lite offers 
              a fully managed, user-friendly solutionfor system security,
               saving you over 90% compared to similar systems that typically cost
                around $500/month."
              >
                <div
                  className="mt-2 bg-gradient-to-r from-white to-black  bg-clip-text
               text-center text-4xl font-bold  text-transparent"
                >
                  Save Cost up-to
                </div>

                <div className="mt-7 flex items-center justify-center gap-16 ">
                  <PercentageSVG>90%</PercentageSVG>
                  <PercentageSVGSecondTimeline>65%</PercentageSVGSecondTimeline>
                </div>
              </TimelineCard>

              <TimelineCard
                footerButtonText="See Log-on"
                header={
                  "Auth-Lite Log-on can give conversion by mitigating account Creation process "
                }
                footerLink={""}
                footerText="According to a study by HubSpot, 38% of people will abandon a form if they have to create an account."
              >
                <div className=" flex items-center">
                  <div
                    className="
               mr-1 text-center text-5xl font-bold text-white  "
                  >
                    Up by :)
                  </div>

                  <PercentageSVGThird>138%</PercentageSVGThird>
                </div>
              </TimelineCard>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-radial-gradient flex px-40">
        <div className="flex flex-col items-center justify-center">
          <div className="relative -my-24">
            <img src="/timeline/glow.svg" className=" " alt="" />

            <img
              src="/timeline/5-icon.svg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
          </div>
          <img src="/timeline/4.svg" alt="" />

          <img src="/timeline/3-icon.svg" alt="" />

          <img src="/timeline/3.svg" alt="" />

          <img src="/timeline/2-icon.svg" alt="" />
          <img src="/timeline/2.svg" alt="" />
          <img src="/timeline/1-icon.svg" alt="" />
          <img src="/timeline/1.svg" alt="" />
        </div>
        {/* required
         */}
        <div className=" flex flex-col gap-9 py-2">
          <div className=" px-6">
            <span className="text-6xl font-bold  text-[#90E900]">
              LLMAI, Transformer Model for Cybersecurity:
            </span>
            <span className="text-6xl font-bold  text-white">
              Enable real-time inference
              <br />
              on extensive telemetry data, including raw
              <br />
              packets, to swiftly detect & respond to live
              <br />
              threats.
            </span>
          </div>
          {/* button */}

          <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[14807.455px] border-[1.1px] border-[#DDD] bg-black py-2 font-bold text-white">
            Lets get started
            <ArrowIcon />
          </button>
          <div className=" py-48"></div>
          {/* placing next to each other */}

          <div className="flex-column flex gap-80">
            <Information
              whiteText
              preHeader="Maximize Speed"
              buttonbg
              buttonLink=""
              header="Get access to 
High-Performing Caching Infrastructure"
              ButtonText="Let’s Get Started It’s Free"
            >
              <div
                className=" mt-20 max-w-[600px] text-xl font-bold leading-7 text-white
"
              >
                Speed matters when its about authentication, conversion, token
                maintenance or security with TrustAuthx Auth-lite High
                performing caching infrastructure get all your data accessed at
                the speed of internet .
              </div>
            </Information>
            <div className="flex-column flex items-center">
              <img
                src="/timeline/cache.svg"
                alt="cache"
                className="h-[614.023px] w-[537.729px]"
              />
            </div>
          </div>
          {/* next part */}
          <div className="py-56"></div>
          <div className="flex-column flex gap-80">
            <div className=" px-6">
              <span className="text-3xl font-semibold  text-[#E1E1E1]">
                Integrate in 2 min
                <br />
              </span>
              <span className="text-5xl font-bold  text-white">
                Resembling Auth 2.0,
                <br />
                our system exemplifies
                <br />
                the beauty of
                <br />
                standardized simplicity.
                <br />
                <br />
              </span>
              <span className="text-2xl font-semibold text-white">
                Embrace the elegance of standardized simplicity, making
                <br />
                security and user access straightforward. With its user-
                <br />
                friendly approach, navigating authentication and authorization
                <br />
                has never been easier.
                <br />
              </span>
              <div className="py-10"></div>
              <span className="text-2xl text-white">
                Extract data from other Auth2.O sources
              </span>
              <div className="py-8"></div>
              <div className="border border-gray-300"></div>
              <div className="py-8"></div>
              <span className="text-2xl text-white">
                Supports analytical & Dependency workflows
              </span>
              <div className="flex-column flex gap-10 ">
                <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[18711.455px] border-[1.1px] border-[#DDD] bg-black py-2  font-bold text-white">
                  Learn more about Connect
                  <ArrowIcon />
                </button>
                <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[4807.455px] border-[1.1px] border-[#DDD] bg-white py-2 font-bold text-black">
                  Let's get started
                  <ArrowIcon />
                </button>
              </div>
            </div>
            {/* the right side svg */}
            <TimelineCard
              footerButtonText="See Pricing"
              header={"Reduce Auth Development Time &"}
              footerLink={""}
              footerText="TrustAuthx Auth-lite offers 
              a fully managed, user-friendly solutionfor system security,
               saving you over 90% compared to similar systems that typically cost
                around $500/month."
            >
              <div
                className="mt-2 bg-gradient-to-r from-white to-black  bg-clip-text
               text-center text-4xl font-bold  text-transparent"
              >
                Save Cost up-to
              </div>

              <div className="mt-7 flex items-center justify-center gap-16 ">
                <PercentageSVG>90%</PercentageSVG>
                <PercentageSVGSecondTimeline>65%</PercentageSVGSecondTimeline>
              </div>
            </TimelineCard>
          </div>
        </div>
      </div>

      <div className="flex px-40">
        <div className="flex flex-col items-center justify-center">
          <img src="/timeline/last-icon.svg" alt="" />
          <img src="/timeline/last.svg" />
        </div>

        <div className=" mt-40 flex flex-col gap-9">
          <div className="text-4xl font-bold  text-black">
            Checkout What They Say?{" "}
          </div>

          <div className="px-6">
            <span className="text-7xl font-bold  text-indigo-400">
              Embed security into the developer workflow.
              <br />
            </span>
            <span className="text-7xl font-bold  text-black">
              With GitHub, developers can secure.
            </span>
          </div>

          <div className="mt-28 flex items-center justify-between  gap-4 px-6 pb-6 ">
            <Carousel>
              {[
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                />,
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                />,
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                />,
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                />,
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                />,
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                />,
              ]}
            </Carousel>

            <div className=" flex flex-col  gap-16">
              <div className="  text-2xl font-bold leading-snug text-black">
                Make your PlanetScale data accessible across your
                <br />
                organization by safely extracting and loading data from
                <br />
                PlanetScale into other databases, such as BigQuery,
                <br />
                Snowflake, or Redshift.
              </div>

              <div className=" flex flex-col gap-8">
                <div className=" text-xl font-bold leading-7 text-zinc-800">
                  Extract data to other sources
                </div>

                <div className="h-[1px] w-full bg-[#2C2C2C]"></div>

                <div className=" text-xl font-bold leading-7 text-zinc-800">
                  Supports analytical workflows
                </div>
              </div>

              <div className="flex items-center gap-9">
                <button
                  className=" flex  w-80 
            items-center justify-center gap-2 rounded-full border-2
            border-black bg-white  py-2  text-xl font-bold  text-black"
                >
                  Learn more about Connect
                  <ArrowIcon />
                </button>

                <button
                  className=" flex w-60 items-center 
            justify-center gap-2 rounded-full bg-black py-2 
             text-xl  font-bold text-white"
                >
                  Let’s Get Started
                  <ArrowIcon />
                </button>
              </div>
              {/* start */}
            </div>
          </div>
          <Authlite />
        </div>
      </div>
    </>
  );
}
function Authlite() {
  return (
    <div className="timeline-radial-gradient">
      <div className=" pl-40 pt-40">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="font-inter  pt-6 text-5xl text-white">
              Auth-Lite
            </div>
            <div className="pr-16"></div>
            <img className="gap-16" src="/timeline/cable.svg" alt="/" />
            <div className="pr-40"></div>

            <div className="pl-16 text-3xl text-white">
              Design,
              <br />
              To save Time{" "}
            </div>
            {/* first row ends here */}
          </div>
          <div className="flex flex-row">
            <div className="pt-16 text-2xl text-white">
              A thoughtfully designed, fully managed system created to <br />
              supercharge the development of enterprise-grade <br />
              applications. It provides top-tier security and token <br />
              management, offers customizable UI options, all backed <br />
              by high-powered caching servers. With Auth-Lite, we're <br />
              putting developers first on their journey towards <br />
              accelerated, hassle-free development.
            </div>
            <img src="/timeline/auth-lite.svg" alt="" className="h-90 w-90  " />
          </div>

          <div className="pt-16 text-2xl text-white">
            Auth-Lite: Empowering Developers with Elevated Efficiency
          </div>
          <div className="pb-16 "></div>
          <div className=" border-[1px] border-t border-gray-300 "></div>
          <div className="pt-16 text-2xl text-white">
            Auth-Lite: Empowering Developers with Elevated Efficiency
          </div>
          <div className="pb-16 "></div>
          <div className="flex flex-row">
            <button
              className=" flex  w-80 
            items-center justify-center gap-2 rounded-full border-2
            border-white bg-black  py-2  text-xl font-bold  text-white"
            >
              Learn more about Connect
              <ArrowIcon />
            </button>
            <div className="pr-16"></div>
            <button
              className=" flex w-60 items-center 
            justify-center gap-2 rounded-full bg-white py-2 
             text-xl  font-bold text-black"
            >
              Let’s Get Started
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
      {/* <div className="font-inter pt-6 text-5xl text-white">Auth-Lite</div>
            <img className="gap-16" src="/timeline/cable.svg" alt="/" /> */}
    </div>
  );
}
function GradientCard({
  logo,
  number,
  header,
  description,
  footer,
}: {
  logo: string;
  number: string;
  header: string;
  description: string;
  footer: React.ReactNode;
}) {
  return (
    <div className="timeline-gradientcard-gradient rounded-2xl p-10">
      <div className="flex items-center justify-between">
        <img
          src="https://s3-alpha-sig.figma.com/img/9d6d/cfc1/fb8cd40116ca161e463af1ee400a729e?Expires=1694995200&Signature=h1x8zYIEcksM6fh5RDvQ4ECeihTfQdeHloWbzDadukMpZBhws9lPBpMFh-9XIsh2k3CKZCczKPLoIxMJ89vpq8As2DCiADJsSbOXBta1gsOFEXhmuZIO638pHgvaiGW-T-tD4RQEWmWp9Q~rhQYxDM7EuRFbVF6nim-zphAKrdfJXTsqypezfRZonQvppbMt35BOVo81-yGeDBtfmg1FJln3jr-AwlpSa95SZHA4~M4nd-FcwqDG00g5NDx~koYZpLylO-J2UTHAlxnHN6QGkuVfhCmGTvCOb9gAo9Nrp-Hw9Vsgz6gYT8WQYKeIP-3TWBZnTLX5mFgaiCfEks2u4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          className="h-16 w-16 rounded-full"
          alt=""
        />

        <GradientCardSvg>{number} </GradientCardSvg>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <img src={logo} className="max-w-[240px]" alt="" />

        <div className="   text-5xl font-bold  text-white">{header}</div>

        <div className=" max-w-[450px] text-justify text-lg font-bold  text-neutral-50">
          {description}
        </div>
      </div>

      <div className="mt-7 max-w-[450px]">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-[43px] font-bold leading-10 text-transparent">
          {footer}
        </span>
      </div>
    </div>
  );
}

function GradientCardSvg({ children }: { children: React.ReactNode }) {
  return (
    <div className=" relative flex items-center  justify-center rounded-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="71"
        viewBox="0 0 72 71"
        fill="none"
      >
        <path
          d="M69.709 35.3555C69.709 27.3471 66.8503 19.6017 61.6474 13.5135C56.4446 7.42539 49.2394 3.39443 41.3288 2.14627C33.4182 0.89811 25.3219 2.51473 18.4972 6.70512C11.6726 10.8955 6.56791 17.3844 4.10209 25.0038C1.63627 32.6232 1.97128 40.8725 5.04681 48.2668C8.12235 55.6612 13.7364 61.7148 20.8783 65.338C28.0203 68.9612 36.221 69.916 44.0044 68.0305C51.7877 66.145 58.6423 61.5431 63.3344 55.0531"
          stroke="url(#paint0_radial_542_8816)"
          stroke-width="2.97523"
          stroke-linecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_542_8816"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(64.9061 55.6585) rotate(-147.529) scale(74.0076 74.0074)"
          >
            <stop stop-color="#AD00FF" />
            <stop offset="0.754348" stop-color="#FFF500" />
            <stop offset="0.961618" stop-color="white" />
          </radialGradient>
        </defs>
      </svg>

      <p className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl  font-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export default timeline;
