import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export interface TaskCardProps {
  variant?: string;
}

const TaskCard = (props: TaskCardProps) => {
  const { variant = "elevated" } = props;

  return (
    <Card key={variant} variant={variant}>
      {/* <CardHeader>
        <Heading size="sm"> This is the task </Heading>
      </CardHeader> */}
      <CardBody>
        <Text>
          Flex is Box with display set to flex and comes with helpful style
          shorthand. It renders a `div` element.
        </Text>
      </CardBody>
    </Card>
  );
};

export default TaskCard;
