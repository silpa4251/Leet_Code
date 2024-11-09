var reformatDate = function(date) {
    const monthMap = {
        "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04",
        "May": "05", "Jun": "06", "Jul": "07", "Aug": "08",
        "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"
    };
    const [day , month , year] = date.split(" ");
    const dayno = day.slice(0,-2).padStart(2,'0');
    const monthno = monthMap[month];
    return `${year}-${monthno}-${dayno}`;

};

console.log(reformatDate("6th Feb 2003"));