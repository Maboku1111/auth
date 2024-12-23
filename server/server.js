import http from "http";
import {app} from "./api.js";

const PORT = 3000;

const server = http.createServer(app).listen(PORT).on("error", () => {
    throw new Error();
});

console.log("Server is up & running: " + JSON.stringify(server))
