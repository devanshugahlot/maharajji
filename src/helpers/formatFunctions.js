export function convertToIST(utcTimestamp) {
    // Create a new Date object from the UTC timestamp string
    let utcDate = new Date(utcTimestamp);

    // Set the time zone to Indian Standard Time (IST)
    utcDate.setTime(utcDate.getTime() + (5.5 * 60 * 60 * 1000));

    // Format the date as desired (DD Month YYYY)
    let options = { day: '2-digit', month: 'long', year: 'numeric' };
    let istDate = utcDate.toLocaleDateString('en-US', options);

    return istDate;
}
