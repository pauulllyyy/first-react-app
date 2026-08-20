import { useState } from "react";
import littleImage from "../../../assets/little.jpg";
import memoImage from "../../../assets/memo.jpg";
import goodImage from "../../../assets/good.jpg";
import journeyImage from "../../../assets/journey.jpg";
import meImage from "../../../assets/me.jpg";
import anotherImage from "../../../assets/another.jpg";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { Images, ArrowRight } from "lucide-react";

const gallery = [
  {
    image: littleImage,
    title: "Architecture Design 1",
    description: "A glimpse into my architectural journey.",
  },
  {
    image: memoImage,
    title: "Architecture Design 2",
    description: "Some architectural moments worth remembering.",
  },
  {
    image: goodImage,
    title: "Architecture Design 3",
    description: "Exploring creativity through architectural design.",
  },
  {
    image: journeyImage,
    title: "Architecture Design 4",
    description: "A collection of designs from my journey.",
  },
  {
    image: meImage,
    title: "Architecture Design 5",
    description: "Keeping my designs simple and authentic.",
  },
  {
    image: anotherImage,
    title: "Architecture Design 6",
    description: "Another piece of my architectural journey.",
  },
];

export function CardDataSection() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <Section className="relative overflow-hidden bg-[#F5EBDD] py-20">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            A Glimpse Into{" "}
            <span
              className="
                inline-block
                bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                bg-clip-text text-transparent
              "
            >
              My World
            </span>
          </h2>

          <p className="mt-4 text-stone-600">
            Here are some of my favorite architecture designs.
          </p>
        </div>

        {/* Gallery Button */}
        <div className="mb-12 flex justify-center">
          <Button
            onClick={() => setShowGallery(!showGallery)}
            className="
              group rounded-full
              bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
              px-6 py-6 text-white shadow-md
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-amber-600/20
            "
          >
            <Images size={18} />

            {showGallery ? "Hide My Gallery" : "Show My Gallery"}

            <ArrowRight
              size={18}
              className={`transition-transform duration-300 ${
                showGallery ? "rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </Button>
        </div>

        {/* Gallery */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showGallery ? "max-h-[2500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={item.image}
                className={`transition-all duration-500 ${
                  showGallery
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Card
                  className="
                    group overflow-hidden rounded-2xl
                    border border-amber-100
                    bg-white p-0 shadow-sm
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                    hover:shadow-amber-900/10
                  "
                >
                  <CardHeader className="p-0">
                    <CardTitle
                      imageSrc={item.image}
                      imageFullWidth
                      className="px-6"
                    >
                      {item.title}
                    </CardTitle>

                    <CardDescription className="px-6 pb-2 text-stone-500">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="px-6 pb-6">
                    <Button
                      className="
                        group/btn w-full rounded-xl
                        bg-stone-900 text-white
                        transition-all duration-300
                        hover:bg-gradient-to-r
                        hover:from-amber-600
                        hover:via-orange-500
                        hover:to-stone-700
                      "
                    >
                      View Photo

                      <ArrowRight
                        size={16}
                        className="
                          transition-transform duration-300
                          group-hover/btn:translate-x-1
                        "
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}