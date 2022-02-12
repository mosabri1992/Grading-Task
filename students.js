const fs = require('fs')
const { number } = require('yargs')


// adding data function
const addStudent = (id, name, degrees, comment) => {

    const students = loadStudents()
    const duplicateCheck = students.filter((student) => {

        return student.id === id
    })

    if (duplicateCheck.length == 0) {
        let sum = 0
        let numDegree = JSON.parse(degrees)
        numDegree.forEach(degree => {
            sum += degree
        });
        students.push({
            id,
            name,
            sum,
            comment
        })
        saveStudents(students)
        console.log('Saved Successfully')


    } else {
        console.log('Duplicated ID')
    }
}

//removing function data

const removeStudent = (id) => {
    const students = loadStudents()
    const studentsToKeep = students.filter((student) => {

        return student.id !== id
    })
    console.log(students)
    console.log(studentsToKeep)

    if (studentsToKeep.length < students.length) {
        saveStudents(studentsToKeep)
        console.log('Removed Successfully.')
    } else {
        console.log('ID is not found')
    }
}

//function to read student data

const readData = (id) => {
    const students = loadStudents()
    const dataToRead = students.find((student) => {
        return student.id === id
    })

    if (dataToRead) {
        console.log(dataToRead)
    } else {
        console.log('ID not found')
    }
}

//function to list students data

const listData = () => {
    const students = loadStudents()
    students.forEach(student => {
        console.log(student)
    });
}

//function to load the Data
const loadStudents = () => {
    try {
        const data = fs.readFileSync('students.json').toString()
        return JSON.parse(data)

    } catch (error) {
        return []
    }
}

// Function to save Data
const saveStudents = (student) => {

    const saveStudent = JSON.stringify(student)
    fs.writeFileSync('students.json', saveStudent)
}

module.exports = {
    addStudent,
    removeStudent,
    readData,
    listData
}