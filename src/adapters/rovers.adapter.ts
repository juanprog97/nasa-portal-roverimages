import { RoversDetails, CameraRover } from '@/models';

export const roversDetailsAdapter: any = (data: any) => {
  const rovers = data && data.length > 0 ? data : [];

  let listRovers: RoversDetails[] = [];
  listRovers = rovers.map((rover: any) => {
    return {
      id: rover.id.toString(),
      name: rover.name,
      landingDate: rover.landing_date,
      launchDate: rover.launch_date,
      status: rover.status,
      maxSol: rover.max_sol.toString(),
      maxDateEarth: rover.max_date,
      cameras: rover.cameras.map((camera: any) => {
        return {
          value: camera.name,
          label: camera.full_name,
        };
      }),
    };
  });
  return listRovers;
};
