import { translateText } from '@/lib/translation';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get('text') || 'Hello World';
    const targetLang = searchParams.get('lang') || 'es';

    console.log(`Translating "${text}" to ${targetLang}`);

    const translatedText = await translateText(text, targetLang, 'en');

    return Response.json({
      success: true,
      original: text,
      translated: translatedText,
      targetLanguage: targetLang
    });
  } catch (error) {
    console.error('Translation API error:', error);
    return Response.json({
      success: false,
      error: error.message,
      original: text || 'Hello World',
      translated: text || 'Hello World',
      targetLanguage: targetLang || 'es'
    }, { status: 500 });
  }
} 