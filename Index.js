// Exercise 1:
// Create a template string and assign it to the variable my_template_string.
//     The template string should contain the following data only:
//
//     My name is ${my_name}.
//     My id is ${my_id}.
//     My address is ${my_address}.
//     Create the variables my_name, my_id, and my_address and set their values to Kevin, 2112, and Memphis, TN.
//
//     Use the template string you created and assigned to the variable my_template_string to log the formatted output to the console.
//
//     Sample Output:
//
//     My name is Kevin.
//     My id is 2112.
// My address is Memphis, TN.


let my_name = "Kevin";
let my_id = "2112";
let my_address = "Memphis,TN";
let nameTemp = `My name is ${my_name}
My id is ${my_id}.
My address is ${my_address}.`;
alert(nameTemp);


//     Exercise 2:
//
// Create a new template string
//
// var contestant = "1_M_l337!";
// var score = "9001";
// and use the provided variables to print
//
// Congratulations 1_M_l337! !!, your score is 9001.

var contestant = "1_M_l337";
var score = "9001";
let sTemp = `Congratulations ${contestant}! !!, your score is ${score}.`;
alert(sTemp);

// Exercise 3:
//
// Using the provided Object literal, create a template string and iterate through the Parents and Children and print them in a format sililar to the following:
//
//
//     SCHOOL PARENT LISTING
//
//
// Parent's Name: Mr. Bill
// Children:
//     Sluggo
// Spot
// Linda
//
// Parent's Name: J. Page
// Children:
//     Mick
// Robert
// John
// Kenny
//
// Parent's Name: Randolh H.
// Children:
//     Biffy
// Carl Jr.
//     Use the Object literal data below. You will need to iteratethrough each object and print it out with a template.

let listing =
            [
                {
                    Name: "Mr.Bill",
                    Children: ["Sluggo", "Spot", "Linda"]
                },
                {
                    Name: "J. Page",
                    Children: ["Mick", "Robert", "John", "Kenny"]
                },
                {
                    Name: "Randolh H.",
                    Children: ["Biffy", "Carl Jr."]
                }

            ];
// you should use a nested loop to iterate through the array
let fullList =`SCHOOL PARENT LISTING
Parent's Name:${listing[0].Name}
Children:
${listing[0].Children[0]}
${listing[0].Children[1]}
${listing[0].Children[2]}
Parent's Name:${listing[1].Name}
Children:
${listing[1].Children[0]}
${listing[1].Children[1]}
${listing[1].Children[2]}
${listing[1].Children[3]}

Parent's Name:${listing[2].Name}
Children:
${listing[2].Children[0]}
${listing[2].Children[1]}
`;

alert(fullList);


//     Challenge
//
// Put all the printing logic in a separate function and call the function for each Parent so they and their Children print.