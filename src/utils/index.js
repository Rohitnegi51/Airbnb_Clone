/**
 * Helper utility functions for the recreation project.
 */

/**
 * Formats a numeric value into Indian Rupee (INR) currency format.
 * @param {number} value - The number to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (value) => {
  if (isNaN(value)) return '';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Calculates the number of nights between two dates.
 * @param {string|Date} checkIn - The check-in date.
 * @param {string|Date} checkOut - The checkout date.
 * @returns {number} The count of nights.
 */
export const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Truncates a string to a specified length and appends an ellipsis.
 * @param {string} text - The input text.
 * @param {number} limit - Character limit.
 * @returns {string} The truncated string.
 */
export const truncateText = (text, limit = 150) => {
  if (!text || text.length <= limit) return text;
  return text.slice(0, limit) + '...';
};
