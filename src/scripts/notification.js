!(function() {
  var a = document.getElementById('gitmoji-list');
  a.addEventListener('click', function(b) {
    if (b.target && b.target.matches('.gitmoji')) {
      b.target.classList.add('active'), b.target.classList.remove('active');
      var c = new NotificationFx({
        message: '<p>Hey! Gitmoji copied to the clipboard 😜</p>',
        layout: 'growl',
        effect: 'scale',
        type: 'notice',
        onClose: function() {
          a.disabled = !1;
        }
      });
      c.show(), (this.disabled = !0);
    }
  });
})();
