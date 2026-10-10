[...document.querySelectorAll('.video')].forEach(li =>
  fetch('/api/videos/' + li.dataset.id + '/estado', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.jwt
    },
    body: JSON.stringify({ estado: 'aceptado' })
  })
);
