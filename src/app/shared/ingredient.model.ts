// export class Ingredient {
//   public name: string;
//   public amount: number;
//
//   constructor(name: string, amount: number){
//     this.name = name;
//     this.amount = amount;
//   }
//
// }
//OR you can do a shortcut like below with TypeScript
export class Ingredient {

  constructor(public name: string, public amount: number){}
  
}
