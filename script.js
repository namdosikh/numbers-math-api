document.getElementById("getFact").addEventListener("click", async () => {
    const number = document.getElementById("numberInput").value;
    const url = `http://numbersapi.com/${number}/math?json=true`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById("factDisplay").innerText = data.text;
    } catch (error) {
        document.getElementById("factDisplay").innerText = "Error fetching fact. Please try again!";
        console.error("Error fetching fact:", error);
    }
});