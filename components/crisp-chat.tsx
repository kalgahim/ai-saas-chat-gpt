"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bc635b0c-894b-44f2-af1b-496f522fc8c2");
  }, []);

  return null;
};
