import * as express from 'express';
import { PageData } from '../appdata';

export const defaultRoutes = express.Router();
const apd = new PageData();
function setPage(name = '', url='', breadcrumb='Overview'){
  apd.menuitems.forEach(m => {
    m.selected = m.url===url;
    
  });
  apd.breadcrumbs[0].title = name;
  apd.breadcrumbs[0].url = url;
  apd.breadcrumbs[1].title = breadcrumb;
  apd.page = name;
  
}
defaultRoutes.get('/', (req, res) => {
  setPage('Dashboard','/');
  res.render('pages/index',{
    data: apd
  } );
});
defaultRoutes.get('/miners', (req, res) => {
  setPage('Miners','/miners');
  res.render('pages/miners',{
    data: apd
  } );
});
defaultRoutes.get('/stats', (req, res) => {
  setPage('Stats','/stats');
  res.render('pages/stats',{
    data: apd
  } );
});
defaultRoutes.get('/settings', (req, res) => {
  setPage('Settings','/settings');
  res.render('pages/settings',{
    data: apd
  } );
});