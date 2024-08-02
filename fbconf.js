async function incrementDownload(pack) {
    try {
        const response = await fetch('https://fbconf.onrender.com/incrementDownload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pack })
        });

        if (response.ok) {
            console.log("Transaction successfully committed!");
            loadDownloadCount(pack);
        } else {
            console.log("Transaction failed: ", await response.text());
        }
    } catch (error) {
        console.log("Transaction failed: ", error);
    }
}

async function loadDownloadCount(pack) {
    try {
        const response = await fetch(`https://fbconf.onrender.com/loadDownloadCount?pack=${pack}`);
        const data = await response.json();
        document.getElementById(pack + '-count').textContent = data.count;
    } catch (error) {
        console.log("Error getting document:", error);
    }
}