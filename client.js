// Inicializa el Power-Up y define sus capacidades
window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      text: 'Hola desde mi Power-Up',
      callback: function(t) {
        alert('¡Tu Power-Up de Trello funciona correctamente! 🎉');
      }
    }];
  }
});
