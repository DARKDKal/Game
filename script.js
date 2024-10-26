const countries = {
    "الأردن": 0,
    "فلسطين": 0,
    "السعودية": 0,
    "مصر": 0,
    "المغرب": 0,
    "العراق": 0,
    "الجزائر": 0,
    "تونس": 0,
    "ليبيا": 0,
    "لبنان": 0,
    "سوريا": 0,
    "السودان": 0,
    "اليمن": 0,
    "عمان": 0,
    "الكويت": 0,
    "البحرين": 0,
    "قطر": 0
};

document.getElementById("startButton").addEventListener("click", function() {
    const selectedCountry = document.getElementById("countrySelect").value;
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    
    let points = 0; // متغير لتخزين النقاط

    document.getElementById("pressButton").onclick = function() {
        points += 1; // زيادة النقاط عند الضغط
        countries[selectedCountry] += 1; // إضافة النقاط إلى الدولة
        alert(`لقد حصلت على نقطة! نقاطك الحالية: ${points}`);
    };

    document.getElementById("backButton").onclick = function() {
        document.getElementById("gameArea").style.display = "none";
        updateLeaderboard();
        document.getElementById("leaderboard").style.display = "block";
    };
});

// تحديث لوحة المتصدرين
function updateLeaderboard() {
    const scores = document.getElementById('scores');
    scores.innerHTML = ''; // تفريغ محتوى لوحة المتصدرين
    for (const [country, score] of Object.entries(countries)) {
        const entry = document.createElement('div');
        entry.textContent = `${country}: ${score}`; // عرض النقاط
        scores.appendChild(entry);
    }
}

// زر عرض النقاط
document.getElementById("viewPointsButton").addEventListener("click", updateLeaderboard);
