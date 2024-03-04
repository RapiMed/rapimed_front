import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselCustomArrows() {
  const secondsToCaroulselAutoplay = 1500 * 5;
  return (
    <Carousel
      placeholder=""
      autoplay
      className="rounded-lg"
      autoplayDelay={secondsToCaroulselAutoplay}
      loop
      prevArrow={({ handlePrev }) => (
        <IconButton
          placeholder=""
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder=""
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {[
        {
          url: "/carrossel1.png",
          alt: "image 1",
        },
        {
          url: "carrossel2.png",
          alt: "image 2",
        },
        {
          url: "carrossel4.png",
          alt: "image 3",
        },
      ].map((item) => (
        <div className="w-full">
          <img src={item.url} alt={item.alt} className="object-cover w-full" />
        </div>
      ))}
    </Carousel>
  );
}
