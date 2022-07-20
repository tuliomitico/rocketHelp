import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';

type Props = {
  title: string;
} & IButtonProps;

export function Button({ title, ...rest }: Props): JSX.Element {
  return (
    <NativeBaseButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: 'green.500' }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </NativeBaseButton>
  );
}
