"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { MacBook } from "@/components/MacBook";
import { Phone } from "@/components/Phone";
import { Details } from "@/components/Details";
import { Photo } from "@/components/Photo";
import {
  projects,
  timeline,
  skills,
  marqueeItems,
  heroWords,
} from "@/data/content";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const navHeight = useTransform(progress, [0, 0.02], [84, 64]);
  useEffect(
    () => scrollYProgress.on("change", (value) => setScrolled(value > 0.001)),
    [scrollYProgress],
  );
  return (
    <main>
      <motion.div
        className="fixed left-0 top-0 z-60 h-0.75 w-full origin-left bg-accent"
        style={{ scaleX: progress }}
      />
      <motion.nav
        style={{ height: navHeight }}
        className={`sticky top-0 z-40 flex items-center backdrop-blur-md ${scrolled ? "bg-[color-mix(in_oklab,var(--bg)_88%,transparent)]" : "bg-bg"}`}
      >
        <div className="wrap flex items-center justify-between">
          <a
            href="#top"
            className="display flex items-center gap-2.75 text-[19px]"
          >
            <span className="h-2.25 w-2.25 animate-[blink_2.6s_ease-in-out_infinite] rounded-full bg-accent" />
            Sofia Elsberg
          </a>
          <div className="nav-links flex items-center gap-8.5 text-[17px] font-medium">
            <a className="nav-link nav-text" href="#about">
              About
            </a>
            <a className="nav-link nav-text" href="#projects">
              Work
            </a>
            <a className="nav-link nav-text" href="#experience">
              Experience
            </a>
            <a
              className="btn btn-primary px-5.25! py-2.5! text-sm!"
              href="#contact"
            >
              Get in touch
            </a>
          </div>
        </div>
      </motion.nav>
      <section
        id="top"
        className="section-pad relative overflow-hidden py-27.5 pb-32.5"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-7.5 top-15 h-75 w-75 animate-[spin-slow_120s_linear_infinite] opacity-50 max-[760px]:h-52.5 max-[760px]:w-52.5"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle
            cx="150"
            cy="150"
            r="140"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="2 13"
            strokeLinecap="round"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="boat pointer-events-none absolute right-[9%] top-24 h-32.5 w-30 animate-[bob_7s_ease-in-out_infinite] max-[1024px]:bottom-6 max-[1024px]:right-[3%] max-[1024px]:top-auto max-[1024px]:h-26 max-[1024px]:w-24"
          viewBox="0 0 120 130"
          fill="none"
        >
          <path
            d="M60 6 Q 66 52 60 96 Q 34 92 14 96 Q 40 56 60 6 Z"
            fill="var(--accent)"
            opacity=".9"
            stroke="var(--accent)"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M68 34 Q 66 66 68 96 Q 88 92 104 96 Q 84 64 68 34 Z"
            fill="var(--accent)"
            opacity=".34"
            stroke="var(--accent)"
            strokeOpacity=".34"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M4 100 Q 60 104 116 100 Q 108 122 96 122 L24 122 Q 12 122 4 100 Z"
            fill="var(--ink)"
            stroke="var(--ink)"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
        <div className="wrap relative z-10">
          <div className="mb-13 flex items-center gap-2.5 text-sm font-medium text-(--ink-soft)">
            <span className="h-1.75 w-1.75 animate-[blink_2.2s_ease-in-out_infinite] rounded-full bg-(--accent-2)" />
            Aarhus, Denmark · open to work
          </div>
          <h1 className="display max-w-[15ch] text-[clamp(52px,8.6vw,124px)]">
            {heroWords.map((word, index) => (
              <motion.span
                className="mr-[.22ch] inline-block overflow-hidden align-top pb-[.05em]"
                key={word}
              >
                <motion.span
                  className={`inline-block ${word === "good" ? "text-accent" : ""}`}
                  initial={{ y: "105%", rotate: 3, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.05 + index * 0.06,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </h1>
          <Reveal delay={0.55}>
            <p className="mt-11 max-w-[56ch] text-xl text-(--ink-soft)">
              I've shipped real products, I care a lot about how things look and
              feel, and I'm still building out the rest of the toolkit.
            </p>
          </Reveal>
          <Reveal delay={0.68}>
            <div className="mt-11 flex flex-wrap gap-4">
              <a className="btn btn-primary" href="#projects">
                View work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.85}>
            <a
              href="#about"
              className="mt-21.5 flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-widest text-(--ink-soft)"
            >
              <ArrowDown
                size={15}
                className="animate-[nudge_2s_ease-in-out_infinite]"
              />
              Scroll
            </a>
          </Reveal>
        </div>
      </section>
      <div className="overflow-hidden bg-ink py-4.5">
        <div className="flex w-max animate-[marquee_38s_linear_infinite]">
          {[0, 1].map((copy) => (
            <div className="flex items-center gap-5" key={copy}>
              {marqueeItems.map((item, index) => (
                <span
                  key={item}
                  className={`px-5 font-display text-[15px] font-bold uppercase tracking-widest ${index % 3 === 2 ? "text-accent" : "text-(--on-dark-soft)"}`}
                >
                  {item}
                  <i className="ml-5 inline-block h-1 w-1 rounded-full bg-current opacity-60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <section id="about" className="section-pad bg-card py-35 pb-32.5">
        <div className="wrap">
          <Reveal className="max-w-[60ch]">
            <div className="eyebrow">About</div>
            <h2 className="display mt-5 text-[clamp(34px,4.6vw,60px)]">
              Still learning, mostly by doing.
            </h2>
          </Reveal>
          <div className="about-grid mt-16 grid grid-cols-2 gap-18 text-[19px] text-(--ink-soft)">
            <Reveal delay={0.08}>
              <p className="m-0">
                I studied Multimedia Design with a frontend specialty, and
                frontend stuck with me because it sits in a strange, satisfying
                middle ground: strict enough to have real rules, open enough
                that there are a hundred ways to solve the same problem. I'm an
                aesthetic person at heart, and there's something deeply
                satisfying about the walk from a blank page of functional code
                to something people actually enjoy looking at and using. Also i
                think coding is{" "}
                <strong className="text-ink">cool as hell (hehe).</strong>
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="m-0">
                Before I ever wrote a line of code, I spent 9 months living in
                Bali. After finishing my studies, I spent 5 months sailing
                across the Pacific on a 50ft yacht, learning to read wind and
                rigging the way I now read a codebase, and liked it enough that
                I bought my own boat afterward, so I could learn to sail it on
                my own instead of as crew - Pippi Langstrømpe style! Somewhere
                in between, in 2022, I took time away from work to treat
                depression, a couple of years I don't hide from, because getting
                through them is part of why I take this next step seriously. I
                came back to frontend development in 2023, and that's still my
                dream to do full-time.
              </p>
            </Reveal>
          </div>
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, filter: "blur(12px)", scale: 0.96 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 1.1 }}
          >
            <p className="display m-0 max-w-[26ch] text-[clamp(28px,3.9vw,50px)]">
              There's a thread running through all of it:{" "}
              <span className="text-accent">code, sailing, makeup.</span> I
              learn by actually doing the work, not by preparing for it from the
              sidelines.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section-pad py-32.5">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">How I work</div>
            <h2 className="display mt-5 max-w-[22ch] text-[clamp(30px,4vw,50px)]">
              The toolkit, and the way I actually use it.
            </h2>
          </Reveal>
          <div className="skills-grid mt-17.5 grid grid-cols-4 gap-9">
            {skills.map((skill, index) => (
              <Reveal delay={0.05 + index * 0.09} key={skill.title}>
                <div className="mb-4.5 font-display text-sm font-bold uppercase tracking-[.06em] text-(--ink-soft)">
                  {skill.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-22.5 grid max-w-225 grid-cols-[auto_1fr] items-start gap-7.5">
            <Sparkles
              aria-hidden="true"
              className="mt-1 animate-[spin-slow_26s_linear_infinite] text-accent"
              size={30}
              strokeWidth={1.8}
            />
            <div>
              <div className="display mb-3 text-[23px]">
                Built with AI, on purpose
              </div>
              <p className="m-0 text-[17px] text-[#6B6153]">
                I build with AI-assisted tooling as part of my normal workflow.
                This site itself was built using Claude: I wrote the direction,
                reviewed every output, and made the actual design and content
                calls.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="projects" className="section-pad bg-card py-32.5 pb-15">
        <div className="wrap">
          <Reveal className="max-w-[30ch]">
            <div className="eyebrow">Selected work</div>
            <h2 className="display mt-5 text-[clamp(32px,4.4vw,56px)]">
              Four products. Four very different problems.
            </h2>
            <p className="mt-5 text-lg text-(--ink-soft)">
              What I was responsible for on each, and what I built.
            </p>
          </Reveal>
        </div>
        <div className="project-rows mt-24 flex flex-col gap-32.5">
          {projects.map((project) => (
            <div className="project-row" key={project.n}>
              <div className="wrap">
                <motion.div
                  className="mb-8.5 h-px origin-left bg-(--line)"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.72, 0, 0.24, 1] }}
                />
                <div
                  className={`project-grid grid items-center gap-14 ${project.phone ? "grid-cols-2" : project.reverse ? "grid-cols-[1.1fr_1fr]" : "grid-cols-[1fr_1.1fr]"}`}
                >
                  {project.reverse && (
                    <Reveal className="project-image order-1">
                      {project.phone ? (
                        <Phone src={project.image} />
                      ) : (
                        <MacBook
                          src={project.image}
                          alt={`${project.title} website`}
                        />
                      )}
                    </Reveal>
                  )}
                  {!project.reverse && (
                    <Reveal className="project-image order-2">
                      <MacBook
                        src={project.image}
                        alt={`${project.title} website`}
                      />
                    </Reveal>
                  )}
                  <Details project={project} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-17.5" />
      </section>
      <section
        id="experience"
        className="dark section-pad relative overflow-hidden bg-ink py-32.5 text-(--on-dark)"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-22.5 top-15 h-80 w-80 animate-[spin-slow_150s_linear_infinite] opacity-50 max-[1024px]:-right-17.5 max-[1024px]:h-57.5 max-[1024px]:w-57.5 max-[760px]:-right-11.25 max-[760px]:h-42.5 max-[760px]:w-42.5"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle
            cx="100"
            cy="100"
            r="94"
            stroke="var(--accent)"
            opacity=".45"
          />
          <circle
            cx="100"
            cy="100"
            r="72"
            stroke="var(--on-dark-soft)"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity=".5"
          />
          <path
            d="M100 14 L112 100 L100 186 L88 100 Z"
            fill="var(--accent)"
            opacity=".5"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M14 100 L100 88 L186 100 L100 112 Z"
            fill="var(--accent)"
            opacity=".22"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M100 34 L108 100 L100 100 Z"
            fill="var(--accent)"
            stroke="var(--accent)"
            strokeWidth="3"
          />
          <circle cx="100" cy="100" r="4" fill="var(--accent)" />
        </svg>
        <div className="narrow relative">
          <Reveal>
            <div className="eyebrow text-accent!">Experience</div>
            <h2 className="display mt-5 text-[clamp(32px,4.4vw,54px)]">
              The full story, gaps included.
            </h2>
          </Reveal>
          <div className="mt-18 flex flex-col">
            {timeline.map((entry, index) => (
              <Reveal
                className="grid grid-cols-[16px_1fr] gap-6.5"
                key={entry.title}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`mt-1.75 h-3.5 w-3.5 rounded-full ${index > 3 ? "bg-(--accent-2)" : "bg-accent"}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.3, 1.6, 0.4, 1] }}
                  />
                  {index < timeline.length - 1 && (
                    <motion.div
                      className="timeline-line w-px flex-1 bg-white/20"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, delay: 0.08 }}
                    />
                  )}
                </div>
                <div className={index < timeline.length - 1 ? "pb-11.5" : ""}>
                  <div className="text-xs font-semibold tracking-widest text-(--on-dark-soft)">
                    {entry.date}
                  </div>
                  <h3 className="display mt-2 text-[22px]">{entry.title}</h3>
                  <p className="mt-2 text-(--on-dark-soft)">{entry.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad py-32.5 pb-35">
        <div className="wrap">
          <Reveal className="max-w-[34ch]">
            <div className="eyebrow">Outside of code</div>
            <h2 className="display mt-5 text-[clamp(34px,5vw,66px)]">
              Freelance makeup artistry.
            </h2>
            <p className="mt-5 text-lg text-(--ink-soft)">
              Different medium, same underlying thing: an eye for detail and a
              genuine love of making something look good. Self-taught.
            </p>
          </Reveal>
          <div className="makeup-grid mt-17.5 grid grid-cols-4 gap-5.5">
            <Photo
              src="/makeup-1.jpg"
              alt="Makeup artistry example 1"
              rotation={-2}
            />
            <Photo
              src="/makeup-2.jpg"
              alt="Makeup artistry example 2"
              rotation={1.5}
              offset
            />
            <Photo
              src="/makeup-3.jpg"
              alt="Makeup artistry example 3"
              rotation={-1}
            />
            <Photo
              src="/makeup-4.jpg"
              alt="Makeup artistry example 4"
              rotation={2}
              offset
            />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="dark section-pad relative overflow-hidden bg-ink py-35 pb-15 text-(--on-dark)"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-30 left-0 h-10 w-[200%] animate-[wave_9s_linear_infinite] opacity-30"
          viewBox="0 0 320 40"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 20 Q 40 0 80 20 T 160 20 T 240 20 T 320 20"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="wrap relative">
          <Reveal>
            <div className="eyebrow text-accent!">Let's talk</div>
            <h2 className="display mt-5.5 max-w-[16ch] text-[clamp(40px,7vw,96px)]">
              Fun to work with. Serious about the details.
            </h2>
            <p className="mt-6.5 max-w-[44ch] text-[19px] text-(--on-dark-soft)">
              I'm looking for my next frontend role. Say hello.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-11 flex flex-wrap gap-4">
              <a
                className="btn btn-primary"
                href="mailto:sofia.elsberg@live.dk"
              >
                Email me
              </a>
              <a className="btn btn-ghost" href="#">
                Download CV
              </a>
            </div>
          </Reveal>
          <div className="mt-27.5 flex flex-wrap gap-7.5 border-t border-white/15 pt-7.5 text-[15px] text-(--on-dark-soft)">
            <span>© Sofia Elsberg</span>
            <a href="https://github.com/sofiaelsberg">GitHub</a>
            <a href="#">LinkedIn</a>
            <span>Aarhus, Denmark</span>
          </div>
        </div>
      </section>
    </main>
  );
}
