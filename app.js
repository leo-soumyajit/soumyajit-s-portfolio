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

function scrollToBottom() {
  const terminalBody = document.getElementById('terminal-body');
  terminalBody.scrollTop = terminalBody.scrollHeight;
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
  terminalOutput.innerHTML += `
    <div>
      <strong style="color:#00bfff;">Soumyajit Banerjee - Java Spring Boot Developer</strong><br>
      <hr style="border: 0; border-top: 1px solid #555; margin: 4px 0;">
      I'm a Spring Boot backend developer with a strong foundation in Java and microservices architecture. 
      I build scalable, efficient APIs and backend systems, with hands-on experience in monitoring and observability using Monithiloc. 
      I'm currently a 3rd-year Information Technology student at Haldia Institute of Technology. 
      Passionate about clean code, system design, and backend optimization.
    </div>
  `;
  scrollToBottom();

  break;


  case 'projects':
  scrollToSection('projects');
  terminalOutput.innerHTML += `
    <div>
      <strong style="color:#00bfff;">Featured Projects:</strong><br>
      <span style="color:#00bfff;">━━━━━━━━━━━━━━━━━</span><br><br>

      • <strong>HotelBooking and Management Backend</strong>: <span>Built with Spring Boot — user auth, dynamic pricing, admin dashboard, and payment integration.</span><br>
      • <strong>HealthHub</strong>: <span>AI-powered meal planner backend with smart diet suggestions and nutrition tracking.</span><br>
      • <strong>E-Grocery Store Management System (Backend)</strong>: <span>Robust Spring Boot backend with auth, cart/order handling, and invoice/email integration.</span><br>
      • <strong>Newsly</strong>: <span>Social media-style backend — posts, comments, likes, with Spring Security and MySQL.</span>
    </div>
  `;
  scrollToBottom();

  break;



    case 'education':
  scrollToSection('education');
  terminalOutput.innerHTML += `
    <div>
      <strong style="color:#00bfff;">Education:</strong><br>
      <span style="color:#00bfff;">━━━━━━━━━━━━</span><br><br>

      • <strong>Haldia Institute of Technology</strong>, Haldia<br>
      B.Tech in Information Technology — CGPA: 9.05<br>
      Expected Graduation: May 2027<br><br>

      • <strong>Deulia Hiraram High School</strong>, Kolaghat<br>
      Higher Secondary — 83% (2023)
    </div>
  `;
  scrollToBottom();

  break;





    case 'skills':
  scrollToSection('skills');
  terminalOutput.innerHTML += `
    <div>
      <strong style="color:#00bfff;">Technical Skills:</strong><br>
      <span style="color:#00bfff;">━━━━━━━━━━━━━━━━</span><br><br>

      • <strong>Programming:</strong> Java, Java Script, Kotlin, Python, HTML, CSS3, C<br>
      • <strong>Backend Frameworks:</strong> Spring Boot<br>
      • <strong>Database:</strong> MySQL, PostgreSQL, Redis<br>
      • <strong>DevOps:</strong> Docker, Kubernetes, AWS, Git, Linux, Bash<br>
      • <strong>Operating Systems:</strong> Windows, Linux (Red Hat)<br>
      • <strong>IDE & Tools:</strong> Kafka, Android Studio, VS Code, IntelliJ IDEA, PyCharm, Postman, Swagger, GitHub
    </div>
  `;


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

      scrollToBottom();
      break;

    case 'exit':
      terminalOverlay.classList.remove('show');
      terminalOutput.innerHTML += `<div> Goodbye! 👋</div>`;
      terminalWrapper.classList.add('hidden');
      break;

      

   case 'clear':
    terminalOutput.innerHTML = '';
    break;


    default:
      terminalOutput.innerHTML += `<div>Command not found: ${command} Type 'help' for available commands.</div>`;
      scrollToBottom();
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

let commandHistory = [];
let historyIndex = -1;

terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = terminalInput.value.trim();
    if (command !== '') {
      commandHistory.push(command);
      historyIndex = -1; // Reset history index after new command
      handleCommand(command);
      terminalInput.value = '';
    }
  }

  // Navigate command history
  else if (e.key === 'ArrowUp') {
    if (commandHistory.length > 0) {
      if (historyIndex === -1) {
        historyIndex = commandHistory.length - 1;
      } else if (historyIndex > 0) {
        historyIndex--;
      }
      terminalInput.value = commandHistory[historyIndex];
    }
    e.preventDefault();
  }

  else if (e.key === 'ArrowDown') {
    if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
      historyIndex++;
      terminalInput.value = commandHistory[historyIndex];
    } else {
      terminalInput.value = '';
      historyIndex = -1;
    }
    e.preventDefault();
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
