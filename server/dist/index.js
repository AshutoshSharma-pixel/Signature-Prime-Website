"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
const auth_1 = __importDefault(require("./routes/auth"));
const forms_1 = __importDefault(require("./routes/forms"));
// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/signature-prime";
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
// Routes
app.use("/api/auth", auth_1.default);
app.use("/api/forms", forms_1.default);
app.get("/", (req, res) => {
    res.send("Signature Prime API Running");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
exports.default = app;
