(function() {
    var parent = document.getElementById("gitmoji-list");
    parent.addEventListener("click", function(e) {
		if(e.target && e.target.matches(".gitmoji")) {
			e.target.classList.add('active');
				e.target.classList.remove( 'active' );
				var notification = new NotificationFx({
					message : '<p>Hey! Gitmoji copied to the clipboard 😜</p>',
					layout : 'growl',
					effect : 'scale',
					type : 'notice',
					onClose : function() {
						parent.disabled = false;
					}
				});
				notification.show();
			this.disabled = true;
		}
    })
})();
