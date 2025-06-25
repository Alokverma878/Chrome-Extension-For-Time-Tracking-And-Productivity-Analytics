let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    if (activeTab && startTime) {
        const duration = Math.floor((Date.now() - startTime) / 1000);

        try {
            const urlObj = new URL(activeTab.url);
            const domain = urlObj.hostname;
            const category = classify(domain);

            await fetch("http://localhost:3000/track", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    url: domain,
                    timeSpent: duration,
                    date: new Date().toISOString().split("T")[0],
                    category
                })
            });
        } catch (err) {
            console.error("URL parsing error:", err);
        }
    }

    try {
        const tab = await chrome.tabs.get(activeInfo.tabId);
        if (tab && tab.url && tab.url.startsWith("http")) {
            activeTab = tab;
            startTime = Date.now();
        } else {
            activeTab = null;
            startTime = null;
        }
    } catch (err) {
        console.error("Tab fetch error:", err);
    }
});

function classify(domain) {
    const productiveSites = ["github.com", "leetcode.com", "stackoverflow.com"];
    const unproductiveSites = ["facebook.com", "instagram.com", "youtube.com"];
    if (productiveSites.includes(domain)) return "productive";
    if (unproductiveSites.includes(domain)) return "unproductive";
    return "neutral";
}
