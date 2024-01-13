
export function formatCardNumber(cardNumber: string):string {
  const formattedNumber = cardNumber.match(/.{1,4}/g);
  return formattedNumber ? formattedNumber.join(' ') : '';
}

export const isNumeric = (value: string): boolean => /^\d+$/.test(value);


export const validateEmpty = (value: string): boolean => {
  return value.trim() !== '' ;
};

export const isLetter =(value: string): boolean => /^[a-zA-Z\s]+$/.test(value);