"use client"

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"


interface Props {
    title:string,
    image:string,
    slug: string,
    location:string,
    date:string,
    time: string
}

const EventCard = ({title, image, slug, location, date,time}: Props) => {
  return (
    <div>
      <Link
        href={`/event${slug}`}
        id="event-card"
        onClick={() => posthog.capture("event_card_clicked", { event_title: title, event_slug: slug, event_location: location, event_date: date })}
      >
        <Image
          className="poster"
          src={image}
          alt={title}
          width={410}
          height={300}
        />

        <div className="flex flex-row gap-2">
          <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
          <p>{location}</p>
        </div>
        <p className="title">{title}</p>

        <div className="datetime">
          <div>
            <Image
              src="/icons/calendar.svg"
              alt="location"
              width={14}
              height={14}
            />
            <p>{date}</p>
          </div>
          <div>
            <Image
              src="/icons/clock.svg"
              alt="location"
              width={14}
              height={14}
            />
            <p>{time}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard
