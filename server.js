const PATH_PROJECT = '/dist/sip-property-management-angula';
import express, { static } from 'express';
const app = express();
import { join } from 'path';

app.use(static(__dirname + PATH_PROJECT));
app.get('*', (req, res) => {
  res.sendFile(join(__dirname + PATH_PROJECT + '/index.html'));
});

app.listen(process.env.PORT || 5000);