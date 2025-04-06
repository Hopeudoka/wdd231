function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        firstName: params.get('firstName') || 'N/A',
        lastName: params.get('lastName') || 'N/A',
        email: params.get('email') || 'N/A',
        mobile: params.get('phone') || 'N/A',
        business: params.get('orgTitle') || 'N/A',
        formLoadedAt: params.get('formLoadedAt') || 'N/A'
    };
}


const data = getQueryParams();
document.getElementById('firstName').textContent = data.firstName;
document.getElementById('lastName').textContent = data.lastName;
document.getElementById('email').textContent = data.email;
document.getElementById('phone').textContent = data.mobile;
document.getElementById('orgTitle').textContent = data.business;
document.getElementById('formLoadedAt').textContent = data.formLoadedAt;


const formLoadedAt = new Date().toLocaleString(); 
document.getElementById('formLoadedAt').textContent = formLoadedAt;