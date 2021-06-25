import Head from 'next/head'
const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content="width=device-width, initial-scale=1" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf_8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Salma EL BARMKAI - web developer',
    keywords: "portfolion, web, web developer, front-end, front-end developer, front-end web developer, front-end web developer portfolio, web developer portfolio, software engineer, software engineer portfolio, full stack, full stack web developer, full-stack, full-stack web developer, full-stack web developer portfolio, web development hiring",
    description: 'I am a front-end web developer, and this is my portfolio showcasing my knowledge and projects.'
}

export default Meta
