import React from "react";

const BackgroundPattern = () => (
  <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none" aria-hidden="true">
    {/* Radial gradient background */}
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
      }}
    />
    {/* Fading overlay */}
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(16,23,42,0.95) 100%)",
      }}
    />
  </div>
);

export default BackgroundPattern; 