const mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        //required:true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    videoUrl: {
        type: String,
        //required:true
    },
    quiz: [
        {
            question: String,
            answer: [String],
            correctAnswer: String
        }
    ]
})

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        //required:true,
        trim: true
    },
    description: {
        type: String,
        //required:true,
        trim: true
    },
    instructor: {
        type: String,
        //required:true
    },
    category: {
        type: String,
        //required:true
    },
    lessons: [LessonSchema],
    duration: {
        type: String,
        //required:true
    },
    price: {
        type: Number,
        //required:true,
        default: 0
    },
    imageUrl: {
        type: String,
        //required:true
    },
    learningOutcomes: {
        type: [String],
    },
    bought:{
        type:Boolean,
        default:false
    }
}, { timestamps: true })

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course;