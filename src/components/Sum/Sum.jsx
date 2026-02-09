export const Sum = ({ a = 0, b = 0 }) => {
  const suma = a + b;

  return (
    <p>
      Sum of {a} and {b} is {suma}
    </p>
  );
};
