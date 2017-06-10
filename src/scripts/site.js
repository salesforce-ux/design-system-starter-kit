var animData = {
    container: document.getElementById('ally-wire'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-219/SLDS-ICON-A11Y-NEW-IMPRO.json'
};

var anim = bodymovin.loadAnimation(animData);

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop;
  const header = document.querySelector('.site-landing--nav');
  const headerLockHeight = 1330 / window.devicePixelRatio;

  if (scrollTop > headerLockHeight) {
    header.classList.add('nav-locked')
  }
  else {
    header.classList.remove('nav-locked')
  }

})
