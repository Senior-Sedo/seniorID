const used = new Set<string>();

const loop = (characters: string, num: number): string => {
  let str: string = "";
  for (let i = 0; i < num; i++) {
    str += characters.charAt(Math.floor(Math.random() * ((characters.length - 1) + 1)));
  }
  return str;
}
const seniorID = (lengthArray: number[] = [8, 4, 4, 4, 12], characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string => {
  characters = [...new Set(characters)].join("");
  let id: string, run: number = 0;

  do {
    id = "";
    lengthArray.forEach((num, index) => id += `${loop(characters, num)}${index === lengthArray.length - 1 ? "" : "-"}`);
    run++;
    if (run >= Math.pow(id.length, id.length)) lengthArray[lengthArray.length - 1]!++;
  } while(used.has(id));

  used.add(id);
  
  return id;
};

export default seniorID;