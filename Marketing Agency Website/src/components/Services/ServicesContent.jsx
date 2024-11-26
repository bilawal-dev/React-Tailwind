import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from '../../assets/images/portfolio/image1.jpg';
import image2 from '../../assets/images/portfolio/image2.jpg';
import image3 from '../../assets/images/portfolio/image3.jpg';

export default function ServicesContent() {
    return (
        <div className="my-20 bg-black">
            <TextParallaxContent
                imgUrl={image1}
                subheading="Innovative Marketing Strategies"
                heading="Tailored Plans for Maximum Impact."
            >
                <ExampleContent
                    heading="Strategic Excellence To Transform Your Reach"
                    description1="Harness the power of data-driven insights and creative solutions to elevate your brand’s visibility and impact. Our tailored approaches drive engagement and conversions, setting your business apart from the competition."
                    description2="We craft bespoke marketing strategies that align perfectly with your business goals, ensuring every campaign maximizes your brand’s reach."
                />
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl={image2}
                subheading="Compelling Brand Identity"
                heading="Unique and Memorable Designs."
            >
                <ExampleContent
                    heading="Distinctive Branding To Stand Out in the Market"
                    description1="Our expert team develops unique brand identities that resonate with your target audience, creating lasting impressions and fostering brand loyalty."
                    description2="From logo design to comprehensive brand development, we ensure your brand’s visual and emotional appeal sets you apart. Let us help you create a powerful brand presence that captivates and retains customers."
                />
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl={image3}
                subheading="Engaging Content Creation"
                heading="Captivating and Relevant Narratives."
            >
                <ExampleContent
                    heading="Creative Storytelling To Connect with Your Audience"
                    description1="We produce high-quality, engaging content that tells your brand’s story in a compelling way, connecting with your audience on a deeper level."
                    description2="Through blogs, videos, and social media content, we ensure your message is delivered effectively and resonates with your audience. Our content strategies are designed to enhance engagement and build a loyal customer base."
                />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div className="px-12 max-sm:px-0">
            <div className="relative h-[100vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-xl max-sm:rounded-none"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = ({ heading, description1, description2 }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4 max-sm:leading-tight">
            {heading}
        </h2>

        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-lg text-neutral-400 md:text-xl">
                {description1}
            </p>

            <p className="mb-8 text-lg text-neutral-400 md:text-xl">
                {description2}
            </p>
        </div>
    </div>
);