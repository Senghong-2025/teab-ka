
export interface WeddingFormData {
  hostId: number,
  bride: {
    fullName: string;
    parentsNames: string;
  };
  groom: {
    fullName: string;
    parentsNames: string;
  };
  weddingDate: string;
  weddingTime: string;
  ceremony: {
    venueName: string;
    address: string;
  };
  reception: {
    venueName: string;
    address: string;
  };
  sameVenue: boolean;
  dressCode: string;
  rsvpDeadline: string;
  website: string;
  specialInstructions: string;
  contact: {
    phone: string,
    email: string,
  },
  mapUrl: string
  coverPhoto: string
}