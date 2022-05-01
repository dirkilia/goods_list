import { Coordinates } from "../domain/coordinates";

const EARTH_RADIUS= 6371000; // meters
const DEG_TO_RAD = Math.PI / 180.0;
const THREE_PI = Math.PI * 3;
const TWO_PI = Math.PI * 2;

const toRadians = (deg: number) => deg * DEG_TO_RAD;
const toDegrees = (rad: number) => rad / DEG_TO_RAD;

/*
Given a centerPoint C and a radius R, returns a random point that is on the
circumference defined by C and R.
centerPoint C is of type { latitude: A, longitude: B }
Where -90 <= A <= 90 and -180 <= B <= 180.
radius R is in meters.
Based on: http://www.movable-type.co.uk/scripts/latlong.html#destPoint
*/
export const randomCircumferencePoint = (
  centerPoint: Coordinates,
  radius: number,
  randomFn = Math.random
): Coordinates => {
  const sinLat = Math.sin(toRadians(centerPoint.latitude));
  const cosLat = Math.cos(toRadians(centerPoint.latitude));

  // Random bearing (direction out 360 degrees)
  const bearing = randomFn() * TWO_PI;
  const sinBearing = Math.sin(bearing);
  const cosBearing = Math.cos(bearing);

  // Theta is the approximated angular distance
  const theta = radius / EARTH_RADIUS;
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);

  let rLatitude, rLongitude;
  rLatitude = Math.asin(sinLat * cosTheta + cosLat * sinTheta * cosBearing);

  rLongitude =
    toRadians(centerPoint.longitude) +
    Math.atan2(
      sinBearing * sinTheta * cosLat,
      cosTheta - sinLat * Math.sin(rLatitude)
    );

  // Normalize longitude L such that -PI < L < +PI
  rLongitude = ((rLongitude + THREE_PI) % TWO_PI) - Math.PI;

  return { latitude: toDegrees(rLatitude), longitude: toDegrees(rLongitude) };
};

/*
Given a centerPoint C and a radius R, returns a random point that is inside
the circle defined by C and R.
centerPoint C is of type { latitude: A, longitude: B }
Where -90 <= A <= 90 and -180 <= B <= 180.
radius R is in meters.
*/
export const randomCirclePoint = (centerPoint: Coordinates, radius: number, randomFn = Math.random): Coordinates => {
  // http://mathworld.wolfram.com/DiskPointPicking.html
  return randomCircumferencePoint(
    centerPoint,
    Math.sqrt(randomFn()) * radius,
    randomFn
  );
};