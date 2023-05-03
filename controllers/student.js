import HttpStatusCode from "../exceptions/HttpStatusCode.js";

async function getAllStudents(req, res) {
  res.status(HttpStatusCode.OK).json({
    message: "Get all students successfully",
    data: [
      {
        name: "Nguyen Quang A",
        email: "2012394@dlu.edu.vn",
        age: 18,
      },
      {
        name: "Nguyen Haha",
        email: "2012394@gmail.com",
        age: 20,
      },
      {
        name: "Quang A",
        email: "2010520@dlu.edu.vn",
        age: 23,
      },
    ],
    // res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    //     message: 'Cannot get students'
    // })
  });
}

async function getStudentById(req, res) {}

async function updateStudent(req, res) {}

async function insertStudent(req, res) {}

export default {
  getAllStudents,
  getStudentById,
  updateStudent,
  insertStudent,
};
