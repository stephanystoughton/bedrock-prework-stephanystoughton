const services = ["api", "database", "cache", "search", "auth"];

const results = {
    api: "UP",
    database: "UP",
    cache: "UP",
    search: "UP",
    auth: "UP"
};

function printHealthReport(results) {
    console.log("=== Service Health Report ===");

    let upCount = 0;
    let downCount = 0;

    for (const service of services) {
        const status = results[service];

        console.log(service + ": " + status);

        if (status === "UP") {
            upCount++;
        } else if (status === "DOWN") {
            downCount++;
        }
    }

    console.log("");
    console.log("Up: " + upCount);
    console.log("Down: " + downCount);
    console.log("Total: " + services.length);
}

printHealthReport(results);