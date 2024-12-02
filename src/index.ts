import seniorINT from "@ssts/int";

const used = new Set<string>();

const loop = (characters: string, num: number): string => {
  let str: string = "", max: number = characters.length - 1;
  for (let i = 0; i < num; i++) {
    str += characters.charAt(seniorINT(0, max));
  }
  return str;
}

/**
 * Generates a random id and returns it.
 * @param {number[]} lengthArray - Default is [8, 4, 4, 4, 12]
 * @param {string} characters - Default is "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 * @returns {string} id
 * @throws TypeError if the lengthArray is not an array
 * @throws RangeError if the lengthArray length is 0
 * @throws TypeError if one of the lengthArray items is NaN
 * @throws RangeError if one of the lengthArray numbers is less than 1
 * @throws TypeError if the characters is not a string
 * @throws RangeError if the characters length is 0
 *
 * @example
 * import seniorID from "@ssts/id";
 * const randomId = seniorID();
 *
 * console.log(randomId);
 * // Log example: 'F5vvaP9D-4e5q-CTow-eUsx-P91RH0pph5Gy'
 */
const seniorID = (lengthArray: number[] = [8, 4, 4, 4, 12], characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string => {
  if (!Array.isArray(lengthArray)) throw new TypeError("lengthArray must be an array");
  else if (lengthArray.length === 0) throw new RangeError("lengthArray must not be empty");
  else if (lengthArray.some(num => typeof num !== "number")) throw new TypeError("All lengthArray items must be numbers");
  else if (lengthArray.some(num => num < 1)) throw new RangeError("All lengthArray numbers must be greater than 0");
  if (typeof characters !== "string") throw new TypeError("characters must be a string");
  else if (characters.length === 0) throw new RangeError("characters must not be empty");

  lengthArray = lengthArray.map(num => Math.floor(num));
  characters = [...new Set(characters)].join("");
  let id: string, run: number = 0, max: number = lengthArray.length - 1;

  do {
    id = "";
    lengthArray.forEach((num, index) => id += `${loop(characters, num)}${index === max ? "" : "-"}`);
    run++;
    if (run >= Math.pow(id.length, id.length)) lengthArray[max]!++;
  } while(used.has(id));

  used.add(id);
  
  return id;
};

declare global {
  interface Window {
    ssts: any;
  }
}
if (typeof window !== "undefined") {
  if (typeof window.ssts !== "object") window.ssts = {};
  window.ssts.seniorID = seniorID;
};

export default seniorID;
