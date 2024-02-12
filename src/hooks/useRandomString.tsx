export const useRandomString = ({
  length: stringLength,
}: {
  length: number;
}) => {
  let primaryString = '';

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < stringLength; i++) {
    primaryString += characters.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }

  return { primaryString };
};
