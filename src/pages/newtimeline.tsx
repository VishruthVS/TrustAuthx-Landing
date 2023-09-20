import React from 'react'
import {
    PercentageSVG,
    PercentageSVGSecondTimeline,
} from "./components/Timeline/Components";
import { TimelineCard } from "./components/Timeline/TimelineCard";
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const imgStyles = "w-auto h-auto"
function Newtimeline() {
    return (
        <>
            {/* 
            STRUCTURE TO ACHIVE THIS LAYOUT :
             1. Create a div with class Flex => Create two cildren divs => first child div will have boxImage and spiral line & Second child will be flex with class justify between and items-start
            //  NOTE: first image in first child will be the box Image and second will be spiral line
            */}
            <div className='container pl-20'>
                <div className="flex items-start">
                    <div>
                        <Image width={100} height={100} src="/timeline/8-icon.svg" alt="timeline" className={`${imgStyles}  -ml-4`} />
                        <Image width={100} height={100} className={imgStyles} src="/timeline/8.svg" alt="" />
                    </div>

                    <div className='mt-8' >
                        <h3 className="text-4xl font-bold  text-black">Overview</h3>
                        <div className="pl-6 mt-6">
                            <p className="text-5xl font-bold  text-indigo-400">
                                Embed security into the developer workflow.
                            </p>
                            <p className="text-5xl font-bold  text-black">
                                With GitHub, developers can secure their
                                code in minutes and organizations can
                                automatically comply with regulations.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container pl-20' >
                <div className="flex">
                    <div>
                        <Image width={100} height={100} className={`${imgStyles} -ml-12`} src="/timeline/7-icon.svg" alt="" />
                        <Image width={100} height={100} className={imgStyles} src="/timeline/7.svg" alt="" />
                    </div>

                    <div className='flex justify-between w-full' >
                        <div className='max-w-lg' >
                            <h3 className="text-3xl font-bold">Trim Costs, Boost Efficiency</h3>
                            <div className="mt-4">
                                <h3 className="text-4xl font-bold">
                                    Save Time and Money with TrustAuthx Auth-Lite
                                </h3>
                                <p className='font-semibold mt-6' >TrustAuthx not only simplifies your user, token and session management but also trims your expenses significantly. Say goodbye to costly alternatives that can set you back. With AuthLite, you&apos;ll save valuable time and also enjoy over 65% in savings. It&apos;s a win-win for your efficiency and your budget.</p>

                                <Link href="/" className={cn(buttonVariants({ variant: "default", className: "bg-black mt-6 text-white rounded-full" }))} >
                                    Let’s Get Started It’s Free <ChevronRight className='ml-4 text-red-500 mt-1' />
                                </Link>
                            </div>
                        </div>

                        <div className='-mt-60' >
                            <TimelineCard
                                footerButtonText="See Pricing"
                                header={"Reduce Auth Development Time &"}
                                footerLink=""
                                footerText="TrustAuthx Auth-lite offers  a fully managed, user-friendly solutionfor system security,  saving you over 90% compared to similar systems that typically cost   around $500/month.">
                                <div className="mt-2 bg-gradient-to-r from-white to-black bg-clip-text text-center text-4xl font-bold  text-transparent">
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
            </div>

            <div style={{ background: "radial-gradient(71.86% 133.6% at 131.45% 64.97%, #4F4848 0%, #000 86.35%)" }} className='text-white' >
                <div className='container pl-20' >

                    <div className="flex items-start">
                        <div>
                            <Image width={100} height={100} src="/timeline/6-icon.svg" alt="" className={`${imgStyles} -ml-10`} />
                            <Image width={100} height={100} className={imgStyles} src="/timeline/7.svg" alt="" />
                        </div>

                        <div className=' flex justify-between w-full' >
                            <div className='max-w-lg' >
                                <h3 className="text-3xl font-bold">TrustAuthx Log-&quot;On&auot;</h3>
                                <div className="mt-4">
                                    <h3 className="text-4xl font-bold">
                                        Drive faster Conversions with Auth-Lite &quot;Log-On&quot; yes&quot;on&quot;
                                    </h3>

                                    <p className='font-semibold mt-6' >A Smoother Signup Experience. We&apos;ve re-imagined the signup process, significantly reducing the time it takes, benefiting everyone involved, and ultimately enhancing conversion rates. Say goodbye to lengthy signups and hello to quicker results.</p>

                                    <p className='font-semibold mt-6' >No More Separate Sign-Up and Log-In Processes. Our straightforward &rsquo;Log-On&rsquo; eliminates the need for separate sign-up and log-in steps, making access swift and hassle-free.</p>
                                    <Link href="/" className={cn(buttonVariants({ variant: "default", className: "bg-black mt-6 text-white rounded-full" }))} >
                                        Let’s Get Started It’s Free <ChevronRight className='ml-4 text-red-500 mt-1' />
                                    </Link>
                                </div>
                            </div>
                            <div className='-mt-60' >
                                <TimelineCard
                                    footerButtonText="See Pricing"
                                    header={"Reduce Auth Development Time &"}
                                    footerLink=""
                                    footerText="TrustAuthx Auth-lite offers  a fully managed, user-friendly solutionfor system security,  saving you over 90% compared to similar systems that typically cost   around $500/month.">
                                    <div className="mt-2 bg-gradient-to-r from-white to-black bg-clip-text text-center text-4xl font-bold  text-transparent">
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
                </div>
            </div>


        </>

    )
}

export default Newtimeline


