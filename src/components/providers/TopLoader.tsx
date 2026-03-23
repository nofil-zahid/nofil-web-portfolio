'use client';
import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#0df259"
      initialPosition={0.08}
      crawlSpeed={2000}
      height={1}
      crawl={true}
      showSpinner={false}
      easing="ease-in-out"
      speed={300}
      shadow="0 0 8px #9ACD32,0 0 4px #2299DD"
    />
  )
}
