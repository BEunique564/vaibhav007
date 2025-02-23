$(document).ready(function() {
      // Toggle chatbox visibility
      $('.chatbot-icon').click(function() {
          $('#chatbox').toggle();
      });
  
      if (annyang) {
          // Define the commands
          var commands = {
              'hello': function() { addMessage('Hello! How can I assist you?'); },
              'open *page': function(page) { window.location.href = page + '.html'; },
              // Add more commands as needed
          };
  
          // Add the commands to annyang
          annyang.addCommands(commands);
  
          // Start listening
          annyang.start();
      }
  
      // Function to add a message to the chatbox
      function addMessage(message) {
          $('#chatbox').append('<p>' + message + '</p>');
      }
  });
  