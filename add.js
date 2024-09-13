const favActorFirstName = "Vin"
const FavActorLastName = "Diesel"

const fullName = favActorFirstName + "Vin" + favActorLastName + "Diesel"

const uppercase = fullName.toUpperCase(" VIN DIESEL")
const lowercase = ("vin diesel")

let message = " My Favorite Actor is "Vin Diesel" + uppercase + "VIN DIESEL";

message += "His best show is Need for Speed.";

console.log("Vin:", favActorFirstName);
console.log("Diesel:", favActorLastName);
console.log("Vin Diesel:", fullname);
console.log("VIN DIESEL:", uppercase);
console.log("vin diesel:", lowercase);
console.log("Vin Diesel is an actor in the Need for Speed:", message);
