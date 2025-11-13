
export interface WeddingFormData {
  hostId: number,
  bride: {
    fullName: string;
    fullNameKh: string;
    parentsNames: string;
    parentsNamesKh?: string;
  };
  groom: {
    fullName: string;
    fullNameKh: string;
    parentsNames: string;
    parentsNamesKh?: string;
  };
  weddingDate: string;
  weddingTime: string;
  ceremony: {
    venueName: string;
    address: string;
    addressKh: string;
  };
  reception: {
    venueName: string;
    address: string;
  };
  sameVenue: boolean;
  dressCode: string;
  rsvpDeadline: string;
  website?: string;
  specialInstructions: string;
  contact: {
    phone: string,
    email: string,
  },
  mapUrl: string
  coverPhoto: string
}