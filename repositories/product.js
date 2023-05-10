import Exception from "../exceptions/Exception.js";
import { Product } from "../models/index.js";
import { print, OutputType } from "../helpers/print.js";

const getAllProducts = async ({ page, size, searchString }) => {
  // aggregate data for all students
  page = parseInt(page);
  size = parseInt(size);
  // searchString? name, route
  let filteredProduct = await Product.aggregate([
    {
      $match: {
        $or: [
          {
            name: { $regex: `.*${searchString}.*`, $options: "i" }, //ignore case
          },
          {
            route: { $regex: `.*${searchString}.*`, $options: "i" }, //ignore case
          },
        ],
      },
    },
    {
      $skip: (page - 1) * size,
    },
    {
      $limit: size,
    },
  ]);
  return filteredProduct;
};

const insertProduct = async ({
  name,
  price,
  rating,
  category,
  description,
  imgUrl,
}) => {
  try {
    const product = await Product.create({
      name,
      price,
      rating,
      category,
      description,
      imgUrl,
    });
    return product;
  } catch (exception) {
    if (!!exception.errors) {
      //error from validation
      throw new Exception("Input error", exception.errors);
    }
  }
};

async function insertMultiple(receivedProducts) {
  try {
    debugger;
    let products = [];
    for (let i = 0; i < receivedProducts.length; i++) {
      let product = {
        name: receivedProducts[i].name,
        price: receivedProducts[i].price,
        rating: receivedProducts[i].rating,
        category: receivedProducts[i].category,
        description: receivedProducts[i].description,
        imgUrl: receivedProducts[i].imgUrl,
      };
      products.push(product);
    }
    debugger;
    await Product.insertMany(products);
  } catch (exception) {
    if (!!exception.errors) {
      debugger;
      //error from validation
      throw new Exception("Input error", exception.errors);
    }
  }
}

// const getStudentById = async (studentId) => {
//   const student = await Student.findById(studentId);
//   if (!student) {
//     throw new Exception("Cannot find student with id " + studentId);
//   }
//   return student ?? {}; // default value
// };

// const updateStudent = async ({
//   id,
//   name,
//   unit,
//   length,
//   route,
//   phoneNumber,
//   time,
//   routeNumber,
//   spacing,
// }) => {
//   //   console.log("insert student");
//   const bus = await Bus.findById(id);
//   debugger;
//   student.name = name ?? student.name;
//   student.email = email ?? student.email;
//   student.languages = languages ?? student.languages;
//   student.gender = gender ?? student.gender;
//   student.phoneNumber = phoneNumber ?? student.phoneNumber;
//   student.address = address ?? student.address;
//   await student.save();
//   return student;
// };

export default {
  getAllProducts,
  insertProduct,
  insertMultiple,
};
