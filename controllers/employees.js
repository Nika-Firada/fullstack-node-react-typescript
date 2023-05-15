const { prisma } = require("../prisma/prisma-client");

/**
 * @route GET api/employees
 * @desc get all employees
 * @access Private
 */
const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  } catch {
    res.status(500).json({ message: "can't get any employees" });
  }
};

/**
 *
 * @route GET api/employees/:id
 * @desc get single employee
 * @access Private
 */
const employee = async (req, res) => {
    try {
        const {id} = req.params; 
        const employee = await prisma.employee.findUnique({
            where:{
                id
            }
        });
        res.status(200).json(employee)
    } catch (error) {
        return res.status(500).json({ message: "Can't get employee" });
    }
};

/**
 *
 * @route POST api/employees/add
 * @desc Add new employee
 * @access Private
 */
const add = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(400).json({ data: "All fields are required" });
    }
    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });
    res.status(201).json(employee);

    // const employee = await prisma.user.update({
    //     // განაახხლე მომხმარებელი რომლის id არის ეს->
    //     // და შექმენი მომუშავე
    //   where: {
    //     id: req.user.id,
    //   },
    //   data: {
    //     createdEmployee: {
    //       create: data,
    //     },
    //   },
    // });
    // res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "can't add new employee" });
  }
};

/**
 *
 * @route POST api/employees/remove
 * @desc remove employee
 * @access Private
 */
const remove = async (req, res) => {
  try {
    const { id } = req.body;
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    res.status(204).json("OK");
  } catch (err) {
    return res.status(500).json({ message: "Can't delete employee" });
  }
};

/**
 *
 * @route PUT api/employees/edit
 * @desc edit employee info
 * @access Private
 */
const edit = async (req, res) => {
  try {
    const data = req.body;
    const id = data.id;
    await prisma.employee.update({
        where:{
            id
        },
        data
    })
    res.status(204).json('OK')
  } catch (error) {
    return res.status(500).json({ message: "Can't update info" });
  }
};

module.exports = {
  add,
  remove,
  edit,
  all,
  employee,
};
