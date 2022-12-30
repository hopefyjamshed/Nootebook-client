import React from 'react';

import Media from '../../other/media/Media';
import Loading from '../../shares/loading/Loading';
import Upload from '../upload/Upload';

const Home = () => {

    return (
        <div>
            <Upload></Upload>
            <Media></Media>
        </div>
    );
};

export default Home;