"use client";
import React, { Suspense } from "react";
import ConsultantForm from "./ConsultantForm";

function ConsultantFormWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConsultantForm />
    </Suspense>
  );
}

export default ConsultantFormWithSuspense; 