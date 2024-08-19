console.log('#1');
// Data1
const markWeight1 = 78; 
const markHeight1 = 1.69; 
const johnWeight1 = 92; 
const johnHeight1 = 1.95; 
// Tinh chi so BMI
const markBMI1 = markWeight1 / (markHeight1 ** 2);
const johnBMI1 = johnWeight1 / (johnHeight1 ** 2);
// Kiem tra BMI Mark co cao hon John khong
const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Data 1 - Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`Data 1 - John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Data 1 - Mark has a higher BMI than John: ${markHigherBMI1}`);
// Data2
const markWeight2 = 95; 
const markHeight2 = 1.88;
const johnWeight2 = 85; 
const johnHeight2 = 1.76;
// Tinh chi so BMI
const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
// Kiem tra BMI Mark co cao hon John khong
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Data 2 - Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`Data 2 - John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Data 2 - Mark has a higher BMI than John: ${markHigherBMI2}`);
//-------------------------------------------------
console.log('#2');
console.log('Data1');
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI is higher than John's! Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI is higher than Mark's! John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
} else {
    console.log(`John's BMI = Mark's (${markBMI1.toFixed(2)})!`);
}
console.log('Data2');
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI is higher than John's! Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI is higher than Mark's! John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
} else {
    console.log(`John's BMI = Mark's (${markBMI1.toFixed(2)})!`);
}
//----------------------------------------------------

console.log('#3');
console.log('Data1');
// Dữ liệu thử nghiệm 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Tính điểm trung bình của mỗi đội
const dolphinsAverage1 = dolphinsScores1.reduce((a, b) => a + b) / dolphinsScores1.length;
const koalasAverage1 = koalasScores1.reduce((a, b) => a + b) / koalasScores1.length;

// Xác định đội chiến thắng hoặc hòa với yêu cầu điểm tối thiểu là 100
function determineWinner(dolphinsAvg, koalasAvg) {
    const minimumScore = 100;
    
    if (dolphinsAvg >= minimumScore && koalasAvg >= minimumScore) {
        if (dolphinsAvg > koalasAvg) {
            console.log(`Dolphins win with an average score of ${dolphinsAvg.toFixed(2)}!`);
        } else if (koalasAvg > dolphinsAvg) {
            console.log(`Koalas win with an average score of ${koalasAvg.toFixed(2)}!`);
        } else {
            console.log(`It's a draw! Both teams have the same average score of ${dolphinsAvg.toFixed(2)}.`);
        }
    } else {
        console.log('No team wins the cup. Both teams must have an average score of at least 100.');
    }
}

// Xác định kết quả cho dữ liệu thử nghiệm 1
determineWinner(dolphinsAverage1, koalasAverage1);
console.log('Data bonus 1');
// Dữ liệu thử nghiệm 2
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Tính điểm trung bình của mỗi đội
const dolphinsAverage2 = dolphinsScores2.reduce((a, b) => a + b) / dolphinsScores2.length;
const koalasAverage2 = koalasScores2.reduce((a, b) => a + b) / koalasScores2.length;

// Xác định kết quả cho dữ liệu thử nghiệm 2
determineWinner(dolphinsAverage2, koalasAverage2);
console.log('Data bonus 2');
// Dữ liệu thử nghiệm 3
const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Tính điểm trung bình của mỗi đội
const dolphinsAverage3 = dolphinsScores3.reduce((a, b) => a + b) / dolphinsScores3.length;
const koalasAverage3 = koalasScores3.reduce((a, b) => a + b) / koalasScores3.length;

// Xác định kết quả cho dữ liệu thử nghiệm 3
determineWinner(dolphinsAverage3, koalasAverage3);

//----------------------------------------
// Dữ liệu thử nghiệm
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Hàm tính tiền boa
function calculateTip(bill) {
    // Sử dụng toán tử điều kiện ba ngôi để tính tiền boa
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
}

// Hàm in kết quả ra bảng điều khiển
function printBillSummary(bill) {
    const tip = calculateTip(bill);
    const total = bill + tip;
    console.log(`Hóa đơn là ${bill}, tiền tip là ${tip.toFixed(2)} và tổng giá trị ${total.toFixed(2)}`);
}

// Kiểm tra với các dữ liệu thử nghiệm
printBillSummary(bill1); //
printBillSummary(bill2); 
printBillSummary(bill3); 

