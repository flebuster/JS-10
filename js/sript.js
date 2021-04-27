function Laptop(name, model, serialnumber, year, rum, rom, drive, weight) {
    var fRum = 'gb';
    this.name = name;
    this.model = model;
    this.serialnumber = serialnumber;
    this.year = year;
    this.rum = rum;
    this.rom = rom;
    this.drive = drive;
    this.weight = weight;

    this.getRum = function(){
        return rum +''+fRum;
    }
    this.getRom = function(){
        return this.rom;
    }
}
var p1 = new Laptop('HP', 1, 2, 1945, 4, 6, 1, 45);
var p2 = new Laptop('dell', 2, 4, 1946, 4, 8, 0, 50);

console.log(p1.getRum());
console.log(p2.getRum());

console.log(p1.getRom());
console.log(p2.getRom());

// function Ultrabook(weight){
//     this.weight = weight;
// }
function Ultrabook(name, model, serialnumber, year, rum, rom, weight) {
        var fRum = 'gb';
        this.name = name;
        this.model = model;
        this.serialnumber = serialnumber;
        this.year = year;
        this.rum = rum;
        this.rom = rom;
        var _weight = weight;

        this.getRum = function(){
            return rum +''+fRum;
        }
        this.getName = function(){
            return this.name;
        }
        this.getYear = function(){
            return this.year;
        }

    
        var _weight = 0;
        this.setWeight = function (weight) {
            if (weight <=0 || weight>= 1.5)
            throw "вес не больше 1,5кг";
            _weight = weight;
        }
        this.getWeight = function() {
            return _weight;
    
        }
}
// var ultrabook = new Ultrabook();
// ultrabook.setWeight(0.7);
// console.log(ultrabook.getWeight());
var p3 = new Ultrabook('HP', 1, 2, 1945, 4, 6);
p3.setWeight(0.7);


console.log(p3.getWeight());
console.log(p3.getName());
console.log(p3.getYear());