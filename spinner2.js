let spinner = "| / - \\ | / - \\ | ";

for (const char in spinner) {
  setTimeout(() => {
    process.stdout.write("\r" + spinner[char]);
  }, char * 200);
}

