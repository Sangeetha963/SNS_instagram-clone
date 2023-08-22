/**
 * Do not edit this file.
 * If you want to add a 'page file', add it to `~/routes`.
 * We don't use the VPS routing function.
 */

import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

export const Page: FC = () => {
    return <>{useRoutes(routes)}</>
}
