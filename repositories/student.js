const getAllStudents = async ({
    page,
    size,
    searchString,

}) => {
    console.log('Get all students with paging')
}

// languages: ["english", "spanish", "vietnamese"]
const insertStudent = async ({
    name, email, languages, gender, phoneNumber, address
}) => {
    console.log('insert student')
}

export default {
    getAllStudents, 
    insertStudent,
}