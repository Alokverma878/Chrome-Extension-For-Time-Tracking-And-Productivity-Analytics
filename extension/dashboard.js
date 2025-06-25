fetch("http://localhost:3000/report")
    .then(res => res.json())
    .then(data => {
        const summary = { productive: 0, unproductive: 0, neutral: 0 };

        data.forEach(entry => {
            summary[entry.category] += entry.timeSpent;
        });

        document.getElementById("report").innerHTML = `
      <p><strong>Productive Time:</strong> ${Math.floor(summary.productive / 60)} minutes</p>
      <p><strong>Unproductive Time:</strong> ${Math.floor(summary.unproductive / 60)} minutes</p>
      <p><strong>Neutral Time:</strong> ${Math.floor(summary.neutral / 60)} minutes</p>
    `;
    });
