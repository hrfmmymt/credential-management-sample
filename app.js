document.getElementById('myForm').addEventListener('submit', event => {
  if (navigator.credentials) {
    event.preventDefault()

    const c = new PasswordCredential(event.target)
    const init = {
      method: 'POST',
      credentials: c
    }

    navigator.credentials.store(c)
  } else {
    alert('Your brouser does not support credential management')
  }
})

document.getElementById('useCred').addEventListener('click', () => {
  navigator.credentials.get({
    'password': true
  }).then(
    function(cred) {
      console.log(cred)
      if (cred) {
         alert('login as ' + cred.id)
      } else {
        alert('can not use credentials')
        return
      }
    }
  )
})
