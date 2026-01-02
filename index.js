// index.js
const securityCheck = require("./security");

(async () => {
  try {
    console.log("🔐 Running security check...");
    await securityCheck();

    console.log("🤖 Bot started successfully");
    // kalau ada logic bot utama, taruh di sini
  } catch (err) {
    console.error("❌ FATAL ERROR:", err);
    process.exit(1);
  }
})();
