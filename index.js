import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi(
  'fca_live_BVjT34E5WAXcbf5FcV0Kp63cGdy7Bfi0GjeKKxhg'
);

export const currencyMagic = async (sourceCurrency, targetCurrency, amount) => {
  try {
    const response = await freecurrencyapi.latest({
      base_currency: sourceCurrency,
      currencies: targetCurrency,
    });

    const conversion_rate = response.data[targetCurrency];

    return conversion_rate * amount;
  } catch (error) {
    console.log(error.message);
  }
};
