import React from 'react';
import { Helmet } from 'react-helmet';

function HeaderInfos({title="Site non officiel de la Ligue 1", description ="Site d'un fan non offi", author, url, follow, robots, image}) {
   
    return (
        <Helmet>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="content-language" content="fr"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="author" content={author}/>
            <meta name="theme-color" content="#252b41"/>

            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="286"/>
            <meta property="og:url" content={url}/>

            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@mon_twitter"/>

            {/* index, follow ||noindex, nofollow */}
            <meta name="robots" content={robots} />
            <link rel="canonical" href={url} />

            {/* follow ||nofollow */}
            <link rel={follow} href={url} />

            <link rel="icon" type="image/png" href="./assets/img/Favicon.svg" />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": {author},
                    "url": {url},
                    "logo": {image}
                })}
            </script>
                <s
        </Helmet>
    )
}

export default HeaderInfos;