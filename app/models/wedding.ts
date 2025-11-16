export interface IWeddingFormData {
  id?: string;
  hostId: number | string,
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
  photoPreview?: string[]
}

export class WeddingFormData implements IWeddingFormData {
  id: string;
  hostId: number | string;
  bride: { fullName: string; fullNameKh: string; parentsNames: string; parentsNamesKh?: string };
  groom: { fullName: string; fullNameKh: string; parentsNames: string; parentsNamesKh?: string };
  weddingDate: string;
  weddingTime: string;
  ceremony: { venueName: string; address: string; addressKh: string };
  reception: { venueName: string; address: string };
  sameVenue: boolean;
  dressCode: string;
  rsvpDeadline: string;
  website?: string | undefined;
  specialInstructions: string;
  contact: { phone: string; email: string };
  mapUrl: string;
  coverPhoto: string;
  photoPreview?: string[] | undefined;

  constructor(init: IWeddingFormData) {
    this.id = init.id ?? '';
    this.hostId = init.hostId;
    this.bride = { ...init.bride };
    this.groom = { ...init.groom };
    this.weddingDate = init.weddingDate;
    this.weddingTime = init.weddingTime;

    this.ceremony = { ...init.ceremony };
    this.reception = { ...init.reception };

    this.sameVenue = init.sameVenue;
    this.dressCode = init.dressCode;
    this.rsvpDeadline = init.rsvpDeadline;
    this.website = init.website ?? "";
    this.specialInstructions = init.specialInstructions;
    this.contact = { ...init.contact };
    this.mapUrl = init.mapUrl;
    this.coverPhoto = init.coverPhoto;

    this.photoPreview = init.photoPreview ?? [];
  }

  get weddingDateForDisplay(){
    return dateTimeForDisplayKhmer(this.weddingDate);
  }
}