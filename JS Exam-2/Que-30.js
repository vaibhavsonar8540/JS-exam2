var student ;

students = [
    {
        name : "vaibhav",
        age : 20
    },
    {
        name : "Kunj",
        age : 17
    },
    {
        name : "Roshan",
        age : 22 
    }
    ];

    const newstudent = students.find(students=>students.age>=18);

    console.log(newstudent);
    