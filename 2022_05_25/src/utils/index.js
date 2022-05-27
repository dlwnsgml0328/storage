// Include external scripts or styles as part of your content.
// These are utilities to dynamically add the external scripts & styles.

export const addExternalScripts = (arrScript, callback) => {
  // 외부 스크립트 코드 추가
  if (arrScript.length === 0) {
    if (callback) callback();
    return;
  } else {
    const url = arrScript[0];
    const includes = document.head.querySelectorAll('script');
    includes.forEach((link) => {
      if (link.src.indexOf(url) !== -1) {
        link.parentNode.removeChild(link); // Remove existing
      }
    });
    const script = document.createElement('script');
    script.onload = () => {
      addExternalScripts(arrScript.slice(1), callback);
    };
    script.src = url;
    document.head.appendChild(script);
  }
};

export const addExternalStyles = (arrStyle) => {
  if (arrStyle.length === 0) {
    return;
  } else {
    let includes = document.head.querySelectorAll('[data-my-css-link]');
    includes.forEach((link) => {
      link.parentNode.removeChild(link); //Remove existing
    });
    for (let i = 0; i <= arrStyle.length - 1; i++) {
      let url = arrStyle[i];
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.setAttribute('data-my-css-link', '');
      link.href = url;
      document.head.appendChild(link);
    }
  }
};

export const renderHtml = (html) => {
  let range = document.createRange();
  const wrapper = document.querySelector('.is-wrapper');
  wrapper.innerHTML = '';
  wrapper.appendChild(range.createContextualFragment(html)); // We use createContextualFragment so that embedded javascript code (code block) will be executed
};

export const renderStyles = (mainCss, sectionCss) => {
  // Cleanup previously added styles (if any)

  // Remove sectionCss
  let links = document.querySelectorAll('[data-name="contentstyle"]');
  links.forEach((link) => {
    link.parentNode.removeChild(link);
  });

  // Remove mainCss
  links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href').indexOf('basetype-') !== -1) {
      links[i].parentNode.removeChild(links[i]);
    }
  }

  if (mainCss)
    if (mainCss !== '') {
      document.head.insertAdjacentHTML('beforeend', mainCss); // add the style on the head
    }
  if (sectionCss)
    if (sectionCss !== '') {
      document.head.insertAdjacentHTML('beforeend', sectionCss); // add the style on the head
    }
};
