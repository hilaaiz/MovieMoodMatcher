function triggerUpload() {
    document.getElementById('file-input').click();
}

function showMovie() {
    document.getElementById('result-section').style.display = 'block';
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // כאן ניתן להוסיף לוגיקה לשיגור הקובץ ל-Backend
        console.log("File selected:", file.name);

        // סימולציה של הצגת תוצאות
        document.getElementById('upload-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';
        document.getElementById('movie-name').textContent = 'Inside Out'; // שם סרט קבוע לדוגמה
    }
}

function showMovie() {
    // עדכון הכותרת הראשית
    document.getElementById('header-title').textContent = "The recommended movie for you based on our analysis is:";
    document.getElementById('header-subtitle').style.display = 'none'; // הסתרת תת הכותרת
    
    // הצגת התוצאה
    document.getElementById('result-section').style.display = 'block';
}
