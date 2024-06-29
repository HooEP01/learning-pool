import PoolError from "@/components/Error/PoolError";
import SideNav from "@/components/Navigation/SideNav";
import PoolSkeleton from "@/components/Skeleton/PoolSkeleton";
import { Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "react-error-boundary";

const Pool = dynamic(() => import("@/components/Pool"), {
  ssr: false,
  loading: () => <PoolSkeleton />,
});

const PoolPage = () => {
  return (
    <Container
      maxW="container.lg"
      style={{ display: "flex", flexDirection: "row" }}
      gap="6"
      p="6"
      py="8"
    >
      <SideNav />
      <ErrorBoundary
        FallbackComponent={PoolError}
        onReset={(details) => {
          console.log(details);
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <Pool />
      </ErrorBoundary>
    </Container>
  );
};

export default PoolPage;
