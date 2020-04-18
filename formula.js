
// keliling
const calcSquareCircumference  = (side) => side * 4;
const calcRectCircumference = (width, length) => width * 2 + length * 2;
const calcTriangleCircumference = (side1, side2, side3) => side1 + side2 + side3;

// luas
const calcSquareArea = side => side**2;
const calcRectArea = (width, length) => width * length;
const calcTriangleArea = (base, height) => 1/2 * base * height;

menu();

// menu
function menu() {

    let result;
    let side;
    let width;
    let length;
    let base;
    let height;
    let backToMenu = "NO";

    const choice = prompt(`
        choose formula!
        1. calculate square circumference
        2. calculate rectangle circumference
        3. calculate triangle circumference
        4. calculate square area
        5. calculate rectangle area
        6. calculate triangle area
    `);
    
    switch (choice) {
        case '1':
            side = prompt(`input side: `);
            result = calcSquareCircumference(side);
            backToMenu = prompt(`
            the square circumference is ${result}
            do you want to calculate again? 
            (Yes/No)
            `);
        case '2':
            width = prompt(`input width: `);
            length = prompt(`input length: `);
            result = calcRectCircumference(width, length);
            backToMenu = prompt(`
            the rectangle circumference is ${result}
            do you want to calculate again? 
            (Yes/No)
            `);;   
        case '3':
            const side1 = prompt(`input side 1: `);
            const side2 = prompt(`input side 2: `);
            const side3 = prompt(`input side 3: `);
            result = calcTriangleCircumference(side1, side2, side3);
            backToMenu = prompt(`
            the triangle circumference is ${result}
            do you want to calculate again? 
            (Yes/No)
            `);
        case '4':
            side = prompt(`input side: `);
            result = calcSquareArea(side);
            backToMenu = prompt(`
            the square area is ${result}
            do you want to calculate again? 
            (Yes/No)
            `);
        case '5':
            width = prompt(`input width: `);
            length = prompt(`input length: `);
            result = calcRectArea(width, length);
            backToMenu = prompt(`
            the rectangle area is ${result}
            do you want to calculate again? 
            (Yes/No)
            `);
            break;
        case '6':
            base = prompt(`input base: `);
            height = prompt(`input height: `);
            result = calcTriangleArea(base, height);
            backToMenu = prompt(`
            the triangle area is ${result}
            do you want to calculate again? 
            (Yes/No)
            `);
            break;
        default:
            break;
    }
    if (backToMenu.toUpperCase() === 'YES') {
        menu();
    }
}
