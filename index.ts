
let age: number = 25;
let greeting: string = "Hello, World!";
let isLoggedIn: boolean = true;
let colors: string[] = ["red", "green", "blue"];
function displayDetails(): void {
    console.log(`Age: ${age}`);
    console.log(`Greeting: ${greeting}`);
    console.log(`Is Logged In: ${isLoggedIn}`);
    console.log(`Colors: ${colors.join(", ")}`);
}
displayDetails();
let userAge: number = 25;
let welcomeMessage: string = "Hello, World!";
let isUserLoggedIn: boolean = true;
let favoriteColors: string[] = ["red", "green", "blue"];
function displayUserDetails(): void {
    console.log(`User Age: ${userAge}`);
    console.log(`Welcome Message: ${welcomeMessage}`);
    console.log(`Is User Logged In: ${isUserLoggedIn}`);
    console.log(`Favorite Colors: ${favoriteColors.join(", ")}`);
}
displayUserDetails();