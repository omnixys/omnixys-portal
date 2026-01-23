// types/tracking.ts
export interface TrackingEvent {
  id: string;
  status: string; // e.g. "Out for Delivery"
  description: string;
  location?: string;
  timestamp: string; // ISO or formatted
  isCurrent?: boolean;
}
