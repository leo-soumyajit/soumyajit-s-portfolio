const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const hoverSign = document.querySelector(".hover-sign");

// sidebar elements
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videoList = [video1, video2, video3];
videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})

menu.addEventListener("click", function(){
    sidebar.classList.remove("close-sidebar")
    sidebar.classList.add("open-sidebar")
})

close.addEventListener("click", function(){
    sidebar.classList.remove("open-sidebar")
    sidebar.classList.add("close-sidebar")
})



// setTimeout(function() {
//     location.reload();
// }, 60000); // 60000 ms = 1 minute
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
  });
  


// Terminal code here
const terminalOverlay = document.getElementById('terminal-overlay');
const terminalWrapper = document.getElementById('terminal-wrapper');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const openBtn = document.getElementById('open-terminal');

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function handleCommand(cmd) {
  const args = cmd.trim().toLowerCase().split(" ");
  const command = args[0];
  const rest = args.slice(1);

  terminalOutput.innerHTML += `<div><span class="prompt">soumyajit@portfolio:~$</span> ${cmd}</div>`;

  switch (command) {
    case 'help':
      terminalOutput.innerHTML += `
        <div>Available commands:</div>
        <div>about - Go to About section</div>
        <div>projects - Go to Projects section</div>
        <div>education - Go to Education section</div>
        <div>skills - Go to Skills section</div>
        <div>theme light | dark - Switch terminal theme</div>
        <div>clear - Clear the terminal</div>
        <div>exit - Close the terminal</div>
      `;
      break;

    case 'about':
      scrollToSection('info');
      break;

    case 'projects':
      scrollToSection('projects');
      break;

    case 'education':
      scrollToSection('education');
      break;

    case 'skills':
      scrollToSection('skills');
      break;

    case 'theme':
      if (rest[0] === 'light') {
        terminalWrapper.classList.add('light');
        terminalOutput.innerHTML += `<div>Switched to light theme.</div>`;
      } else if (rest[0] === 'dark') {
        terminalWrapper.classList.remove('light');
        terminalOutput.innerHTML += `<div>Switched to dark theme.</div>`;
      } else {
        terminalOutput.innerHTML += `<div>Usage: theme light | dark</div>`;
      }
      break;

    case 'exit':
      terminalOverlay.classList.remove('show');
      terminalWrapper.classList.add('hidden');
      break;

   case 'clear':
    terminalOutput.innerHTML = '';
    break;


    default:
      terminalOutput.innerHTML += `<div>Command not found: ${command} Type 'help' for available commands.</div>`;
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleCommand(terminalInput.value);
    terminalInput.value = '';
  }
});

openBtn.addEventListener('click', () => {
  terminalOverlay.classList.add('show');
  terminalWrapper.classList.remove('hidden');
  terminalInput.focus();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && terminalOverlay.classList.contains('show')) {
    terminalOverlay.classList.remove('show');
    terminalWrapper.classList.add('hidden');
  }
});
