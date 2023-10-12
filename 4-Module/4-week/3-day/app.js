const express = require('express')
const app = express()
require('dotenv').config()
// const {User, Post } = require('./db/models')
const { Op } = require('sequelize')
const Sequelize = require('sequelize')
const { User, Post, Student, Course, Enrollment, Order, sequelize } = require('./db/models')

app.use(express.json())

// CRUD for Users
// Sequelize generates functions for associations
// set<className> function / plural and singular versions
// get<className> function / plural and singular versions
// add<className> function / plural and singular versions
// create<className> function / plural and singular versions

// pagination
app.get('/users', async (req, res) => {

	//
	const { page, limit } = req.query
	
	const offset = (page ? parseInt(page) - 1 : 0) * parseInt(limit)

	const users = await User.findAll(
		{
			limit: parseInt(limit),
			offset: parseInt(offset)
		}
	)

	res.json(users)
})

app.get('/posts', async (req, res) => {
	const posts = await Post.findAll()

	res.json(posts)
})

app.get('/orders', async (req, res) => {

	// static function
	// const minPrice = await Order.min('amount')
	// const minPrice = await Order.max('amount')
	// const minPrice = await Order.sum('amount')
	// const minPrice = await Order.count('amount')

	// using manual approach
	const data = await Order.findAll({
		attributes: [
			[sequelize.fn('MIN', sequelize.col('price')), 'minPrice'],
			[sequelize.fn('MAX', sequelize.col('price')), 'maxPrice']
		]
	})

	// SELECT MIN(Orders.amount) as minPrice FROM Orders;


	res.json(data)
})

app.get('/users/:id/posts', async (req, res) => {
	const { id } = req.params
	const usersPosts = await User.findOne({where: {id: id}, include: Post})
	// res.json(currentUser)
	res.json(usersPosts)
})

app.get('/posts/:id/users', async (req, res) => {
	const { id } = req.params
	const postUser = await Post.findOne({where: {id: id}, include: User})


	res.json(postUser)
})

app.post('/users/:userId/posts', async (req, res) => {
	const { userId } = req.params
	const { title, content } = req.body
	const currentUser = await User.findByPk(userId)

	const post1 = await Post.create ({
		title,
		content,
		userId
	})

	const post2 = await Post.create({
		title,
		content,
		userId
	})
	await currentUser.addPosts([post1,post2])

	res.json({ 'message': 'Successfully Created a new Post' })
})

app.get('/students', async (req, res) => {
	const students = await Student.findAll()
	res.json(students)
})

app.get('/courses', async (req, res) => {
	const courses = await Course.findAll()
	res.json(courses)
})

app.get('/students/:studentId/courses', async (req, res) => {
	const { studentId } = req.params

	// lazy load
	// const currentStudent = await Student.findByPk(studentId)
	// const studentsCourses = await currentStudent.getCourses()

	// eager load
	const studentsCourses = await Student.findOne({ where: { id: studentId }, include: Course })
	res.json(studentsCourses)
})

app.get('/courses/:courseId/students', async (req, res) => {
	const { courseId } = req.params

	// eager load
	const coursesStudents = await Course.findOne({ where: { id: courseId }, include: Student })
	res.json(coursesStudents)
})

// creating a new student to the course
app.post('/courses/:courseId/students', async (req, res) => {
	const { courseId } = req.params
	const { name } = req.body

	const currentCourse = await Course.findByPk(courseId)

	await currentCourse.createStudent({name})

	res.json({'message': 'Successfully created a new student!'})

})

// adding a student to the course
app.post('/courses/:courseId/students/:studentId', async (req, res) => {
	const { courseId, studentId } = req.params
	const currentCourse = await Course.findByPk(courseId)

	const currentStudent = await Student.findByPk(studentId)

	// await currentCourse.addStudents([currentStudent])
	await currentStudent.addCourses([currentCourse])
	res.json({ 'message': 'Successfully created a new student!' })

})


const port = process.env.PORT
app.listen(port, () => {
	console.log(`Server is now listening port ${port}`)
})
