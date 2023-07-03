function mapToOrder(number) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
  
    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return number + 'st';
    } else if (lastDigit === 2 && lastTwoDigits !== 12) {
      return number + 'nd';
    } else if (lastDigit === 3 && lastTwoDigits !== 13) {
      return number + 'rd';
    } else {
      return number + 'th';
    }
  }