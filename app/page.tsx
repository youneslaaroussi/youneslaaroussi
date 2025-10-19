'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { SiGithub, SiLinkedin, SiTwilio } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'
import { GraduationCap } from 'lucide-react'
import Image from 'next/image'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
  HACKATHONS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function VimeoEmbed({ vimeoId }: { vimeoId: string }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl bg-zinc-900">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
            className="aspect-video h-full w-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Hackathon Project Video"
          />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Hackathon Project Video"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function ContactLink({
  icon,
  label,
  link,
  sublabel,
}: {
  icon: React.ReactNode
  label: string
  link: string
  sublabel?: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.2}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center gap-3 rounded-2xl bg-zinc-100 p-6 transition-all duration-300 hover:scale-105 hover:bg-zinc-950 hover:shadow-lg dark:bg-zinc-800 dark:hover:bg-zinc-700"
      >
        <div className="text-zinc-900 transition-colors duration-300 group-hover:text-zinc-50 dark:text-zinc-100">
          {icon}
        </div>
        <div className="text-center">
          <div className="text-lg font-medium text-zinc-900 transition-colors duration-300 group-hover:text-zinc-50 dark:text-zinc-100">
            {label}
          </div>
          {sublabel && (
            <div className="text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300 dark:text-zinc-400">
              {sublabel}
            </div>
          )}
        </div>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 text-2xl font-semibold">Get in Touch</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ContactLink
            icon={<HiMail size={48} />}
            label="Email"
            link={`mailto:${EMAIL}`}
            sublabel={EMAIL}
          />
          <ContactLink
            icon={<SiGithub size={48} />}
            label="GitHub"
            link={SOCIAL_LINKS[0].link}
            sublabel="@youneslaaroussi"
          />
          <ContactLink
            icon={<SiLinkedin size={48} />}
            label="LinkedIn"
            link={SOCIAL_LINKS[1].link}
            sublabel="Younes Laaroussi"
          />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Computer Science student passionate about front-end development and cybersecurity. I build user-friendly web interfaces using React.js, Python and JavaScript.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-8 text-2xl font-semibold">Featured Project</h3>
        {PROJECTS.map((project) => (
          <div key={project.name} className="space-y-6">
            <div className="relative rounded-2xl bg-zinc-50/40 p-2 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectVideo src={project.video} />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <a
                  className="group relative inline-block text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[2px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Visit Website
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Hackathon Wins</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {HACKATHONS.map((hackathon) => (
            <div key={hackathon.id} className="space-y-3">
              {hackathon.vimeoId && (
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <VimeoEmbed vimeoId={hackathon.vimeoId} />
                </div>
              )}
              <div className="px-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={hackathon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {hackathon.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                  </a>
                </div>
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1 text-sm font-medium text-amber-900 dark:from-amber-900/30 dark:to-yellow-900/30 dark:text-amber-200">
                  {hackathon.prize}
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {hackathon.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hackathon.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-6">
          {WORK_EXPERIENCE.map((job, index) => {
            const isCurrent = job.end === 'Present'
            return (
              <div
                className={`relative overflow-hidden rounded-2xl p-[1px] ${
                  isCurrent
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient'
                    : 'bg-zinc-300/30 dark:bg-zinc-600/30'
                }`}
                key={job.id}
              >
                {isCurrent && (
                  <style jsx>{`
                    @keyframes gradient {
                      0% {
                        background-position: 0% 50%;
                      }
                      50% {
                        background-position: 100% 50%;
                      }
                      100% {
                        background-position: 0% 50%;
                      }
                    }
                    .animate-gradient {
                      background-size: 200% 200%;
                      animation: gradient 4s ease infinite;
                    }
                  `}</style>
                )}
                <Spotlight
                  className={
                    isCurrent
                      ? 'from-blue-500 via-indigo-500 to-blue-500 blur-2xl'
                      : 'from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50'
                  }
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-6 dark:bg-zinc-950">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                          {job.company.includes('Twilio') ? (
                            <SiTwilio className="h-5 w-5 text-red-600" />
                          ) : job.company.includes('Cybersecurity') ? (
                            <Image
                              src="/canadian_institute_cybersecurity_logo.jpeg"
                              alt="Canadian Institute for Cybersecurity"
                              width={40}
                              height={40}
                              className="h-10 w-10 object-cover"
                            />
                          ) : null}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-medium dark:text-zinc-100">
                              {job.title}
                            </h4>
                            {isCurrent && (
                              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
                                Current
                              </span>
                            )}
                          </div>
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 text-zinc-900 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100"
                          >
                            <span className="font-medium">{job.company}</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100"
                            >
                              <path
                                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                          {job.type && (
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              {job.type}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-right">
                        {job.start} - {job.end}
                      </p>
                    </div>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span
                            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                              isCurrent
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                                : 'bg-zinc-400 dark:bg-zinc-500'
                            }`}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-6">
          {EDUCATION.map((edu) => {
            const isCurrent = edu.end.includes('Expected') || edu.end === 'Present'
            return (
              <div
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                key={edu.id}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-6 dark:bg-zinc-950">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                          <GraduationCap className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                        </div>
                        <div>
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 text-lg font-medium text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
                          >
                            <span>{edu.school}</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100"
                            >
                              <path
                                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                          <p className="text-zinc-900 dark:text-zinc-300">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {edu.field}
                          </p>
                          {edu.location && (
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              📍 {edu.location}
                            </p>
                          )}
                          {edu.gpa && (
                            <p className="mt-1 inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                              GPA: {edu.gpa}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-right">
                        {edu.start} - {edu.end}
                      </p>
                    </div>
                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

    </motion.main>
  )
}
