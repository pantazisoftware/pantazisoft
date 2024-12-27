import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Clear: React.FC = () => {
  return (
    <div className="bg-white py-24 relative">
      <div className="container mx-auto grid grid-cols-6 gap-32 items-start">
        <div className="col-span-6">
          <h4 className="text-3xl font-normal text-center">
            Got a clear vision and specific goals?
          </h4>
          <h2 className="text-6xl font-medium max-w-5xl mx-auto mt-6 text-center">
            Let’s explore how we can help you achieve them trough our Finite
            Engagement model.
          </h2>
        </div>
        <div className="flex justify-center col-span-6">
          <Button variant={"cta"} size={"cta"}>
            <Link href="/contact">Let's collaborate</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Clear;
