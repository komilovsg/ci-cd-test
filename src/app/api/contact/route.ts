import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Валидация данных
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
        { status: 400 }
      );
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Некорректный email адрес' },
        { status: 400 }
      );
    }

    // Здесь можно добавить интеграцию с email сервисом
    // Например, SendGrid, Nodemailer, или Resend
    
    // Пока что просто логируем данные
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Симулируем отправку email
    // В реальном проекте здесь будет код отправки email
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Сообщение успешно отправлено!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.' 
      },
      { status: 500 }
    );
  }
}
