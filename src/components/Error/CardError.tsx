import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import DashboardSkeleton from "../Skeleton/DashboardSkeleton";

const CardError = () => {
  return (
    <>
      <DashboardSkeleton>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Something wrong
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Please try again or refresh this page.
          </AlertDescription>
        </Alert>
      </DashboardSkeleton>
    </>
  );
};

export default CardError;
