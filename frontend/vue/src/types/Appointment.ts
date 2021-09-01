export interface Appointments {
  appointments: Appointment[];
}

export interface Appointment {
  lastName: string;
  firstName: string;
  dob: string;
  mrn: string;
  date: string;
  clinician: string;
  lastSaved: string;
  medications: Medication[];
}

export interface Medication {
  name: string;
  firstFill: string;
  copay: number;
  daysSupply: number;
}
