import * as WebBrowser from "expo-web-browser";

export const Fee = 500;

export const handleExternalLink = (url: string) => {
  WebBrowser.openBrowserAsync(url);
};

export const formatNGNCurrency = (value: number) => {
  const formattedValue = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  return formattedValue.replace("₦", "₦ ");
};
