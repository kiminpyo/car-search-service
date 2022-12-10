export const compareDate = (date) => {
    
    const currentDate = new Date().getTime();
    const createdDate = new Date(date).getTime();
    // console.log(currentDate, createdDate);
    if (currentDate - 86400000 > createdDate) {
        return false;
    } else {
        return true;
    }
};


