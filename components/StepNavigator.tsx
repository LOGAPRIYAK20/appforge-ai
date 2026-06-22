"use client";
import { useState } from "react";

export default function StepNavigator() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <p>Current Step: {step}</p>

      <button onClick={() => setStep(step - 1)}>
        Previous
      </button>

      <button onClick={() => setStep(step + 1)}>
        Next
      </button>
    </div>
  );
}