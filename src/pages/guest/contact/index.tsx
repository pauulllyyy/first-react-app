import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#F5EBDD]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      {/* Header */}
      <section className="relative px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          Let's Connect
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 md:text-6xl">
          Contact{" "}
          <span
            className="
              inline-block
              bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
              bg-clip-text text-transparent
            "
          >
            Me
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
          Have a question, project idea, or just want to say hello? I'd love to
          hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="relative border-t border-amber-900/10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-3xl border border-amber-100 bg-[#EFE3D0] p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900">
              Let's work together.
            </h2>

            <p className="mt-4 leading-relaxed text-stone-600">
              I'm always interested in learning, creating new projects, and
              connecting with people. Feel free to reach out to me.
            </p>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <a
                href="mailto:giananjohnwendill@gmail.com"
                className="
                  group flex items-center gap-4 rounded-2xl
                  border border-amber-100 bg-white p-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-amber-300
                  hover:shadow-md
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    Email
                  </p>

                  <p className="text-sm font-semibold text-stone-700 group-hover:text-amber-700">
                    giananjohnwendill@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-white p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    Location
                  </p>

                  <p className="text-sm font-semibold text-stone-700">
                    Ibabao, Cordova Cebu, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-stone-900">
              Send me a message
            </h2>

            <p className="mt-2 text-sm text-stone-500">
              Fill out the form and I'll get back to you.
            </p>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Paul"
                  className="
                    h-12 w-full rounded-xl
                    border border-stone-200
                    bg-stone-50 px-4 text-sm
                    outline-none
                    transition-all duration-300
                    placeholder:text-stone-400
                    focus:border-amber-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-amber-100
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="
                    h-12 w-full rounded-xl
                    border border-stone-200
                    bg-stone-50 px-4 text-sm
                    outline-none
                    transition-all duration-300
                    placeholder:text-stone-400
                    focus:border-amber-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-amber-100
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="
                    w-full resize-none rounded-xl
                    border border-stone-200
                    bg-stone-50 p-4 text-sm
                    outline-none
                    transition-all duration-300
                    placeholder:text-stone-400
                    focus:border-amber-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-amber-100
                  "
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="
                  group h-12 w-full rounded-xl
                  bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-amber-600/20
                "
              >
                Send Message

                <Send
                  size={17}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative border-t border-amber-900/10 px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-stone-900">
          Want to know more about me?
        </h2>

        <p className="mt-3 text-stone-500">
          Check out my About Me page.
        </p>

        <NavLink to="/about">
          <Button
            variant="secondary"
            className="
              group mt-6 rounded-full
              border border-amber-200
              bg-white px-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-amber-400
              hover:bg-amber-50
              hover:text-amber-700
            "
          >
            About Me

            <ArrowRight
              size={17}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </NavLink>
      </section>
    </main>
  );
}