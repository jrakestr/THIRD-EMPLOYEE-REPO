import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import OpenAI from 'https://deno.land/x/openai@v4.20.1/mod.ts'

serve(async (req) => {
  const apiKey = Deno.env.get('OPENAI_API_KEY')
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'OpenAI API key is not set' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const openai = new OpenAI({ apiKey })

  try {
    const { query } = await req.json()
    console.log("Received query:", query)
    
    // Documentation here: https://github.com/openai/openai-node
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      // Choose model from here: https://platform.openai.com/docs/models
      model: 'gpt-3.5-turbo',
      stream: false,
    })

    const reply = chatCompletion.choices[0].message.content

    return new Response(JSON.stringify({ result: reply }), { headers: { "Content-Type": "application/json" } })
  } catch (error) {
    console.error("Error in function:", error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } })
  }
})