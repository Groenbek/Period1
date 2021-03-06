/* abstract class Shape {
    private _color:string;
    constructor (color:string){
        this._color = color;
    }
    abstract get area():number
    abstract get parimeter(): number;
    get color():string {
        return this._color
    }
    abstract toString():string;
}
class Circle extends Shape {

    radius:number;
    get area(): number {
        return Math.PI*Math.pow(this.radius, 2);
    }
    get parimeter(): number {
        return Math.PI*2*this.radius
    }
    toString(): string {
        return "Circle is: " + this.color + "And radius is : " + this.radius
    }
    constructor(radius:number, color:string){
        super(color)
        this.radius = radius;
    }
}

let circle1 = new Circle(50, "brownish")
console.log(circle1.area)
console.log(circle1.parimeter)
console.log(circle1.toString)

class Cylinder extends Circle{
    private height:number;

    get area():number{
        return (Math.PI*Math.pow(this.radius, 2));
    }
    get volume():number{
        return (Math.PI*Math.pow(this.radius, 2)*this.height);
    }
    get parimeter(): number {
        throw "This has not been implemented yet!"
    }
    get height():number {
        return this.height
    }
    set height(he:number {
        this.height = he
    }
    constructor(radius:number, color:string, height:number){
        super(radius, color)
        this.height = height;

    }
}
let cylinder1 = new Cylinder(50, "Yellowish", 10)
cylinder1.height = 80; */