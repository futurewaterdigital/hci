import translate from 'google-translate-api-x';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get('text') || 'Hello World';
    const targetLang = searchParams.get('lang') || 'fr';

    console.log(`Simple API - Translating "${text}" to ${targetLang}`);

    const result = await translate(text, { 
      to: targetLang, 
      from: 'ar' 
    });
    
    console.log('Simple API - Translation result:', result);

    return Response.json({
      success: true,
      original: text,
      translated: result.text,
      targetLanguage: targetLang,
      rawResult: result
    });
  } catch (error) {
    console.error('Simple API - Translation error:', error);
    return Response.json({
      success: false,
      error: error.message,
      stack: error.stack,
      original: text || 'Hello World',
      translated: text || 'Hello World',
      targetLanguage: targetLang || 'fr'
    }, { status: 500 });
  }
} 