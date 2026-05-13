"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full" />

      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-violet-400 text-lg mb-4 tracking-widest uppercase">
            Hello 👋 I'm
          </p>

          {/* NAME */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            Prasad Sankpal
          </h1>

          {/* DESCRIPTION */}
          <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">
            MCA Student, Full Stack Developer and Android Developer
            building modern web experiences and scalable applications.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">

            {/* GITHUB */}
            <a
              href="https://github.com/Prasad6723"
              target="_blank"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition p-4 rounded-2xl"
            >
              <span className="text-white font-bold text-lg">
                G
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/sankpalprasad"
              target="_blank"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition p-4 rounded-2xl"
            >
              <span className="text-white font-bold text-lg">
                in
              </span>
            </a>

            {/* MAIL */}
            <a
              href="mailto:sankpalprasad6723@gmail.com"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition p-4 rounded-2xl"
            >
              <span className="text-white font-bold text-lg">
                @
              </span>
            </a>

          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
          <p className="text-zinc-400 leading-relaxed text-lg">
            Passionate MCA student with strong interest in
            Full Stack Development and Android applications.
            I enjoy building practical software solutions,
            experimenting with modern technologies and
            creating smooth user experiences.
          </p>
        </div>

      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* PROJECT 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              JCB Invoice Expense App
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Android application for customer billing,
              diesel expense tracking, automatic work-hour
              calculations and dashboard filtering using Room Database.
            </p>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Dairy Management System
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              PHP and MySQL based web application
              for automating milk collection,
              customer records and billing systems.
            </p>
          </motion.div>

          {/* PROJECT 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Online Library Management System
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Developed a library management system using
              PHP, JavaScript, HTML, CSS and MySQL with
              search functionality and user-friendly interface.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "C",
            "C++",
            "Java",
            "Python",
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "MySQL",
            "PostgreSQL",
            "Android",
            "Next.js",
            "Tailwind CSS",
            "Spring Framework",
          ].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              key={skill}
              className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl text-zinc-300"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-12">
          Education
        </h2>

        <div className="space-y-6">

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              Master of Computer Applications (MCA)
            </h3>

            <p className="text-zinc-400 mt-2">
              Jaihind College Of Engineering, Kuran
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              Bachelor of Computer Science (BCS)
            </h3>

            <p className="text-zinc-400 mt-2">
              Jijamata Senior College
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 pb-32">

        <h2 className="text-4xl font-bold mb-12">
          Contact
        </h2>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">

          <p className="text-zinc-300 text-lg mb-4">
            📧 sankpalprasad6723@gmail.com
          </p>

          <p className="text-zinc-300 text-lg">
            📱 +91 7822064721
          </p>

        </div>

      </section>

    </main>
  );
}