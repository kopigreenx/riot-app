import {
    component
} from 'riot'
import app from './app.riot'
import '../node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/admin-lte/bower_components/font-awesome/css/font-awesome.min.css'
import '../node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css'
import '../node_modules/admin-lte/bower_components/jvectormap/jquery-jvectormap.css'
import '../node_modules/admin-lte/dist/css/AdminLTE.min.css'
import '../node_modules/admin-lte/dist/css/skins/_all-skins.min.css'

import 'bootstrap';
component(app)(document.getElementById('root'), {
    message: 'Halo Broh yyy'
})