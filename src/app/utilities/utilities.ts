 class Utilities {

 static types: Array<string> = ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];
 
 static randomType() {
    return this.types[Math.ceil((Math.random() * 8)) % this.types.length];
  }
}