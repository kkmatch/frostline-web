"use client";

import { useState } from "react";

export default function FilterChip({ label }: { label: string }) {
  const [active, setActive] = useState(false);

  return (
    <button
      className={active ? "chip chip-active" : "chip"}
      onClick={() => setActive(!active)}
    >
      {label}
    </button>
  );
}
