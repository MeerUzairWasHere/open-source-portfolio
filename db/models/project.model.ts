import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
    title: { type: String, minlength: 2, required: true },
    oneLiner: { type: String, minlength: 2, required: true },
    logo: { type: String, required: true },
    screenshot: { type: String, required: true },
    projectType: { type: String, enum: ['frontend', 'backend', 'full-stack'], required: true },
    liveURL: { type: String, required: true },
    techStack: [{ id: String, text: String }],
    keywords: [{ id: String, text: String }],
    description: { type: String, required: true },
    screenshotPublicId: String,
    logoPublicId: String,
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project