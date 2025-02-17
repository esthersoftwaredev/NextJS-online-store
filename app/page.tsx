"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/products"); // Navigates within the app
  }, [router]);

  return null; // No content is shown as navigation happens instantly
}