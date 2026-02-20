# StarBucks+ — Проектная документация

## Обзор проекта

Адаптивный лендинг кафе StarBucks+, реализованный на React 19 + Vite 7.
Дизайн: тёмная тема (`#1c1d1e`), зелёные акценты (`#3d7a3d` / `#4CAF50`), 8 секций (Navbar → Footer).

---

## Стек

- **React 19** + **Vite 7**
- **CSS Modules** — scoped-стили, без UI-библиотек
- **Montserrat** (Google Fonts, веса 400/500/600/700/800) — подключён в `index.html`
- SVG-логотип импортируется как URL (`import logoSrc from '...'`) — **vite-plugin-svgr не нужен**

---

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production-сборка
npm run preview  # preview после build
```

---

## Реальная структура `src/assets/`

> ⚠️ Все изображения находятся **плоско** в `src/assets/images/` — вложенных папок нет.

```
src/assets/
├── logo.svg                                          ← логотип StarBucks+
│
├── icons/
│   ├── Group 88.svg                                  ← иконка Instagram
│   └── Mask group.svg                                ← иконка телефона
│
└── images/
    ├── hero-cup@2x.webp                              ← чашка (Hero)
    ├── hero-vector.png                               ← декоративные волны (Hero)
    │
    ├── 10 1.png                                      ← иконка Tasty  (сердце)
    ├── 21 1.png                                      ← иконка Fast   (ракета)
    ├── 30 1.png                                      ← иконка Available (планшет)
    ├── wehave.png                                    ← изображение бейджа WE HAVE
    │
    ├── 1.webp                                        ← фото интерьера кафе (About)
    ├── 2.webp                                        ← фото Cooking Process (About)
    ├── about-vector.png                              ← декоративные волны (About)
    │
    ├── Rectangle 9.png                               ← фон карточки события 1
    ├── Rectangle 10.png                              ← фон карточки события 2
    ├── Rectangle 11.png                              ← фон карточки события 3
    ├── Rectangle 12.png                              ← фон карточки события 4
    │
    ├── photo-1568036193587-84226a9c5a1b 4.png        ← фото для карточки продукта
    ├── usama-akram-zCDAYROwLC0-unsplash 2.png        ← фото для карточки продукта
    └── alex-haney-CAhjZmVk5H4-unsplash 1.png        ← фото витрины (Contacts)
```

### Импорт ассетов в компонентах

```jsx
// Логотип (URL-импорт, без SVGR)
import logoSrc from '../../assets/logo.svg';

// Иконки из icons/
import instagramIcon from '../../assets/icons/Group 88.svg';
import phoneIcon     from '../../assets/icons/Mask group.svg';

// Hero
import heroCupSrc    from '../../assets/images/hero-cup@2x.webp';
import heroVector    from '../../assets/images/hero-vector.png';

// Features
import tastyIcon     from '../../assets/images/10 1.png';
import fastIcon      from '../../assets/images/21 1.png';
import availableIcon from '../../assets/images/30 1.png';
import weHaveImg     from '../../assets/images/wehave.png';

// About
import cafeImg       from '../../assets/images/1.webp';
import cookingImg    from '../../assets/images/2.webp';
import aboutVector   from '../../assets/images/about-vector.png';

// Products
import prodImg1 from '../../assets/images/hero-cup@2x.webp';
import prodImg2 from '../../assets/images/photo-1568036193587-84226a9c5a1b 4.png';
import prodImg3 from '../../assets/images/usama-akram-zCDAYROwLC0-unsplash 2.png';

// Events (фоны карточек)
import rect9  from '../../assets/images/Rectangle 9.png';
import rect10 from '../../assets/images/Rectangle 10.png';
import rect11 from '../../assets/images/Rectangle 11.png';
import rect12 from '../../assets/images/Rectangle 12.png';

