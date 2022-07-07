export interface AirTraffic {
  index?: number;
  month: string;
  airport: string;
  total_flights: number;
  cancelled_flights: number;
  more_than_fifteen_minutes_early: number;
  fifteen_to_one_minute_early: number;
  zero_to_fifteen_minutes_late: number;
  sixteen_to_thirty_minutes_late: number;
  thirtyone_to_sixty_minutes_late: number;
  sixtyone_to_onehundred_and_twenty_minutes_late: number;
  onehundred_and_twentyone_to_onehundred_and_eighty_minutes_late: number;
  onehundred_and_eightyone_to_threehundred_and_sixty_minutes_late: number;
  more_than_threehundred_and_sixty_minutes_late: number;
  average_delay_minutes: number;
}

export const months: string[] = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
