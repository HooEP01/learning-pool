"use client";

import { ErrorBoundary } from "react-error-boundary";
import CardError from "./Error/CardError";
import Dashboard from "./Dashboard";
import { Suspense } from "react";
import DashboardSkeleton from "./Skeleton/DashboardSkeleton";

const Card = () => {
  return (
    <>
      <ErrorBoundary
        fallback={<CardError />}
        onReset={(details) => {
          console.log(details);
        }}
      >
        <Suspense fallback={<DashboardSkeleton />}>
          <Dashboard />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Card;
