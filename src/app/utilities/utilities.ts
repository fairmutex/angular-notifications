 export class Utilities {

 static types: Array<string> = ['success', 'error', 'warning', 'info'];

 static lorem =`
 Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 `;
 
 static randomType() {
    return this.types[Math.ceil((Math.random() * 4)) % this.types.length];
  }   


  static getRandomString(num:number):string{
    let arr = Utilities.lorem.split(' ');
    let result: string[] = [];
    for(let i = 0 ; i < num ; i ++){
      const randomNum = Math.floor(Math.random()*arr.length);
       result.push(arr[randomNum]);
    }
    return result.join(' ');
  }
}