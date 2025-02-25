 // Получаем элементы бургер-меню и навигации
 const burgerMenu = document.getElementById('burger-menu');
 const navMenu = document.getElementById('nav-menu');

 // обработчик клика на бургер-меню
 burgerMenu.addEventListener('click', () => {
     navMenu.classList.toggle('open'); // Переключаем класс 'open' для открытия/закрытия меню
 });



//Скрипт для маленького слайдера

 let currentIndex = 0;
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.slider-item').length;

    function moveToSlide(index) {
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveToSlide(currentIndex);
    }

    setInterval(autoSlide, 3000); // Автопереключение каждые 3 секунды


//Скрипь для чата

    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const suggestions = document.getElementById('suggestions');

    
    const responses = [
      { topic: 'работа', response: 'Вопросы по работе? Могу помочь с планированием задач, улучшением эффективности или разъяснением процессов.' },
      { topic: 'цены', response: 'Цены на наши услуги зависят от множества факторов. Уточните, что вас интересует, и я рассчитаю стоимость.' },
      { topic: 'доставка', response: 'Доставка осуществляется по всему миру, сроки зависят от вашего местоположения и выбранного способа.' },
      { topic: 'контакт', response: 'Вы можете связаться с нами через электронную почту, телефон, или оставить заявку на сайте.' },
      { topic: 'гарантии', response: 'Мы предоставляем гарантии на наши товары. Условия и срок гарантии зависят от типа продукта.' },
      { topic: 'общие', response: 'Я здесь, чтобы помочь! Чем могу быть полезен? Расскажите, что вас интересует.' },
      { topic: 'как дела?', response: 'Спасибо, что спросили! Все отлично, готов помочь вам.' },
      { topic: 'мем', response: 'VENOOOMMMM!!' },
      { topic: 'программирование', response: 'Я могу помочь с различными языками программирования, такими как JavaScript, Python, C++, HTML/CSS и многими другими.' },
      { topic: 'функции', response: 'Функции позволяют повторно использовать код, повышая его удобство и читаемость. Хотите пример?' },
      { topic: 'алгоритмы', response: 'Алгоритмы — это пошаговые инструкции для решения задач. Я могу объяснить различные алгоритмы, такие как сортировки или поиск.' },
      { topic: 'курсы', response: 'Мы проводим различные курсы по программированию и другим технологиям. Хотите узнать подробности?' },
      { topic: 'фото', response: 'Если вам нужно сделать фотографию, лучше всего использовать камеру с высоким разрешением. Что именно вас интересует?' },
      { topic: 'здоровье', response: 'Забота о здоровье — это важно! Если у вас есть вопросы по здоровью или физической активности, я постараюсь помочь.' },
      { topic: 'погода', response: 'Для получения точной информации о погоде, пожалуйста, уточните ваш город или регион.' },
      { topic: 'сегодня', response: 'Сегодня отличный день для изучения чего-то нового! Чем могу помочь?' },
      { topic: 'кино', response: 'Какие фильмы вам нравятся? Я могу порекомендовать отличные фильмы на основе вашего вкуса.' },
      { topic: 'музыка', response: 'Какая музыка вам нравится? Могу порекомендовать что-то новое на основе ваших предпочтений.' },
      { topic: 'спорт', response: 'Любите спорт? Я могу рассказать о различных видах спорта или помочь с тренировками.' },
      { topic: 'новости', response: 'Я могу помочь с самыми актуальными новостями! Уточните, в какой области вас интересуют новости.' },
      { topic: 'путешествия', response: 'Где бы вы хотели побывать? Я могу помочь с выбором направления или предложить интересные места для путешествий.' },
      { topic: 'едa', response: 'Что вы предпочитаете: домашнюю кухню или хотите попробовать что-то новенькое? Я могу предложить рецепты или ресторанные рекомендации.' },
      { topic: 'вопросы', response: 'Я всегда готов помочь вам с любыми вопросами. Задайте свой вопрос, и я постараюсь ответить.' },
      { topic: 'технологии', response: 'Технологии меняют мир! Хотите узнать больше о последних новинках в области технологий?' },
      { topic: 'искусственный интеллект', response: 'Искусственный интеллект — это захватывающее направление! Хотите узнать больше о его применении и развитии?' },
      { topic: 'финансы', response: 'Вопросы по финансам? Могу помочь с базовыми принципами, инвестициями или объяснением экономических процессов.' },
      { topic: 'психология', response: 'Психология — это важная наука. Если вас интересуют советы по саморазвитию или поддержке, я готов помочь.' },
      { topic: 'игры', response: 'Какие игры вам нравятся? Я могу порекомендовать новые или помочь с решением игровых проблем.' },
      { topic: 'кухня', response: 'Любите готовить? Могу предложить интересные рецепты и советы по приготовлению различных блюд.' },
      { topic: 'праздники', response: 'Планируете праздник? Я могу помочь с идеями, декором и советами для организации незабываемого события.' },
      { topic: 'любовь', response: 'Любовь — это всегда важно. Если вам нужно обсудить отношения или получить советы, я готов помочь.' },
      { topic: 'обучение', response: 'Обучение — это ключ к успеху! Я могу предложить курсы, материалы или помочь с учебными задачами.' },

      // Словарный запас IT
      { topic: 'frontend', response: 'Frontend-разработка включает все, что связано с созданием интерфейса для пользователей: HTML, CSS, JavaScript и фреймворки, такие как React, Angular и Vue.' },
      { topic: 'backend', response: 'Backend-разработка отвечает за серверную часть приложений. Языки, такие как Node.js, Python, Ruby, и фреймворки, как Django, Flask, или Express, часто используются для backend-разработки.' },
      { topic: 'API', response: 'API (Application Programming Interface) позволяет приложениям обмениваться данными. Например, REST и GraphQL — это два популярных стиля API.' },
      { topic: 'базы данных', response: 'Базы данных — это системы для хранения и управления данными. Примеры: MySQL, PostgreSQL, MongoDB, Redis.' },
      { topic: 'разработка мобильных приложений', response: 'Мобильная разработка включает создание приложений для мобильных устройств с использованием языков, таких как Swift для iOS и Kotlin для Android.' },
      { topic: 'DevOps', response: 'DevOps — это практики для улучшения взаимодействия между разработчиками и операционными командами, включая автоматизацию процессов и настройку инфраструктуры.' },
      { topic: 'cloud', response: 'Облачные технологии позволяют хранить данные и запускать приложения на удаленных серверах. Пример облачных платформ: AWS, Azure, Google Cloud.' },
      { topic: 'CI/CD', response: 'CI/CD (Continuous Integration/Continuous Delivery) — это подходы для автоматизации тестирования и развертывания приложений.' },
      { topic: 'версийный контроль', response: 'Git — это система контроля версий, которая позволяет отслеживать изменения в коде и работать над проектом командой.' },
      { topic: 'кодирование', response: 'Кодирование — это процесс написания программного кода с использованием различных языков программирования, например, Python, JavaScript, или C++.' },
      { topic: 'системы управления проектами', response: 'Системы управления проектами, такие как Jira или Trello, помогают организовывать задачи и следить за прогрессом в команде.' },
      { topic: 'тестирование', response: 'Тестирование программного обеспечения важно для обеспечения качества. Это может быть функциональное тестирование, юнит-тесты или автоматизированные тесты.' }
    ];

    // Функция для добавления приветственного сообщения при открытии чата
    function addWelcomeMessage() {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('message', 'manager');
        welcomeMessage.textContent = 'Привет! Я чат-менеджер компании Web Crafters. Вот, что я могу предложить:\n\n- Работа\n- Цены\n- Доставка\n- Контакт\n- Гарантии\n- Программирование\n- Алгоритмы\n- Системы управления проектами\n\nПишите, если у вас есть вопросы!';
        chatMessages.appendChild(welcomeMessage);

        // Прокручиваем чат до последнего сообщения
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Открытие/закрытие чата при нажатии на кнопку
    chatButton.addEventListener('click', function() {
      if (chatModal.style.display === 'none' || chatModal.style.display === '') {
        chatModal.style.display = 'block'; // Показываем чат
        setTimeout(() => chatModal.classList.add('open'), 50); // Плавное открытие
        suggestions.style.display = 'block'; // Показываем подсказки

        // Добавляем приветственное сообщение при открытии чата
        addWelcomeMessage();
      } else {
        chatModal.classList.remove('open');
        setTimeout(() => chatModal.style.display = 'none', 300); // Плавное закрытие
        suggestions.style.display = 'none'; // Скрываем подсказки при закрытии чата
      }
    });

    // Функция для поиска подходящего ответа
    function getResponse(message) {
      const lowerCaseMessage = message.toLowerCase();
      
      // Пытаемся найти ключевую тему в сообщении
      for (let i = 0; i < responses.length; i++) {
        if (lowerCaseMessage.includes(responses[i].topic)) {
          return responses[i].response;
        }
      }

      // Если не нашли соответствующую тему, возвращаем общий ответ
      return responses.find(r => r.topic === 'общие').response;
    }

    // Функция для установки текста в поле ввода по подсказке
    function setInput(text) {
      chatInput.value = text;
      chatInput.focus();
    }

    // Отправка сообщения
    sendButton.addEventListener('click', function() {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
        // Добавляем сообщение пользователя в окно чата
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = userMessage;
        chatMessages.appendChild(messageElement);
        chatInput.value = ''; // Очищаем поле ввода

        // Прокручиваем чат до последнего сообщения
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Генерация ответа нейросети
        const responseMessage = getResponse(userMessage);
        setTimeout(function() {
          const messageElement = document.createElement('div');
          messageElement.classList.add('message', 'manager');
          messageElement.textContent = responseMessage;
          chatMessages.appendChild(messageElement);

          // Прокручиваем чат до последнего сообщения
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
      }
    });

    // Изначально скрываем чат
    chatModal.style.display = 'none';




//скрипт для скролла

    const scrollLink = document.querySelector('.scroll-down-link');
    
           
    scrollLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.scrollTo({
            top: document.body.scrollHeight, 
            behavior: 'smooth' 
        });
    });


