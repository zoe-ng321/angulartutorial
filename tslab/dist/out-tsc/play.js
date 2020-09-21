class Product {
    constructor(id) {
        this.id = id;
    }
    printDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`ID: ${this.id}`);
        console.log(`Price: ${this.price}`);
    }
}
class Tour extends Product {
    constructor(id, duration) {
        super(id);
        this.duration = duration;
    }
    printDetails() {
        super.printDetails();
        console.log(`Duration: ${this.duration}`);
    }
}
class Dining extends Product {
    constructor(id, cuisine, childPrice) {
        super(id);
        this.cuisine = cuisine;
        this.childPrice = childPrice;
    }
    printDetails() {
        super.printDetails();
        console.log(`Cuisine: ${this.cuisine}`);
        console.log(`Child Price: ${this.childPrice}`);
    }
}
function test(p) {
    p.printDetails();
}
function cancelBooking(c) {
    console.log("Canceling booking. Charges: %d", c.cancelationFee);
}
function cancelBooking2(c) {
    console.log("Canceling %s (%d)", c.title, c.id);
    console.log("Price: %d", c.price);
    console.log("Canceling booking. Charges: %d", c.cancelationFee);
    console.log("Total refund: %d", c.price - c.cancelationFee);
}
function configSomething(op) {
    op.maxSize = op.maxSize || 1024;
    console.log("Directory: %s", op.directory);
    console.log("File: %s", op.file);
    console.log("Max Size: %s", op.maxSize);
}
var t = new Tour(1, "8 hours");
t.title = "Trip to Japan";
t.price = 1200.00;
t.cancelationFee = 100.00;
//test(t)
cancelBooking2(t);
var d = new Dining(2, "Italian", 10);
d.title = "Pasta!";
d.price = 20;
test(d);
configSomething({
    directory: "/dir1",
    file: "persons.json"
});
//# sourceMappingURL=play.js.map