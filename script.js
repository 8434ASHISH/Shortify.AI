async function generateReelScript() {
  const blogUrl = document.getElementById('blogUrl').value;
  const platform = document.getElementById('platform').value;
  const duration = document.getElementById('duration').value;
  
  const responseBox = document.getElementById('responseBox');
  responseBox.innerText = "⏳ Generating...";

  try {
    const res = await fetch('https://your-backend-url.com/generate-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: blogUrl,
        topic: topic,
        platform: platform,
        duration: duration
      })
    });

    const data = await res.json();
    if (data.script) {
      responseBox.innerText = "✅ Script:\n" + data.script;
    } else {
      responseBox.innerText = "❌ Error: " + (data.error || 'No script received');
    }

  } catch (error) {
    responseBox.innerText = "🚫 Failed to generate script: " + error.message;
  }
}
