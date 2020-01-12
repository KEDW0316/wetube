import express from "express";
import routes from "../routes";
import { videos, upload, deleteVideo, editVideo, videoDetail, getUpload, postUpload } from "../controller/videocontroller";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;