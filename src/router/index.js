// router/index.js
import { createHashRouter } from 'react-router-dom'  // Change to createHashRouter
import routes from '@router/routes'

const router = createHashRouter(routes)  // Use createHashRouter instead

export default router
