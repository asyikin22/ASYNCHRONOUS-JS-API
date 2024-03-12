const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=eatnLp6rL4zixCcOFbwcfVRHCyzJY7gp&s=dance',  {mode: 'cors'})
.then(res => res.json())
.then(res => img.src = res.data.images.original.url);