// Contacts
import storefrontImg from '../../assets/images/alex-haney-CAhjZmVk5H4-unsplash 1.png';
```

---

## Структура `src/` (полная)

```
src/
├── assets/                               ← см. раздел выше
│
├── data/
│   ├── products.js                       ← 5 продуктов: { id, name, description, price, volume, image }
│   └── events.js                         ← 5 событий:  { id, title, image, size: 'normal' | 'wide' }
│
├── hooks/
│   └── useScrollLock.js                  ← блокировка body scroll при открытом мобильном меню
│
├── components/
│   ├── ui/
│   │   ├── Button/                       ← variant: 'filled' | 'outline'
│   │   ├── HexBadge/                     ← clip-path шестиугольник "WE HAVE"
│   │   └── WavyLines/                    ← обёртка для декоративных волн (abs. position)
│   │
│   ├── layout/
│   │   ├── Navbar/                       ← логотип, nav-ссылки, hamburger + useScrollLock
│   │   └── Footer/                       ← лого, 5 колонок навигации, телефон
│   │
│   └── sections/
│       ├── Hero/                         ← заголовок, кнопки, статистика, чашка, 45%
│       ├── Features/                     ← белая карточка, WE HAVE, 3 фичи
│       ├── About/                        ← "We make delicious", фото кафе + Cooking Process
│       ├── Products/                     ← горизонтальный скролл (mobile) / grid (desktop)
│       ├── Events/                       ← CSS Grid 2×N, wide-карточки span 2
│       └── Contacts/                     ← @supercoffee, телефон, фото витрины
│
├── App.jsx                               ← сборка: Navbar + 6 секций + Footer
├── App.css                               ← пустой (не используется)
├── index.css                             ← CSS-переменные + reset
└── main.jsx                              ← точка входа
```

---

## Прогресс реализации

| Компонент       | Статус         |
|-----------------|----------------|
| `index.css`     | ✅ готово      |
| `products.js`   | ⏳ ожидает     |
| `events.js`     | ⏳ ожидает     |
| `useScrollLock` | ⏳ ожидает     |
| `Button`        | ⏳ ожидает     |
| `HexBadge`      | ⏳ ожидает     |
| `WavyLines`     | ⏳ ожидает     |
| `Navbar`        | ⏳ ожидает     |
| `Footer`        | ⏳ ожидает     |
| `Hero`          | ⏳ ожидает     |
| `Features`      | ⏳ ожидает     |
| `About`         | ⏳ ожидает     |
| `Products`      | ⏳ ожидает     |
| `Events`        | ⏳ ожидает     |
| `Contacts`      | ⏳ ожидает     |

---

## Соглашения

### CSS
- Все цвета — через CSS-переменные из `index.css`, не хардкодить
- **Mobile-first:** base → `@media (min-width: 768px)` → `@media (min-width: 1024px)`
- CSS Modules для компонентов; `index.css` — только токены и reset
- Каждый компонент: `ComponentName/ComponentName.jsx` + `ComponentName.module.css`
- Исключение: в `Features` секции текст на светлом фоне `--color-bg-light` использует тёмные хардкод-цвета (т.к. `--color-text` = белый)

### Данные
- Products и Events — только из `src/data/`, не инлайнить в JSX
- Изображения для данных импортируются в самом файле данных (`products.js`, `events.js`), а не в компонентах

### SVG
- Импортировать SVG как URL, не как ReactComponent — SVGR не установлен и не нужен

---

## Цветовая палитра

| CSS-переменная        | Значение                  | Применение              |
|-----------------------|---------------------------|-------------------------|
| `--color-bg`          | `#1c1d1e`                 | Основной фон            |
| `--color-bg-card`     | `#161b22`                 | Фон тёмных карточек     |
| `--color-bg-light`    | `#f8f9fa`                 | Features (светлый фон)  |
| `--color-green`       | `#3d7a3d`                 | Основной зелёный        |
| `--color-green-light` | `#4CAF50`                 | Акцентный зелёный       |
| `--color-text`        | `#ffffff`                 | Основной текст          |
| `--color-text-muted`  | `rgba(255,255,255,0.65)`  | Вторичный текст         |

---

## Брейкпоинты

| Название  | Min-width | Устройство            |
|-----------|-----------|-----------------------|
| base      | 0px       | Мобильный (≥375px)    |
| tablet    | 768px     | Планшет               |
| desktop   | 1024px    | Ноутбук / Desktop     |

---

## Секции (порядок в DOM)

| # | Компонент    | Ключевые элементы                                           | Ассеты                                    |
|---|--------------|-------------------------------------------------------------|-------------------------------------------|
| 1 | **Navbar**   | Логотип, Home/Select/Shop, hamburger → X анимация           | `logo.svg`                                |
| 2 | **Hero**     | Заголовок, CTA-кнопки, статистика (9k+/2k+/28+), чашка 45% | `hero-cup@2x.webp`, `hero-vector.png`     |
| 3 | **Features** | Белая карточка: Tasty / Fast / Available + WE HAVE          | `10 1.png`, `21 1.png`, `30 1.png`, `wehave.png` |
| 4 | **About**    | Фото кафе + "We make delicious" + Cooking Process           | `1.webp`, `2.webp`, `about-vector.png`    |
| 5 | **Products** | Горизонтальный скролл (mobile) / Grid (desktop)             | `data/products.js`                        |
| 6 | **Events**   | CSS Grid 2-колонки, wide-карточки span 2                    | `data/events.js`, `Rectangle 9-12.png`    |
| 7 | **Contacts** | @supercoffee, телефон, фото витрины + WE HAVE               | `alex-haney-...1.png`, `icons/Group 88.svg` |
| 8 | **Footer**   | Лого, 5 колонок nav, телефон                                | `logo.svg`                                |

---

## Ключевые CSS-техники

### HexBadge — `clip-path`
```css
.hex {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: var(--color-green);
}
```

### Horizontal Scroll + CSS Snap (Products, mobile)
```css
.scrollContainer {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.card { flex: 0 0 260px; scroll-snap-align: start; }

@media (min-width: 1024px) {
  .scrollContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    overflow-x: visible;
  }
  .card { flex: none; }
}
```

### Events Grid — wide-карточки
```css
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .wide { grid-column: span 2; }
}
```

### Mobile Hamburger → X анимация
```css
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
```

### Декоративные блюр-блобы (Hero)
```css
.hero::before, .hero::after {
  content: '';
  position: absolute;
  width: 582px; height: 582px;
  border-radius: 50%;
  background: rgba(217, 217, 217, 0.20);
  filter: blur(157.625px);
  pointer-events: none;
}
```

### useScrollLock — без прыжка страницы
```js
// При блокировке: сохраняем scrollY через position:fixed + top:-scrollY
// При разблокировке: восстанавливаем позицию через window.scrollTo
```
