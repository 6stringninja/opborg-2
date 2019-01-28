import * as express from 'express';
import { PageData } from '../appdata';
import { PiClients } from '../../shared/PiClient';
import { PiClient } from "../../shared/PiClient";

export const defaultApiRoutes = express.Router();
const apd = new PageData();
const clients = [{
  name: 'client 1',
  ip: '192.1.0.1',
  created: 1234
}];
function setPage(name = '', url='', breadcrumb='Overview'){
  apd.menuitems.forEach(m => {
    m.selected = m.url===url;
    
  });
  apd.breadcrumbs[0].title = name;
  apd.breadcrumbs[0].url = url;
  apd.breadcrumbs[1].title = breadcrumb;
  apd.page = name;
  
}
defaultApiRoutes.get('/clients', (req, res) => {
  var cnt = PiClients.length + 1;
  PiClients.forEach((c)=>{
    c.hashRate10m = Math.floor(Math.random() * 10 + 1);
    c.hashRate10s = Math.floor(Math.random() * 10 + 1);
    c.hashRate1m = Math.floor(Math.random() * 10 + 1);
  })
  PiClients.push(new PiClient('Client ' + cnt, '192.1.0.' + cnt, new Date().getTime(), 'green'))
 
  res.send({ data: PiClients });
});
 