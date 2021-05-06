export interface Bookings {
  bookingId: number;
  tutenUserClient: TutenUserClient;
  bookingTime: number;
  bookingPrice: number;
  locationId: LocationId;
}

export interface TutenUserClient {
  firstName: string;
  lastName: string;
}

export interface LocationId {
  streetAddress: string;
}
