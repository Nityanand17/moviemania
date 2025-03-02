"use client";

import useBreakpoints from "@/hooks/useBreakpoints";
import { Accordion, AccordionItem, Link } from "@heroui/react";

export default function FAQ() {
  const { mobile } = useBreakpoints();
  const faqs = [
    {
      title: "🎬 What is MovieMania?",
      description:
        "MovieMania is an online streaming platform that allows users to effortlessly access a vast collection of movies and TV shows, eliminating the hassle of searching endlessly.",
    },
    {
      title: "❓ What do we actually provide?",
      description:
        "To clarify, we do not host any media files ourselves. MovieMania does not store copyrighted content on its servers. All media links provided are sourced from third-party platforms. This website serves only as a directory, introducing users to available content. We strongly advise purchasing official DVDs or digital copies to support creators.",
    },
    {
      title: "🚫 Why am I seeing ads while watching?",
      description: (
        <p>
          Unfortunately, we do not control the advertisements displayed by third-party hosts. If
          pop-ups appear, avoid downloading anything from them. For an uninterrupted experience, we
          highly recommend subscribing to a legal streaming service or using an ad blocker such as{" "}
          <Link href="https://ublockorigin.com/" target="_blank" className="font-bold">
            uBlock Origin
          </Link>{" "}
          or{" "}
          <Link href="https://adblockplus.org/" target="_blank" className="font-bold">
            Adblock Plus
          </Link>
          .
        </p>
      ),
    },
    {
      title: "🐌 Why is the streaming speed slow, or why aren't videos playing?",
      description:
        "If a video doesn't play, try selecting a different server from the options available (e.g., Vidcloud, Hydrax, etc.). Switching servers usually resolves most streaming issues and improves playback quality.",
    },
    {
      title: "📥 Can I download videos?",
      description:
        "Since MovieMania does not host any media files, there is no option to download content. All links provided are publicly available and sourced from external platforms.",
    },
    {
      title: "🔒 Is it safe to stream on MovieMania?",
      description:
        "Streaming on MovieMania is generally safe. However, downloading or redistributing content may violate legal policies. We strongly discourage downloading and sharing copyrighted materials, as it could lead to legal consequences.",
    },
  ];

  return (
    <Accordion variant="splitted" isCompact={mobile}>
      {faqs.map(({ title, description }) => (
        <AccordionItem key={title} aria-label={title} title={title}>
          {description}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
