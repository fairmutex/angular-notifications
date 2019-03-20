 export class Utilities {

 static types: Array<string> = ['success', 'danger', 'caution', 'info'];
 
 static randomType() {
    return this.types[Math.ceil((Math.random() * 4)) % this.types.length];
  }
}