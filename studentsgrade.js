function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

// List of 10 students with their scores
const students = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 88 },
    { name: "Charlie", score: 72 },
    { name: "Diana", score: 65 },
    { name: "Ethan", score: 91 },
    { name: "Fiona", score: 79 },
    { name: "George", score: 84 },
    { name: "Hannah", score: 58 },
    { name: "Ian", score: 70 },
    { name: "Julia", score: 100 }
];

/*
console.log("Student Name    | Score | Grade");
console.log("--------------------------------");
students.forEach(student => {
    const grade = calculateGrade(student.score);
    console.log(`${student.name.padEnd(15)} | ${student.score.toString().padEnd(5)} | ${grade}`);
});*/
const tableData = students.map(student => ({
    "Student Name": student.name,
    "Score": student.score,
    "Grade": calculateGrade(student.score)
}));

// Automatically creates a built-in table
console.table(tableData);