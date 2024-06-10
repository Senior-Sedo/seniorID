# Create unique random string IDs

One **straight** *forward* ***function*** ~~that~~ <mark>returns</mark> <sup>a</sup> <sub>random</sub> `ID` 😍

## Install
```shell
npm i @ssts/id
```
## Import
```js
import seniorID from "@ssts/id";
```
## Use
```ts
const id: string = seniorID();
```

## Examples

```js
import seniorID from "@ssts/id";

console.log(seniorID());                           // 'F5vvaP9D-4e5q-CTow-eUsx-P91RH0pph5Gy'
console.log(seniorID([8]));                        // 'ZILHou6J'
console.log(seniorID([8], "love"));                // 'lllloove'
console.log(seniorID([8], "love"));                // 'velvovvo'
console.log(seniorID([8], "love"));                // 'veoelole'
console.log(seniorID([4], "love"));                // 'lvel'
console.log(seniorID([8, 4]));                     // 'ChOUDIc-4fEf'
console.log(seniorID([8, 4, 4]));                  // 'FHF842Qz-YwMf-clAz'
console.log(seniorID([8, 4, 2]));                  // 'VidKqZr7-IEyN-Fp'
console.log(seniorID([8, 4, 2, 1]));               // 'EUWiP1Fv-eBWp-aw-t'
console.log(seniorID([8, 4, 4, 4, 12]));           // 'CULsKi5d-tP6u-ghe1-noGU-uemm0sxexuhY'
console.log(seniorID([8, 4, 4, 4, 12], "abc123")); // '21ac2b3c-b3a3-3ab3-cccb-13a313aaa1a2'
```

## Arguments
> Returns a string

| Order |  Parameter  |   Type   | Default                                                          |
| :---: | :---------: | :------: | :--------------------------------------------------------------- |
|   1   | lengthArray | number[] | [8, 4, 4, 4, 12]                                                 |
|   2   | characters  |  string  | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" |

___
---
---
---
***
>   Made With Chocolate By Senior Sedo 😎
>>  Be Chocolateful 💙😍
>>> Changed `@senior-sedo-typescript/rand-id` to `@ssts/id` for simplicity sake 😍
***
---
---
---
___