import React from 'react'

export type DocTitleProps = {
  title: string
}

const APP_TITLE = process.env.APP_TITLE || 'React APP'

export const DocTitle: React.FC<DocTitleProps> = ({ title }) => {
  React.useEffect(() => {
    document.title = title

    return () => {
      document.title = APP_TITLE
    }
  }, [title])

  return null
}
