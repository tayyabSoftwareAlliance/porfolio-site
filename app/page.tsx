const projects = [
  {
    title: "TrackFlow",
    badge: "Full-stack SaaS",
    description:
      "Billing, auth, and project tracking platform with multi-tenant support and role-based access.",
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma"],
    link: "#",
  },
  {
    title: "Realtime Pulse",
    badge: "Platform",
    description:
      "Live analytics dashboard with websockets, background workers, and alerting rules.",
    stack: ["Next.js", "WebSockets", "Redis", "Postgres", "Tailwind"],
    link: "#",
  },
  {
    title: "Edge API Gateway",
    badge: "Backend",
    description:
      "NestJS gateway exposing REST + GraphQL with rate limits, observability, and automated docs.",
    stack: ["NestJS", "TypeScript", "gRPC", "OpenAPI", "Docker"],
    link: "#",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL & Prisma",
  "REST/GraphQL APIs",
  "Testing (Jest/Playwright)",
  "CI/CD & Docker",
  "Performance & caching",
];

const experiences = [
  {
    company: "Northstar Labs",
    role: "Senior Full-Stack Engineer",
    period: "2022 — Present",
    blurb:
      "Built and maintained core web app on Next.js/NestJS, leading migrations to typed APIs and improving page speed by 35%.",
  },
  {
    company: "Atlas AI",
    role: "Full-Stack Engineer",
    period: "2019 — 2022",
    blurb:
      "Delivered real-time monitoring tools, background jobs, and a React component kit shared across squads.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2016 — 2019",
    blurb:
      "Shipped full-stack web apps for startups—auth, payments, dashboards, and deployments to cloud platforms.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="grain" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(129,140,248,0.15),transparent_22%),radial-gradient(circle_at_40%_80%,rgba(14,165,233,0.12),transparent_20%)]" />
      <header className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-10 pt-16 sm:px-10 lg:px-0">
        <div className="flex flex-wrap items-center gap-3">
          <div className="glow rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-sky-100">
            Available for select projects
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            San Francisco · Remote Friendly
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
              Tayyab Sheikh · Full-Stack Web Developer
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              I build fast, reliable web apps end-to-end.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              From product requirements to production deployments, I architect
              and ship full-stack apps with React, Next.js, Node.js, and NestJS.
              Typed APIs, resilient data layers, and frontends that stay quick
              under load.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:alex@buildwithalex.dev"
                className="glow inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/30 transition hover:scale-[1.01]"
              >
                Let&apos;s talk
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                View work
              </a>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl border-white/10 p-6">
            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span>Delivery</span>
                <span>Frontend × Backend</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-300">Stack</p>
                  <p className="text-sm font-semibold text-white">
                    Next.js, React, Tailwind
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-300">Backend</p>
                  <p className="text-sm font-semibold text-white">Node.js, NestJS</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-linear-to-r from-sky-500/20 via-indigo-500/10 to-purple-500/20 px-4 py-4">
                <p className="text-xs text-slate-200">
                  I favor clean contracts, typed endpoints, and predictable
                  deployments. CI/CD, observability, and pragmatic tests keep the
                  surface stable while shipping fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col gap-14 px-6 pb-20 sm:px-10 lg:px-0">
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-slate-200">
              I solve product requirements with lean, typed web stacks. I ship
              React/Next.js frontends, NestJS/Node APIs, background jobs, and
              SQL-backed data models that stay maintainable. I sweat DX and
              production readiness: auth, caching, telemetry, and tests.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-5">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Highlights</span>
              <span>2024</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-100">
              <li>• Cut p95 API latency by 30% moving to typed NestJS services.</li>
              <li>• Rolled out feature flags + CI/CD to ship safely 20x/week.</li>
              <li>• Built realtime dashboards with websockets and background jobs.</li>
              <li>• Added Playwright/Jest suites that reduced regressions noticeably.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected work</h2>
            <a
              href="mailto:alex@buildwithalex.dev"
              className="text-sm text-slate-200 underline decoration-slate-500 underline-offset-4 transition hover:text-white"
            >
              Request a walkthrough
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group glass relative flex h-full flex-col gap-3 rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.2em] text-slate-300">
                    {project.badge}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-100">
                    Case study
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-200">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-sky-200 transition group-hover:translate-x-1">
                  View details ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Experience</h2>
            <div className="mt-4 space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-base font-semibold text-white">
                    {exp.role}
                  </p>
                  <p className="text-sm text-slate-200">{exp.blurb}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass flex flex-col justify-between gap-4 rounded-3xl p-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Principles</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>• Ship small, integrate continuously, measure impact.</li>
                <li>• Typed contracts between client and server first.</li>
                <li>• Build for debuggability: logs, traces, and metrics.</li>
                <li>• Keep UX fast—optimize queries, cache smartly.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-linear-to-r from-sky-400/15 to-indigo-500/20 p-4 text-sm text-slate-100">
              Open to senior/staff full-stack roles and scoped consulting for
              teams building with React, Next.js, Node.js, and NestJS.
            </div>
          </div>
        </section>

        <section className="glass relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-transparent to-sky-400/10" />
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-200">
              Let&apos;s build
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Need a full-stack web app built right?
            </h2>
            <p className="text-slate-200">
              I help teams ship React/Next.js products with solid Node/NestJS
              backends, typed APIs, and observable deployments.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:alex@buildwithalex.dev"
                className="glow inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/30 transition hover:scale-[1.01]"
              >
                Start a project
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://cal.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Book a call
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
