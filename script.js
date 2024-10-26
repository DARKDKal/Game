let score = 0;
let countryScores = {
    "الأردن": 0,
    "فلسطين": 0,
    "مصر": 0,
    "السعودية": 0,
    "الإمارات": 0,
    "الكويت": 0,
    "البحرين": 0,
    "قطر": 0,
    "عمان": 0,
    "المغرب": 0,
    "الجزائر": 0,
    "تونس": 0,
    "ليبيا": 0,
    "اليمن": 0,
    "السودان": 0,
    "العراق": 0,
    "لبنان": 0,
    "سوريا": 0
};

document.getElementById("startButton").addEventListener("click", function() {
    const selectedCountry = document.getElementById("countrySelect").value;
    document.getElementById("selectedCountry").innerText = selectedCountry;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("leaderboard").style.display = "none";
});

document.getElementById("pressButton").addEventListener("click", function() {
    score += 1;
    countryScores[document.getElementById("countrySelect").value] += 1;
    document.getElementById("scoreDisplay").innerText = "النقاط: " + score;
    document.body.style.backgroundColor = getRandomColor(); // تغيير لون الخلفية
});

document.getElementById("backButton").addEventListener("click", function() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
});

document.getElementById("leaderboardButton").addEventListener("click", function() {
    document.getElementById("gameArea").style.display = "none";
    displayLeaderboard();
    document.getElementById("leaderboard").style.display = "block";
});

document.getElementById("backToMenuButton").addEventListener("click", function() {
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
});

function displayLeaderboard() {
    const tableBody = document.getElementById("leaderboardTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // مسح المحتوى السابق
    for (const country in countryScores) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerText = country;
        cell2.innerText = countryScores[country];
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
