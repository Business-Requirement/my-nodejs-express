import {Router} from 'express';

// Init router and path
const router = Router();

// Add sub-routes
router.get('/ping', (req, res, next) => {
    res.send('pong');
});

// Export the base-router
export default router;
