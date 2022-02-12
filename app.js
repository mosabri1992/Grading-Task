const fs = require('fs')
const yargs = require('yargs')
const students = require('./students')

//add student command
yargs.command({
    command: 'add',
    describe: 'add student',
    builder: {
        id: {
            describe: 'Student id',
            demandOption: true,
            type: 'num'
        },
        name: {
            describe: 'Student Name',
            demandOption: true,
            type: 'string'
        },
        degrees: {
            describe: 'Student Degrees',
            demandOption: true,
            type: 'array'
        },
        comment: {
            describe: 'Optional comment',
            type: 'string'
        }
    },
    handler: (x) => {
        students.addStudent(x.id, x.name, x.degrees, x.comment)
    }

})

//delete student command
yargs.command({
    command: 'delete',
    describe: 'delete student',
    builder: {
        id: {
            describe: 'Student id you want to delete',
            demandOption: true,
            type: 'num'
        }
    },
    handler: (x) => {
        students.removeStudent(x.id)
    }
})

//read Student data Command

yargs.command({
    command: 'read',
    describe: 'read student data',
    builder: {
        id: {
            describe: 'student id',
            demandOption: true,
            type: 'num'
        }
    },
    handler: (x) => {
        students.readData(x.id)
    }
})

yargs.command({
    command: 'list',
    describe: 'List students data',
    handler: () => {
        students.listData()
    }
})

yargs.parse()