//Number of Days Between Two Dates

const calculateDaysBetweenDates = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    
    return date2.getDate() - date1.getDate();
  }
  
  console.log(calculateDaysBetweenDates("2024-04-01", "2024-04-30"));