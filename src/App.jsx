import { useState } from 'react'
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './assets/css/style.css'

function App() {
  

  const [editorText, setEditorText] = useState(`# Título Principal (H1)
## Subtítulo (H2)
[Link para o Google](https://www.google.com)

Texto com \`código em linha\`.

\`\`\`
Bloco de código:
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- Item 1
- Item 2
- Item 3

> Este é um blockquote.

![Imagem de Exemplo](https://via.placeholder.com/150)

**Texto em negrito**
`)

  marked.setOptions({
    gfm: true,
    breaks: true, // Quebras de linha em Markdown são renderizadas como <br>
    headerIds: false, // Remove IDs automáticos dos headers
  });

  

  const hundleChange = (event) => {    
    setEditorText(event.target.value)
  }


  return (
    <main>
       <h1 className='title'>Welcome to my simple Editor</h1>
       <form>
          <textarea value={editorText} cols={65} rows={10} id="editor" onChange={hundleChange}></textarea>
       </form>

       <div id="preview" 
       dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(editorText)) }}>
        
       </div>
    </main>
  )
}

export default App
