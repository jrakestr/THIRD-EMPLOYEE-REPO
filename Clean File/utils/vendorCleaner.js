const TRANSACTION_WORDS = [
    'PURCHASE', 'PAYMENT', 'PMT', 'TXN', 'TRANSACTION', 'POS',
    'DEBIT', 'CREDIT', 'ACH', 'ATM', 'FEE', 'INT', 'AUTOPAY',
    'REWARD', 'ANNUAL', 'THROUGH', 'MOBILE', 'APP', 'CHARGE',
    'INTEREST', 'ON', 'LAS', 'VEGA', 'VEGAS', 'NV', 'CA', 'TX',
    'INC', 'G'
  ];
  
  function cleanVendorName(name) {
    if (!name) return '';
    
    // Convert to uppercase for consistency
    let cleaned = name.toUpperCase();
    
    // Remove state abbreviations and locations
    cleaned = cleaned.replace(/\b[A-Z]{2}\b\s*$/, '');
    
    // Remove common transaction words
    TRANSACTION_WORDS.forEach(word => {
      cleaned = cleaned.replace(new RegExp(`\\b${word}\\b`, 'g'), '');
    });
    
    // Remove special characters, numbers and asterisks
    cleaned = cleaned.replace(/[^A-Z\s]/g, '');
    
    // Remove numbered references (like #10991)
    cleaned = cleaned.replace(/#\d+/g, '');
    
    // Remove directional indicators (like D for debit)
    cleaned = cleaned.replace(/\s+[D]\s*$/i, '');
    
    // Remove extra spaces and trim
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    
    return cleaned;
  }
  
  module.exports = {
    cleanVendorName,
    TRANSACTION_WORDS
  };