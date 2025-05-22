'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
} from '@nextui-org/react';

import { experienceList, frameworks, tools, ExperienceItem } from './data';

export default function ExperiencePage() {
  const [currentItem, setCurrentItem] = useState<number | null>(null);

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        if (!scrollerInner) return;

        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <main className="p-8 mx-auto max-w-6xl text-white">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {experienceList.map((item, index) => (
          <Card key={index} className="relative w-full bg-zinc-900 text-white">
            <CardHeader className="flex flex-col items-start gap-1 p-4">
              <h3 className="text-lg font-semibold">{item.position}</h3>
              <p className="text-sm text-default-500">{item.company}</p>
            </CardHeader>
            <Divider />
            <CardBody className="p-0">
              <Image
                src={item.cardImg}
                alt={item.company}
                width={700}
                height={300}
                className="object-cover w-full h-48"
              />
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-between items-center px-4 py-2 text-sm">
              <div>
                <p>{item.location}</p>
                <p>{item.date}</p>
              </div>
              <Button radius="full" size="sm" onPress={() => setCurrentItem(index)}>
                Learn More
              </Button>
            </CardFooter>

            {/* Inline Modal as a child of the card */}
            {currentItem === index && (
              <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-zinc-800 rounded-lg p-6 max-w-lg w-full shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    {item.position} at {item.company}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {item.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-6 text-right">
                    <Button size="sm" variant="light" onPress={() => setCurrentItem(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      <h1 className="text-2xl font-bold mt-16 mb-4">Languages / Frameworks / Technologies</h1>
      <div className="scroller" data-direction="left" data-speed="slow">
        <ul className="tag-list scroller__inner">
          {frameworks.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <h1 className="text-2xl font-bold mt-12 mb-4">Tools</h1>
      <div className="scroller" data-direction="right" data-speed="slow">
        <ul className="tag-list scroller__inner">
          {tools.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
