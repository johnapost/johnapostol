const watcher = chokidar.watch("file", {
  persistent: true,
  cwd: "..",
});

// Something to use when events are received.
const log = console.log.bind(console);

// Add event listeners.
watcher
  .on("add", (path) => log(`File ${path} has been added`))
  .on("change", (path) => log(`File ${path} has been changed`))
  .on("unlink", (path) => log(`File ${path} has been removed`));

// More possible events.
watcher
  .on("addDir", (path) => log(`Directory ${path} has been added`))
  .on("unlinkDir", (path) => log(`Directory ${path} has been removed`))
  .on("error", (error) => log(`Watcher error: ${error}`))
  .on("ready", () => log("Initial scan complete. Ready for changes"));

// Watch new files.
watcher.add("new-file");
watcher.add(["new-file-2", "new-file-3", "**/other-file*"]);
