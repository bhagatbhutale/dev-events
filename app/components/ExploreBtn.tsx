"use client"

import Image from "next/image"
import posthog from "posthog-js"

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mx-auto mt-7"
      onClick={() => {
        console.log("CLICK")
        posthog.capture("explore_events_clicked")
      }}
    >
      <a href="#events">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="arrow-down" height={24} width={24} />
      </a>
    </button>
  );
}

export default ExploreBtn
