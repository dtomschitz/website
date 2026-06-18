import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Markdown({children}: {children: string}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({href, ...props}) => <a href={href} target="_blank" rel="nofollow noopener" {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
