import ReactMarkdown from 'react-markdown'
import arquivoMD from '../../README.md?raw'

export default function LerMD(){
    return <ReactMarkdown>{arquivoMD}</ReactMarkdown>;
}