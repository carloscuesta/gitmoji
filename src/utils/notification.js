export const notify = (message: String, opts = {}): void => {
  const notification = new window.NotificationFx({
    layout: 'growl',
    effect: 'scale',
    type: 'notice',
    ttl: 2000,
    message,
    ...opts,
  })

  notification.show()
}
