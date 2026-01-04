import { EventRole } from "../../event/event-enum.type";
import { PhoneNumberType } from "./user-enum-type";

export type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumbers?: PhoneNumber[];
  ticketIds: string[];
  invitationIds?: string[];
  createdAt: Date;
  updatedAt: Date;
  roles: EventRole[];
};

export type PhoneNumber = {
  id: string;
  number: string;
  type?: PhoneNumberType;
  isPrimary?: boolean;
};
