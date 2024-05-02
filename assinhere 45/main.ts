type car = {
    Manufacture: string
    Model: string
    [key: string]: any;
}


function createCar(Manufacture: string, Model: string, optional: Record<string, any>): car{
    return{
        Manufacture,
        Model,
       ...optional
    }
}


const mycar: car = createCar("Toyota", "Supra MK4", { Color: "Silver" , Year: "1993"})

console.log(mycar);

