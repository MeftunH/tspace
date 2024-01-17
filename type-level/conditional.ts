/**
 * Created by Maftun Hashimli  on . 1/17/2024
 * Email: maftunhashimli@gmail.com
 * Project: tspace
 * Class: conditional
 */

type IsArray<T> = T extends Array<any> ? true : false;
type X = IsArray<string>; // false
type ArrayOrNot<T> = T extends Array<any> ? T : T[];

const arr1:number[] = [1,2,3];
const arr2: string[]=["a","b","c"];
const num: number =42;

;
const arrOrNot1: ArrayOrNot<typeof arr1> = arr1;
const arrOrNot2: ArrayOrNot<typeof arr2> = arr2;
// const arrOrNot3: ArrayOrNot<typeof num> = num;


