addEventListener('mousemove',(dets)=>{
    // console.log("hello")

    document.querySelector('body').style.setProperty('--x',dets.clientX + 'px')
    document.querySelector('body').style.setProperty('--y',dets.clientY + 'px')
})