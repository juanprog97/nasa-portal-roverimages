export interface RoversDetails {
  id: string;
  name: string;
  landingDate: string;
  launchDate: string;
  status: string;
  maxSol: number;
  maxDateEarth: string;
  cameras: CameraRover[];
}

export interface CameraRover {
  value: string;
  label: string;
}
