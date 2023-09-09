const file = Bun.file("package.json");

// Reading a file
let text = await file.text();
console.log(text);


// Writing a file
await Bun.write("index.html", "<html/>");
await Bun.write("index.html", await fetch("https://example.com/"));