import Markdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nightOwl as syntaxStyle} from 'react-syntax-highlighter/dist/esm/styles/prism'

const ContentWrapper = ({markdown}) => {
  return (  
    <article>
    <Markdown
    className="prose prose-xl dark:prose-invert prose-pre:bg-inherit"
    children={markdown}
    components={{
      code(props) {
        const {children, className, node, ...rest} = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={syntaxStyle}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }}
  />
    </article>
  )

}

export default ContentWrapper
