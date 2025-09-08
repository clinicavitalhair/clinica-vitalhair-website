
"use client";
import type { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Testimonial {
  name: string;
  ageLocation?: string;
  role?: string; // Added to support the new component structure if needed
  text: string;
  image: string | StaticImageData;
  dataAiHint?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((testimonial, i) => (
                <Card key={`${testimonial.name}-${index}-${i}`} className="bg-background shadow-lg rounded-lg max-w-xs w-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40} 
                        height={40}
                        className="rounded-full object-cover"
                        data-ai-hint={testimonial.dataAiHint || "person avatar"}
                      />
                      <div>
                        <CardTitle className="text-base font-semibold text-primary">{testimonial.name}</CardTitle>
                        {testimonial.ageLocation && <p className="text-xs text-foreground/80">{testimonial.ageLocation}</p>}
                        {testimonial.role && !testimonial.ageLocation && <p className="text-xs text-foreground/80">{testimonial.role}</p>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/90 italic">&quot;{testimonial.text}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
