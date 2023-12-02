const os = require("os");

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

if (os.platform() === "darwin") {
  console.log("You are on a mac");
} else if (os.platform() === "win32") {
  console.log("You are on windows");
} else {
  console.log("You are on Linux");
}

// cpus()
console.log(os.cpus());

// freemem()
console.log(os.freemem());
console.log(
  `free Memory ${os.freemem() / 1024 / 1024 / 1024} GB of free memory`
);

// total memory()
console.log(os.totalmem());
console.log(`Total Memory ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir()
console.log(os.homedir());

// uptime()
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minute = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;
console.log(
  `Uptime ${days} days, ${hours} hours, ${minute} minutes, ${seconds} seconds`
);

// hostname()
console.log(os.hostname());
