/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';
import { ISVG } from '../../interfaces';

const SVG = (props: ISVG) => {
    const { src, ...other } = props;

    const Wrapper = props.wrapper || 'span';

    return <Wrapper {...other} dangerouslySetInnerHTML={{ __html: src }}></Wrapper>;
};

export default SVG;
