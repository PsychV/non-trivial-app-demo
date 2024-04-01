import express from "express"
import { fileURLToPath } from 'url'
import path from 'path'

const app = express();

const __dirname = fileURLToPath(import.meta.url);

app.use(express.static(path.resolve(__dirname,  "..", "..", "..", "frontend", "dist")));

app.all("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "..", "frontend", "dist", "index.html"));
});

app.listen(3000);
