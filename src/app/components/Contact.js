const ICON_SIZE = "h-5 w-5";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-16 md:py-20 border-t border-zinc-800"
      aria-labelledby="contact-title"
    >
      <div className="max-w-3xl mx-auto">
        <div className="rounded-[40px] border-2 border-white bg-[#050509]/95 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-[0_24px_70px_rgba(0,0,0,0.7)] text-center">
          <h2
            id="contact-title"
            className="text-xl font-semibold tracking-tight text-zinc-100"
          >
            Contacto
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            ¿Te interesa conversar sobre un proyecto o una oportunidad?
          </p>

          <div className="mt-8 space-y-6">
            <a
              href="mailto:bariscijeremias@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-[#6366f1] hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              bariscijeremias@gmail.com
            </a>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/bariscijeremias/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 p-2.5 text-zinc-200 hover:border-[#6366f1] hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <svg
                  className={ICON_SIZE}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17.34V10.5H5.67V17.34H8.34M7 9.44C7.91 9.44 8.56 8.75 8.56 7.94C8.54 7.12 7.91 6.44 7 6.44C6.09 6.44 5.42 7.12 5.44 7.94C5.44 8.75 6.09 9.44 7 9.44M18.33 17.34V13.5C18.33 11.5 17.27 10.47 15.78 10.47C14.59 10.47 14 11.15 13.65 11.65V10.5H10.98V17.34H13.65V13.88C13.65 13.09 13.8 12.32 14.76 12.32C15.7 12.32 15.72 13.21 15.72 13.93V17.34H18.33Z"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/Jerebari"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 p-2.5 text-zinc-200 hover:border-[#6366f1] hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <svg
                  className={ICON_SIZE}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C7,19.91 6.35,18.46 6.15,17.79C6.04,17.5 5.5,16.5 5,16.27C4.6,16.07 4,15.5 5,15.5C5.92,15.58 6.5,16.46 6.68,16.77C7.8,18.64 9.56,18.14 10.25,17.86C10.34,17.21 10.61,16.77 10.9,16.5C8.72,16.25 6.44,15.38 6.44,11.5C6.44,10.39 6.82,9.5 7.46,8.79C7.36,8.54 7,7.5 7.56,6.15C7.56,6.15 8.39,5.88 9.5,6.77C10.29,6.54 11.15,6.43 12,6.43C12.85,6.43 13.71,6.54 14.5,6.77C15.61,5.88 16.44,6.15 16.44,6.15C17,7.5 16.64,8.54 16.54,8.79C17.18,9.5 17.56,10.39 17.56,11.5C17.56,15.39 15.28,16.25 13.1,16.5C13.5,16.86 13.81,17.55 13.81,18.62C13.81,20.12 13.8,21.23 13.8,21C13.8,21.27 13.96,21.59 14.46,21.5C16.2,20.9 17.68,19.73 18.73,18.17C19.78,16.61 20.33,14.82 20.33,13A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