//скрипт для footer 

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                footer.style.transform = "translateY(0)";
                footer.style.opacity = "1";
            }
        },
        { threshold: 0.1 }
    );
    observer.observe(footer);
});


//Скрипт для подсчетного окна в блоке чеклист

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("customModal");
    const closeModal = document.getElementById("closeModal");
    const form = document.getElementById("projectForm");
    
    // Закрыть модальное окно
    closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    });
    
    // Открыть модальное окно (Пример: добавить слушатель на кнопку)
    document.querySelector(".custom-download-btn").addEventListener("click", () => {
    modal.style.display = "block";
    });
    
    // Обработка отправки формы
    form.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    // Сбор данных из формы
    const projectType = document.getElementById("projectType").value;
    const projectComplexity = document.getElementById("projectComplexity").value;
    const hours = parseInt(document.getElementById("hours").value, 10);
    const email = document.getElementById("email").value;
    
    // Примерные ставки (можно заменить на реальные)
    const rates = {
        website: 1000,
        app: 1500,
        design: 800,
    };
    const complexityMultiplier = {
        low: 1,
        medium: 1.5,
        high: 2,
    };
    
    // Расчёт стоимости
    const baseRate = rates[projectType];
    const multiplier = complexityMultiplier[projectComplexity];
    const totalCost = baseRate * multiplier * hours;
    
    // Отправка данных на сервер
    const response = await fetch("https://your-server-endpoint/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            subject: "Расчёт стоимости проекта",
            message: `
                Тип проекта: ${projectType}
                Сложность: ${projectComplexity}
                Часы: ${hours}
                Общая стоимость: ${totalCost} рублей
            `,
        }),
    });
    
    // Проверка ответа
    if (response.ok) {
        alert("Рассчёт отправлен на ваш Email!");
    } else {
        alert("Ошибка при отправке расчёта. Попробуйте снова.");
    }
    
    // Закрыть модальное окно
    modal.style.display = "none";
    });
    });


    function openCustomModal() {
        document.getElementById("customProjectModal").style.display = "block";
        }
        
        function closeCustomModal() {
        document.getElementById("customProjectModal").style.display = "none";
        }
        
        window.onclick = function(event) {
        const modal = document.getElementById("customProjectModal");
        if (event.target == modal) {
        modal.style.display = "none";
        }
        };


