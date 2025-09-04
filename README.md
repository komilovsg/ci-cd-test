# CI/CD Test Project

Современное Next.js 15 приложение для тестирования CI/CD pipeline с использованием GitHub Actions.

## 🚀 Технологии

- **Next.js 15** - React фреймворк с App Router
- **React 19** - Последняя версия React
- **TypeScript** - Типизированный JavaScript
- **Hero UI** - Современная UI библиотека
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Jest** - Тестирование
- **GitHub Actions** - CI/CD

## 📋 Возможности

- ✅ Автоматическое тестирование при каждом push/PR
- ✅ Проверка безопасности зависимостей
- ✅ Автоматический деплой на Vercel
- ✅ Тестирование производительности с Lighthouse
- ✅ Покрытие кода тестами
- ✅ Линтинг и проверка типов

## 🛠 Установка и запуск

```bash
# Установка зависимостей
yarn install

# Запуск в режиме разработки
yarn dev

# Сборка для продакшена
yarn build

# Запуск тестов
yarn test

# Линтинг
yarn lint

# Проверка типов
yarn type-check
```

## 🔄 CI/CD Pipeline

### Workflows

1. **CI (Continuous Integration)**
   - Запускается при push/PR в main/develop
   - Тестирует на Node.js 18.x и 20.x
   - Проверяет линтинг, типы, сборку
   - Аудит безопасности

2. **CD (Continuous Deployment)**
   - Запускается при push в main
   - Автоматически деплоит на Vercel
   - Комментирует URL деплоя в PR

3. **Test Suite**
   - Unit тесты с покрытием
   - E2E тесты
   - Performance тесты с Lighthouse

### Настройка секретов

Для работы CD pipeline необходимо добавить в GitHub Secrets:

- `VERCEL_TOKEN` - токен Vercel
- `ORG_ID` - ID организации Vercel
- `PROJECT_ID` - ID проекта Vercel

## 📊 Мониторинг

- **Coverage**: Отчеты о покрытии кода тестами
- **Performance**: Lighthouse метрики
- **Security**: Аудит зависимостей
- **Build Status**: Статус сборки и деплоя

## 🧪 Тестирование

```bash
# Запуск всех тестов
yarn test

# Тесты с покрытием
yarn test:coverage

# E2E тесты
yarn test:e2e

# CI команда (все проверки)
yarn ci
```

## 📁 Структура проекта

```
├── .github/workflows/    # GitHub Actions
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # React компоненты
│   └── __tests__/       # Тесты
├── jest.config.js       # Конфигурация Jest
├── lighthouse.config.js # Конфигурация Lighthouse
└── tailwind.config.ts   # Конфигурация Tailwind
```

## 🚀 Деплой

Приложение автоматически деплоится на Vercel при push в main ветку.

Ручной деплой:
```bash
# Установка Vercel CLI
npm i -g vercel

# Деплой
vercel --prod
```

## 📈 Метрики

- **Performance**: > 80
- **Accessibility**: > 90
- **Best Practices**: > 80
- **SEO**: > 80
- **Test Coverage**: > 70%

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature ветку
3. Внесите изменения
4. Добавьте тесты
5. Создайте Pull Request

## 📝 Лицензия

MIT License