import express from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js';

const router = express.Router()

// Route to get all jobs data
router.get('/', getJobs)

// Route to get detail job by id
router.get('/:id', getJobById)

export default router;