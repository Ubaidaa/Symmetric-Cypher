document.getElementById('encryption-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var inputText = document.getElementById('encryption-text-input').value;
    var key = document.getElementById('encryption-key-input').value;
    
    var encryptedText = symmetricCipher(inputText, key);
    
    document.getElementById('encryption-output').textContent = encryptedText;
  });
  
  document.getElementById('decryption-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var inputText = document.getElementById('decryption-text-input').value;
    var key = document.getElementById('decryption-key-input').value;
    
    var decryptedText = symmetricCipher(inputText, key);
    
    document.getElementById('decryption-output').textContent = decryptedText;
  });
  
  function symmetricCipher(text, key) {
    // Your symmetric cipher algorithm implementation goes here
    // Replace this placeholder code with your own implementation
    
    var result = '';
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      var shiftedCode = charCode + key.length;
      result += String.fromCharCode(shiftedCode);
    }
    return result;
  }
  