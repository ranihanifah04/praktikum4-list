import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from '../Beranda';
import tentangSaya from '../tentangsaya';
import karya from '../karya';
import kontak from '../kontak';
import list from '../list';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={tentangSaya} />
        <Route path="/karya" component={karya} />
        <Route path="/kontak" component={kontak} />
        <Route path="/list" component={list} />
    </Switch>
)

export default Utama;