// 다크모드 전환
function toggleDarkMode() {
  const body = document.body
  const button = document.getElementById('modeToggle')

  body.classList.toggle('dark-mode')

  if (body.classList.contains('dark-mode')) {
    button.textContent = '☀️ 라이트모드'
  } else {
    button.textContent = '🌙 다크모드'
  }
}

// 페이지 전환 효과
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.add('fade-out')
  })
})

// GitHub 프로젝트 불러오기 (index 페이지에서만 동작)
if (document.getElementById('repo-list')) {
  fetch('https://api.github.com/users/dlwpgur03/repos')
    .then((res) => res.json())
    .then((data) => {
      const list = document.createElement('ul')
      data.slice(0, 5).forEach((repo) => {
        const li = document.createElement('li')
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`
        list.appendChild(li)
      })
      document.getElementById('repo-list').appendChild(list)
    })
}

// 스크롤 애니메이션 효과
const sections = document.querySelectorAll('section')
window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add('visible')
    }
  })
})

// 팀원 hover 효과 (team 페이지에서만 적용)
document.querySelectorAll('.team-member').forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)'
    card.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)'
  })
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)'
    card.style.boxShadow = 'none'
  })
})

// 다크모드 버튼 이벤트 연결
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('modeToggle')
  if (button) {
    button.addEventListener('click', toggleDarkMode)
  }
})
