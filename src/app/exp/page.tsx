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
      Modal,
      ModalContent,
      ModalHeader,
      ModalBody,
      ModalFooter,
      useDisclosure,
    } from '@nextui-org/react';

    import { experienceList, frameworks, tools, ExperienceItem } from './data';


    export default function ExperiencePage() {
      const { isOpen, onOpen, onOpenChange } = useDisclosure();
      const [currentItem, setCurrentItem] = useState<ExperienceItem | null>(null);

      useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", "true");
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true) as HTMLElement;
              duplicatedItem.setAttribute("aria-hidden", "true");
              scrollerInner.appendChild(duplicatedItem);
            });
          });
        }
      }, []);

      const openModal = (item: ExperienceItem) => {
        setCurrentItem(item);
        onOpen();
      };

      return (
        <main className="p-8 mx-auto max-w-6xl text-white">
          <h1 className="text-3xl font-bold mb-8">Experience</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {experienceList.map((item, index) => (
              <Card key={index} className="w-full bg-zinc-900 text-white">
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
                  <Button radius="full" size="sm" onPress={() => openModal(item)}>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {currentItem && (
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
              <ModalContent>
                {(onClose: () => void) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {currentItem.position} at {currentItem.company}
                    </ModalHeader>
                    <ModalBody>
                      <ul className="list-disc pl-5 space-y-1">
                        {currentItem.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                      {currentItem.modalImgs.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img}
                          alt="Screenshot"
                          width={400}
                          height={300}
                          className="rounded"
                        />
                      ))}
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          )}

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