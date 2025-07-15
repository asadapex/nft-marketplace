import Collections from "@/modules/Collection";
import Creators from "@/modules/Creators";

import Hero from "@/modules/Hero";
import Learn from "@/modules/Learn";
import { getRequest } from "@/service/getRequest";
import React from "react";

export default async function Home() {
  const artists = await getRequest("/user?role=ARTIST");
  const collections = await getRequest("/collections?limit=3");
  return (
    <>
      <Hero />
      <Collections collection={collections} />
      <Creators artists={artists} />
      <Learn />
    </>
  );
}
