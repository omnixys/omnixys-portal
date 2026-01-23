// public/mock/services.tsx
import LocalShippingOutlined from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlined from "@mui/icons-material/CreditCardOutlined";
import VerifiedOutlined from "@mui/icons-material/VerifiedOutlined";
import HeadsetMicOutlined from "@mui/icons-material/HeadsetMicOutlined";

import { ServiceItem } from "../types";

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Delivery within 24–48 hours nationwide",
    icon: <LocalShippingOutlined fontSize="medium" />,
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "100% secure payment with SSL encryption",
    icon: <CreditCardOutlined fontSize="medium" />,
  },
  {
    id: 3,
    title: "Money Back Guarantee",
    description: "30 days money back guarantee",
    icon: <VerifiedOutlined fontSize="medium" />,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Friendly customer support around the clock",
    icon: <HeadsetMicOutlined fontSize="medium" />,
  },
];