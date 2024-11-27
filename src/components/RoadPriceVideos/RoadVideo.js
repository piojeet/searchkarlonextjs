"use client"

import Image from "next/image";
import { useState } from "react";
import Frame from "../../../public/roadvideo/Frame 222.png";
import { Play, Share, Share2 } from "lucide-react";

export default function RoadVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <div>
        <div className="py-2 font-semibold">Video</div>
        <div className="relative bg-red-400">
          {showVideo ? (
            // Show the video when thumbnail is clicked
            <video controls autoPlay className="w-full h-auto">
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Show the thumbnail initially
            <div
              className="relative cursor-pointer"
              
            >
              <Image
                src={Frame}
                alt="Video Thumbnail"
                className="w-full h-auto"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <button onClick={() => setShowVideo(true)} className="bg-white/20 text-black p-3 rounded-full">
                  <Play fill="#fff" stroke="#fff" />
                </button>
              </div>
            </div>
          )}

          <button className="bg-white/20 text-black p-3 rounded-full absolute top-4 right-4 z-50"><Share2 stroke="#fff" fill="#fff" /></button>
        </div>
      </div>
    </div>
  );
}
