const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if(email && pass){
      localStorage.setItem('isLoggedIn','true');
      localStorage.setItem('userEmail', email);
      window.location.href = 'dashboard.html';
    } else { 
      alert('Email aur Password bharo'); 
    }
  });
}

if(window.location.pathname.includes('dashboard.html')){
  if(localStorage.getItem('isLoggedIn') !== 'true'){
    window.location.href = 'login.html';
  }
  const el = document.getElementById('userEmail');
  if(el) el.innerText = localStorage.getItem('userEmail');
}

function logout(){
  localStorage.clear();
  window.location.href = 'login.html';
}