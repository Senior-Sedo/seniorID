const l = (c: string, n: number): string => {
  let s: string = "";
  for (let i = 0; i < n; i++) {
    s += c.charAt(Math.floor(Math.random() * ((c.length - 1) + 1)));
  }
  return s;
}
const seniorID = (lengthArray: number[] = [8, 4, 4, 4, 12], characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string => {
  let d: string = "";
  lengthArray.forEach((c, i) => d += `${l(characters, c)}${i === lengthArray.length - 1 ? "" : "-"}`)
  return d;
};

export default seniorID;