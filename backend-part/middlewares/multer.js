// import multer from "multer";
// const storage = multer.diskStorage({
//     filename: function (req, file, callback) {
//         callback(null, file.originalname);
//     },
// });
// const upload = multer({ storage });
// export default upload;

//added for testing

import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

export default upload; // adeed for testing
