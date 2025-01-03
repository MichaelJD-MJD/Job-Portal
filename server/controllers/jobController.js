import Job from "../models/Job.js"


// Get all jobs
export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({visible: true}).populate({
            path: 'companyId', // ini mirip kek with di sql, jadi saat kita mengambil data job, data company nya juga akan dikirimkan
            select: "-password" // menghapus password
        })

        res.json({
            success: true,
            jobs,
        })
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Get a single job by id
export const getJobById = async (req, res) => {
    try {
        const {id} = req.params;

        const job = await Job.findById(id).populate({
            path: "companyId",
            select: "-password"
        });

        if(!job){
            return res.json({success: false, message: "Job not found"})
        }

        res.json({
            success: true,
            job
        })


    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}