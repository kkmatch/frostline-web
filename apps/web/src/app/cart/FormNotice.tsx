"use client";

import { useState } from "react";

export default function FormNotice({ message, type }: { message: string; type: "error" | "hint" }) {
  const [visible, setVisible] = useState(false);

  return (
    <button
      type="button"
      className={type === "error" ? "form-error" : "form-hint"}
      onClick={() => setVisible(true)}
    >
      {visible ? message : "Click to validate"}
    </button>
  );
}