//скрипт для счетчика времени 

// Функция для форматирования времени
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
    }
    
    // Запуск таймера для всех элементов
    function startTimers() {
    const timers = document.querySelectorAll('.timer'); // Получаем все элементы с классом "timer"
    timers.forEach((timer) => {
    let time = parseInt(timer.getAttribute('data-time'), 10); // Получаем время из атрибута data-time
    setInterval(() => {
        if (time <= 0) {
            time = parseInt(timer.getAttribute('data-time'), 10); // Сбрасываем таймер на начальное значение
        } else {
            time--; // Уменьшаем время
        }
        timer.textContent = formatTime(time); // Обновляем текст
    }, 1000);
    });
    }
    
    
    startTimers();


//Скрипт для описания языков 

const skillsData = {
    html: {
    title: "HTML",
    description: "HTML — это стандартный язык разметки для документов, предназначенных для просмотра в веб-браузере.",
    image: "html 1.png"
    },
    figma: {
    title: "Figma",
    description: "Figma — это популярный инструмент для дизайна интерфейсов и прототипирования.",
    image: "figma 1.png"
    },
    css: {
    title: "CSS",
    description: "CSS — это язык стилевых таблиц, который используется для описания внешнего вида документа, написанного на HTML.",
    image: "css 1.png"
    },
    javascript: {
    title: "JavaScript",
    description: "JavaScript — это язык программирования, который используется для создания динамичных веб-страниц.",
    image: "js-file 1.png"
    }
    };
    
    
    const skillIcons = document.querySelectorAll('.skill-icon');
    const popup = document.getElementById('popup');
    const popupClose = document.getElementById('popup-close');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupImg = document.getElementById('popup-img');
    
    
    skillIcons.forEach(icon => {
    icon.addEventListener('click', () => {
    const skill = icon.getAttribute('data-skill');
    const skillData = skillsData[skill];
    
    
    popupTitle.textContent = skillData.title;
    popupDescription.textContent = skillData.description;
    popupImg.src = skillData.image;
    popupImg.alt = skillData.title;
    
    
    popup.style.display = 'flex';
    });
    });
    
    
    popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    });
    
    
    window.addEventListener('click', (e) => {
    if (e.target === popup) {
    popup.style.display = 'none';
    }
    });