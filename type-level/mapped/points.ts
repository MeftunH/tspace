/**
 * Created by Maftun Hashimli  on . 1/17/2024
 * Email: maftunhashimli@gmail.com
 * Project: tspace
 * Class: points
 */


//DRY
type Point = { x: number; y: number };
type PointMap<T> = { [K in keyof T]: T[K] };
const point: Point = { x: 10, y: 20 };
const pointMap: PointMap<Point> = { x: 10, y: 20 };
function getPoint<K extends keyof Point>(key: K): Point[K] {
    return point[key];
}
console.log(getPoint("x"));
console.log(getPoint("y"));
