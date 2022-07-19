import { Center, Spinner } from 'native-base';

export function Loading(): JSX.Element {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="secondary.700" />
    </Center>
  );
}
